
import { FontAwesome6 } from '@expo/vector-icons';

import { useState, useContext } from "react"
import { 
  View, 
  ToastAndroid,
  Text,
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  Keyboard 
} from "react-native"

import { createNoteBD } from '../../DataBase';
import { GlobalContext } from '../../context/GlobalContext';
import { baseStyles } from '../../BaseStyles';


const AddTask = () => {
  const {
    categoryContext,
    listGlobalNotes,
    setListGlobalNotes
  } = useContext(GlobalContext)
  const [taskTxt, setTaskTxt] = useState('')

  const addNewTask = async () => {
    if (taskTxt.length > 3) {
      Keyboard.dismiss()
      let data = {
        'note': taskTxt,
        'category': categoryContext
      }
      const response = await createNoteBD(data)
      setTaskTxt('')
      if (response.id) {
        let auxList = [...listGlobalNotes]
        auxList.unshift(response)
        setListGlobalNotes(auxList)
      }
    } else {
      ToastAndroid.show('ERROR: Texto muy corto!', ToastAndroid.LONG);
    }
    
  }

  return(
    <View style={atStyles.content}>
      <TextInput
        style={atStyles.input}
        placeholder="Ejm: Comprar libro el resplandor"
        placeholderTextColor="#576574"
        onChangeText={setTaskTxt}
        value={taskTxt}
      />
      <View style={atStyles.btn}>
        <TouchableOpacity style={atStyles.clickableContainer} onPress={addNewTask}>
          <FontAwesome6 name="plus" size={30} color={baseStyles.bgPrimary.backgroundColor} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const atStyles = StyleSheet.create({
  content: {
    ...baseStyles.body,
    marginTop: 10,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    marginBottom: 10,
  },
  input: {
    ...baseStyles.bgSecondary,
    flex: 1,
    borderWidth: 1,
    borderColor: baseStyles.colorSecondary.color,
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 15, 
    color: baseStyles.colorPrimary.color,
    marginVertical: 10,
    marginRight: 10,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: baseStyles.btnColors.primary,
  }
})

export default AddTask