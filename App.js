/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './type/default';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components/native';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = false;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            backgroundColor={theme.colors.fill.dark.primary}
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          />
          <Routes />
        </SafeAreaView>
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;
