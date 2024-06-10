import { DefaultTheme } from '@react-navigation/native';

const TaksTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#363636', // Color de fondo global para todas las pantallas
    primary: '#363636', // Color primario
    card: '#2f3542', // Color del fondo de los headers y las tarjetas
    text: '#ffffff', // Color del texto
    border: '#cccccc', // Color de los bordes
    notification: '#ff6347', // Color de las notificaciones
  },
};

export default TaksTheme;