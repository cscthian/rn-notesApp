import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const BaseTextIcon = (props) => {
  const tiStyles = StyleSheet.create({
    item: {
      padding: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    text: {
      marginLeft: 10,
      fontSize: 15,
      color: props.color
    }
  })

  return(
    <View style={tiStyles.item}>
      { props.icon ? props.icon :  <FontAwesome name='home' size={24} color='#dfe4ea' />}
      <Text style={tiStyles.text}>{props.label}</Text>
    </View>
  )
}



export default BaseTextIcon