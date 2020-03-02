import React from 'react';
import Fineart from './../../../../assets/Fine-art.png';
import FormButton from '../../components/FormButton/FormButton';

import './FineArt.scss';

const FineArt = () => {
  return (
    <div className="FineArt">
      <div className="FineArt-img">
        <img src={Fineart} alt="Fine art" />
      </div>
      <div className="FineArt-content">
        <h2>ORIGINAL FINE ART</h2>
        <p>
          House of 99 is not a standard gallery; we’re the first fine art house
          in the world. We offer original, one-of-a-kind artworks that are
          curated by our team to a museum-level standard from the well-known
          contemporary artists of our time..
        </p>
        <FormButton>LEARN MORE</FormButton>
      </div>
    </div>
  );
};

export default FineArt;
