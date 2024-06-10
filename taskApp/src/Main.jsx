import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigator';

import TaksTheme from './theme';


const Main = () => {
  return(
    <NavigationContainer theme={TaksTheme}>
      <DrawerNavigation />
    </NavigationContainer>
  )
}

export default Main