import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TaskManageScreen from '../screens/TaskManageScreen';

const Tab = createBottomTabNavigator();

const TabHomeNavigator = () => {
  return(
    <Tab.Navigator 
    initialRouteName='list-tasks'    
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#f1f2f6',
      headerShown: false,
      tabBarStyle: {
        paddingBottom: 10,
        paddingTop: 10,
        height: 65,
      },
    })}
    
    >
      <Tab.Screen 
        name='list-tasks'
        component={TaskManageScreen}
        initialParams={{ categoryTaks: 'all' }}
        options={{
          tabBarLabel: 'Todo',
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <FontAwesome name="tasks" size={24} color="#dfe4ea" />
            } else {
              return <FontAwesome name="tasks" size={24} color="#718093" />
            }
          },
        }}
      />
      <Tab.Screen 
        name='shop-tasks'
        component={TaskManageScreen}
        initialParams={{ categoryTaks: 'shop' }}
        options={{
          tabBarLabel: 'Compras',
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <AntDesign name="shoppingcart" size={24} color="#dfe4ea" />
            } else {
              return <AntDesign name="shoppingcart" size={24} color="#718093" />
            }
          }   
        }}
      />
      <Tab.Screen 
        name='movies-tasks'
        component={TaskManageScreen}
        initialParams={{ categoryTaks: 'movie' }}
        options={{
          tabBarLabel: 'Peliculas',
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Entypo name="video-camera" size={24} color="#dfe4ea" />
            } else {
              return <Entypo name="video-camera" size={24} color="#718093" />
            }
          }
        }}
      />
      <Tab.Screen 
        name='book-tasks'
        component={TaskManageScreen}
        initialParams={{ categoryTaks: 'book' }}
        options={{
          tabBarLabel: 'Libros',
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <FontAwesome name="book" size={24} color="#dfe4ea" />
            } else {
              return <FontAwesome name="book" size={24} color="#718093" />
            }
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default TabHomeNavigator