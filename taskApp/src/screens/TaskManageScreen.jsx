import { useContext, useEffect } from "react"

import { Text, View } from "react-native"

import ListTasks from "../components/notes/ListTasks"
import { baseStyles } from "../BaseStyles"


const TaskManageScreen = ({ route, navigation }) => {

  const { categoryTaks } = route.params

  return(
    <View style={{...baseStyles.body}}>
      <ListTasks
        category={categoryTaks}
      />
    </View>
  )
}

export default TaskManageScreen