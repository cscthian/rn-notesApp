import 'react-native-gesture-handler';

import { useEffect, useCallback } from 'react';
import { StyleSheet } from 'react-native';

import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';

import Main from './src/Main';

import { GlobalProvider } from './src/context/GlobalContext';

import { initDatabase } from './src/DataBase';

export default function App() {
  // iniciamos la BD
  useEffect(() => {
    initDatabase()
  }, [])

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  if (!fontsLoaded) {
    console.log('cargando ...')
  }

  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regularText: {
    fontFamily: 'Ubuntu_400Regular',
  },
  italicText: {
    fontFamily: 'Ubuntu_400Regular_Italic',
  },
  boldText: {
    fontFamily: 'Ubuntu_700Bold',
  },
  boldItalicText: {
    fontFamily: 'Ubuntu_700Bold_Italic',
  },
});

export const globalStyles = styles;