import React, { Component } from 'react';
import './ArtworkWeek.scss';

import ArtworkBig from './../../../../components/ArtworkBig/ArtworkBig';
import CustomLink from './../../../../components/CustomLink/CustomLink';

const ArtworkWeek = () => {
  return (
    <div className="ArtworkWeek">
      <h2 className="ArtworkWeek-title">ARTWORKS OF THE WEEK</h2>
      <div className="ArtworkWeek-content">
        <ArtworkBig />
        <ArtworkBig />
      </div>
      <div className="ArtworkWeek-link">
        <CustomLink>SHOP ALL ARTWORKS</CustomLink>
      </div>
    </div>
  );
};

export default ArtworkWeek;
