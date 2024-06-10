
import { View, Text, StyleSheet, } from "react-native"

const SettingsScreen = () => {
  return(
    <View style={styles.content}>
      <Text style={styles.textMain}>Creado por:</Text>
      <Text style={styles.text}>
        Thian S.C
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textMain: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ecf0f1',
    margin: 20,
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    color: '#ecf0f1',
    fontWeight: 'bold',
  }
})

export default SettingsScreen