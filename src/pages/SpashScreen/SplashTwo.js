import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import HomeImage from '../../../image/home2.svg';
import HomeBarImage from '../../../image/home-bar.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from '../../components/Carrousel';
import {navigate} from '../../routes/NavigationRef';

const SplashOne = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data] = useState([
    {
      title: 'Learn anytime\nand anywhere',
      body:
        'Quarantine is the perfect time to spend your day learning something new, from anywhere!',
      ImageIcon: HomeImage,
    },
    {
      title: 'Find a course for you',
      body:
        'Quarantine is the perfect time to spend your day learning something new, from anywhere!',
      ImageIcon: HomeImage,
    },
    {
      title: 'Improve your skills',
      body:
        'Quarantine is the perfect time to spend your day learning something new, from anywhere!',
      ImageIcon: HomeImage,
    },
  ]);
  const isCarousel = useRef(null);

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        ...styles.page,
      }}>
      <Text
        style={{
          fontSize: 14,
          color: '#78746D',
          fontWeight: 'bold',
          left: '35.56%',
          right: '0%',
          top: '0%',
        }}>
        Skip
      </Text>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      <TouchableHighlight
        style={{
          height: 56,
          width: 311,
          borderRadius: 16,
          marginLeft: 50,
          marginRight: 50,
          marginBottom: 50,
          backgroundColor: '#E3562A',
        }}
        onPress={() => { navigate('splashh') }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 15,
          }}>
          Next
        </Text>
      </TouchableHighlight>
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
  buttonNext: {
    borderRadius: 16,
  },
});

export default SplashOne;
