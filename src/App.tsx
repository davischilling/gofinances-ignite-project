import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native';

import theme from './global/theme';
import AppRoutes from './routes/app.routes';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontLoaded)
    return <AppLoading/>

  return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
  )
}
