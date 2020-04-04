import React from 'react';
import sampleArtworkBig from '../../assets/sampleArtworkBig.png';
import './ArtworkSmall.scss';

const ArtworkSmall = ({ children }) => {
  return (
    <div className="ArtworkSmall">
      <div className="ArtworkSmall__img">
        <img src={`${sampleArtworkBig}`} alt="" />
      </div>
      <div className="ArtworkSmall__content">
        <div className="ArtworkSmall__info">
          <h3 className="ArtworkSmall__title">Butterfly Affect</h3>
          <p className="ArtworkSmall__author">Thomas Bijen</p>
        </div>
        <div className="ArtworkSmall__detail">
          <p className="ArtworkSmall__price">$3,490</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ArtworkSmall;
