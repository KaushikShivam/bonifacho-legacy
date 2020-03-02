import React, { Component } from 'react';
import './CollectionPreview.scss';

import Button from '../../components/Button/Button';
import CustomLink from '../../components/CustomLink/CustomLink';
import ArtworkSmall from '../../components/ArtworkSmall/ArtworkSmall';

const CollectionPreview = () => {
  return (
    <div className="CollectionPreview">
      <div className="CollectionPreview-header">
        <h3 className="CollectionPreview-title">BEST SELLERS</h3>
        <div className="CollectionPreview-buttons">
          <Button
            backgroundColor="#AB9B8A"
            padding="1.1rem 2rem"
            fontSize="1.2rem"
          >
            LIMITED EDITIONS
          </Button>
          <Button
            backgroundColor="black"
            padding="1.1rem 2rem"
            fontSize="1.2rem"
          >
            ORIGINAL ARTWORKS
          </Button>
        </div>
      </div>
      <div className="CollectionPreview-artworks">
        <ArtworkSmall />
        <ArtworkSmall />
        <ArtworkSmall />
        <ArtworkSmall />
      </div>
      <div className="ArtworkWeek-link">
        <CustomLink>BROWSE ALL BEST-SELLERS IN ORIGINAL EDITIONS</CustomLink>
      </div>
    </div>
  );
};

export default CollectionPreview;
