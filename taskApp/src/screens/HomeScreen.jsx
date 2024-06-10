import { Text, View } from "react-native"

import TabHomeNavigator from "../navigation/TabHomeNavigator"
import AddTask from "../components/notes/AddTask"

const HomeScreen = () => {

  return (
    <>
      <AddTask />
      <TabHomeNavigator />
    </>
  )
}

export default HomeScreen