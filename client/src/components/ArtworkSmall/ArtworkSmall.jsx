import React from 'react';
import sampleArtworkBig from '../../assets/sampleArtworkBig.png';
import './ArtworkSmall.scss';

import CustomButton from './../CustomButton/CustomButton';

const ArtworkSmall = () => {
  return (
    <div className="ArtworkSmall">
      <div className="ArtworkSmall-img">
        <img src={`${sampleArtworkBig}`} alt="" />
      </div>
      <div className="ArtworkSmall-content">
        <div className="ArtworkSmall-info">
          <h3 className="ArtworkSmall-title">Butterfly Affect</h3>
          <p className="ArtworkSmall-author">Thomas Bijen</p>
        </div>
        <div className="ArtworkSmall-detail">
          <p className="ArtworkSmall-price">$3,490</p>
          <CustomButton
            backgroundColor={`#AB9B8A`}
            padding="5px 7px"
            fontSize="1rem"
          >
            SHOP NOW
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ArtworkSmall;
