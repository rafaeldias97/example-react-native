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
  StyleSheet,
  useColorScheme,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashOne from './src/pages/SpashScreen/SplashTwo';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './type/default';
import Routes from './src/routes';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          backgroundColor={theme.colors.fill.dark.primary}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <Routes />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBar: {
    position: 'absolute',
    left: '32.27%',
    right: '32%',
    top: '95.81%',
    bottom: '0%',
  },
  image: {
    width: 375,
    height: 326,
  },
});

export default App;
