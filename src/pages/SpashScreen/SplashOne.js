import React from 'react';
import HomeImage from '../../../image/home.svg';
import HomeBarImage from '../../../image/home-bar.svg';
import { PageContainer, HomeBarContainer } from './splash.style';


const SplashTwo = () => {
  return (
    <PageContainer>
      <HomeImage width="100%" height="45%" />
      <HomeBarContainer>
        <HomeBarImage />
      </HomeBarContainer>
    </PageContainer>
  );
};

export default SplashTwo;
