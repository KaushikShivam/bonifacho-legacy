import React from 'react';
import sampleArtworkBig from '../../assets/sampleArtworkBig.png';
import './ArtworkBig.scss';

import CustomButton from './../CustomButton/CustomButton';

const ArtworkBig = () => {
  return (
    <div className="ArtworkBig">
      <div className="ArtworkBig-img">
        <img src={`${sampleArtworkBig}`} alt="" />
      </div>
      <div className="ArtworkBig-content">
        <div className="ArtworkBig-info">
          <h3 className="ArtworkBig-title">Butterfly Affect</h3>
          <p className="ArtworkBig-author">Thomas Bijen</p>
        </div>
        <div className="ArtworkBig-detail">
          <CustomButton
            backgroundColor={`#AB9B8A`}
            padding="5px 7px"
            fontSize="1rem"
          >
            SHOP NOW
          </CustomButton>
          <p className="ArtworkBig-price">$3,490</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkBig;
