import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { createDrawerNavigator } from '@react-navigation/drawer'

import BaseTextIcon from '../components/base/BaseTextIcon';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return(
    <Drawer.Navigator 
      initialRouteName="home"
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      drawerContentContainerStyle={{padding: 10,}}
    >
      <Drawer.Screen 
        name='Thian Check'
        component={HomeScreen}
        options={{
          drawerLabel: () => <BaseTextIcon 
            label="Home"
            color="#dfe4ea"
            icon={<FontAwesome name="home" size={24} color="#dfe4ea" />}
          />,
        }}
      />
      <Drawer.Screen 
        name='Creditos'
        component={SettingsScreen}
        options={{
          drawerLabel: () => <BaseTextIcon 
            label="Creditos"
            color="#dfe4ea"
            icon={<Ionicons name="settings" size={24} color="#dfe4ea" />}
          />,
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

