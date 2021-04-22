import React, {useState, useRef} from 'react';
import HomeImage from '../../../image/home2.svg';
import HomeBarImage from '../../../image/home-bar.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from '../../components/Carrousel';
import {navigate} from '../../routes/NavigationRef';
import {
  PageContainer,
  TextContainer,
  TouchableHighlightContainer,
  NextTextContainer,
  HomeBarContainer
} from './splash.style';

const SplashOne = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = false;
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
    <PageContainer
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <TextContainer>
        Skip
      </TextContainer>
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
      <TouchableHighlightContainer onPress={() => { navigate('splash2') }}>
        <NextTextContainer>
          Next
        </NextTextContainer>
      </TouchableHighlightContainer>
      <HomeBarContainer>
        <HomeBarImage />
      </HomeBarContainer>
    </PageContainer>
  );
};

export default SplashOne;
