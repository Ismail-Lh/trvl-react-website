import React from 'react';

import './Hero.scss';

import { Button } from '..';

const Hero = () => {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>adventures awaits</h1>
      <p>Wath are you waiting for?</p>

      <div className='hero-btns'>
        <Button
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          get started
        </Button>

        <Button
          className='btn'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
          watch trailer <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
