import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';

import { Container } from './assets/styles/styles';

// import { ImageHomeOffice, ImageBusiness } from './assets/images';

import HomeOffice from './assets/images/home-office.jpg';
import Business from './assets/images/business.png';

const Carousel = () => {
  return (
    <Container>
      <AwesomeSlider cssModule={AwsSliderStyles} play={true} interval={6000}>
        <div data-src={HomeOffice}>
          <p>I want to see what you got.</p>
        </div>
        <div data-src={Business}>
          <p>The answer is -- Don't think about it.</p>
        </div>
      </AwesomeSlider>
    </Container>
  );
};

export default Carousel;
