import React from 'react';
import sampleArtworkBig from '../../assets/sampleArtworkBig.png';
import './ArtworkSmall.scss';

const ArtworkSmall = ({
  children,
  name,
  artist,
  edition,
  price,
  category,
  image,
}) => {
  return (
    <div className="ArtworkSmall">
      <div className="ArtworkSmall__img">
        <img src={`${image}`} alt={name} />
      </div>
      <div className="ArtworkSmall__content">
        <div className="ArtworkSmall__info">
          <h3 className="ArtworkSmall__title">{name}</h3>
          <p className="ArtworkSmall__author">{artist}</p>
        </div>
        <div className="ArtworkSmall__detail">
          <p className="ArtworkSmall__price">{`$${price}`}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ArtworkSmall;
