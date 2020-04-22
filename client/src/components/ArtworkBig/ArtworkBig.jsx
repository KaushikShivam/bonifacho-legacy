import React from 'react';
import './ArtworkBig.scss';

import CustomButton from './../CustomButton/CustomButton';

const ArtworkBig = ({ name, artist, edition, price, category, image }) => {
  return (
    <div className="ArtworkBig">
      <div className="ArtworkBig-img">
        <img src={image} alt={name} />
      </div>
      <div className="ArtworkBig-content">
        <div className="ArtworkBig-info">
          <h3 className="ArtworkBig-title">{name}</h3>
          <p className="ArtworkBig-author">{artist.name}</p>
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
