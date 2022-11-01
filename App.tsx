import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

import { Home } from '@screens/Home';

import { theme } from './src/styles/themes/default';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
