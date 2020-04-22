import React, { useState } from 'react';
import './CollectionPreview.scss';

import CustomButton from './../../../../components/CustomButton/CustomButton';
import CustomLink from './../../../../components/CustomLink/CustomLink';
import ArtworkSmall from './../../../../components/ArtworkSmall/ArtworkSmall';

const CollectionPreview = ({ _id, artworks }) => {
  const [edition, setEdition] = useState('limited');

  const configureArtworkSmall = () => {
    const filteredArtworks = artworks
      .filter((artwork) => edition === artwork.edition)
      .slice(0, 4);
    return filteredArtworks.map((artwork) => (
      <ArtworkSmall key={artwork._id} {...artwork}>
        <CustomButton
          backgroundColor={`rgb(171, 155, 138)`}
          padding="5px 10px"
          fontSize="1rem"
        >
          SHOW NOW
        </CustomButton>
      </ArtworkSmall>
    ));
  };

  return (
    <div className="CollectionPreview">
      <div className="CollectionPreview-header">
        <h3 className="CollectionPreview-title">{_id.toUpperCase()}</h3>
        <div className="CollectionPreview-buttons">
          <CustomButton
            backgroundColor="#AB9B8A"
            padding="1.1rem 2rem"
            fontSize="1.2rem"
            handleClick={() => setEdition('limited')}
          >
            LIMITED EDITIONS
          </CustomButton>
          <CustomButton
            backgroundColor="black"
            padding="1.1rem 2rem"
            fontSize="1.2rem"
            handleClick={() => setEdition('original')}
          >
            ORIGINAL ARTWORKS
          </CustomButton>
        </div>
      </div>
      <div className="CollectionPreview-artworks">
        {configureArtworkSmall()}
      </div>
      <div className="ArtworkWeek-link">
        <CustomLink>
          BROWSE ALL {_id.toUpperCase()} IN {edition.toUpperCase()} EDITIONS
        </CustomLink>
      </div>
    </div>
  );
};

export default CollectionPreview;
