import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './MyArtworks.scss';

import ArtworkSmall from './../ArtworkSmall/ArtworkSmall';
import CustomButton from './../CustomButton/CustomButton';

import { getUserArtworks } from './../../redux/actions/artwork';

const MyArtworks = ({ artworks, getUserArtworks }) => {
  useEffect(() => {
    getUserArtworks();
  }, []);

  return (
    <main className="MyArtworks">
      <h2 className="MyArtworks__title">My Artworks</h2>
      <span className="MyArtworks__subtitle">
        Edit and Delete your Artworks here
      </span>
      <div className="MyArtworks__artworks">
        {artworks.map((artwork) => (
          <ArtworkSmall key={artwork.id} {...artwork}>
            <CustomButton
              backgroundColor={`#0088CE`}
              padding="5px 20px"
              fontSize="1rem"
            >
              Edit
            </CustomButton>
            <CustomButton
              backgroundColor={`#D24D25`}
              padding="5px 20px"
              fontSize="1rem"
            >
              Delete
            </CustomButton>
          </ArtworkSmall>
        ))}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  artworks: state.artwork.userArtworks,
});

const mapDispatchToProps = (dispatch) => ({
  getUserArtworks: () => dispatch(getUserArtworks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyArtworks);
