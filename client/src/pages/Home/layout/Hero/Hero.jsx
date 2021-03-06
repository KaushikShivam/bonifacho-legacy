import React from 'react';
import './Hero.scss';
import heroBg from './../../../../assets/heroBg.png';

import CustomButton from './../../../../components/CustomButton/CustomButton';

const Hero = () => {
  return (
    <div className="Hero" style={{ background: `url(${heroBg})` }}>
      <h3 className="Hero-subtitle">HOUSE OF 99 PRESENTS</h3>
      <h1 className="Hero-title">BONIFACHO</h1>
      <div className="Hero-btns">
        <CustomButton
          backgroundColor="#AB9B8A"
          padding="1.5rem 3rem"
          fontSize="1.5rem"
        >
          SHOW ALL LIMITED EDITIONS
        </CustomButton>
        <CustomButton
          backgroundColor="#000000"
          padding="1.5rem 3rem"
          fontSize="1.5rem"
        >
          SHOW ALL ORIGINAL ARTWORKS
        </CustomButton>
      </div>
    </div>
  );
};

export default Hero;
