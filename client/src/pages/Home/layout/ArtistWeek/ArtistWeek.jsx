import React, { Component } from 'react';
import './ArtistWeek.scss';
import artistWeek from '../../../../assets/ArtistWeek.png';

import CustomLink from './../../../../components/CustomLink/CustomLink';

const ArtistWeek = () => {
  return (
    <div className="ArtistWeek">
      <div className="ArtistWeek-info">
        <h4 className="ArtistWeek-subtitle">Artist of the week</h4>
        <h2 className="ArtistWeek-title">GUIDO ARGENTINI</h2>
        <p className="ArtistWeek-decription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          porttitor leo in metus dignissim ultrices. Phasellus non dapibus nisl,
          in pretium mi. Maecenas molestie massa leo quis efficitur dolor
          tristique et.
        </p>
        <CustomLink>VIEW COLLECTION</CustomLink>
      </div>
      <div className="ArtistWeek-img">
        <img src={`${artistWeek}`} alt="Artist of the week" />
      </div>
    </div>
  );
};

export default ArtistWeek;
