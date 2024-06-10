import { useState, useEffect , useContext, useRef} from "react";
import { View, Text, FlatList, StyleSheet, Animated  } from "react-native"
import { baseStyles } from "../../BaseStyles.js";

import { GlobalContext } from '../../context/GlobalContext';
import { listNotesBD, deleteNoteBD } from '../../DataBase.js'

import ListItemNote from './ListItemNote.jsx'

import { useIsFocused } from '@react-navigation/native';

const ListTasks = ({category}) => {
  const isFocused = useIsFocused();
  const {
    categoryContext, 
    setCategoryContext,
    listGlobalNotes,
    setListGlobalNotes,
  } = useContext(GlobalContext)
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const deleteItemList = async (item, index) => {
    
    console.log('eliminaod este objeto', item.id)
    const response = await deleteNoteBD(item.id)
    if (response) {
      console.log('comienza la animacion')
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 500, // Duración de la animación en milisegundos
          useNativeDriver: true,
        }
      ).start(() => {
        const newList = [...listGlobalNotes]
        newList.splice(index, 1)
        setListGlobalNotes(newList)
        fadeAnim.setValue(1);
      });
          
    }
  } 

  const renderItem = (item, index) => {
    return(
      <Animated.View style={{ opacity: fadeAnim }}>
        <ListItemNote  itemNote={item} deleteFunction={() => {deleteItemList(item, index)}}/>
      </Animated.View>
      
    )
  }

  useEffect(() => {
    if (isFocused) {
      console.log('useEfecct change', category)
      setCategoryContext(category)
      const listNotesByCategory = async () => {
        console.log('---cargando lista de notas ---')
        let results = await listNotesBD(category)
        setListGlobalNotes(results)
      }
      listNotesByCategory()
    }
  }, [isFocused]);

  return (
    <View>
      <FlatList
        data={listGlobalNotes}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={item => item.id}
        style={listStyles.list}
      />
    </View>
  )
}

const listStyles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    color: baseStyles.colorPrimary.color,
  },
})

export default ListTasks