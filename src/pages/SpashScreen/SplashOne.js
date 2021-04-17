import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import HomeImage from '../../../image/home.svg';
import HomeBarImage from '../../../image/home-bar.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SplashTwo = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        ...styles.page,
      }}>
      <HomeImage width="100%" height="45%" />
      <HomeBarImage style={styles.homeBar} />
    </View>
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

export default SplashTwo;
