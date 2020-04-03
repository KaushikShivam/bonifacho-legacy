import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './MyArtworks.scss';

import ArtworkSmall from './../ArtworkSmall/ArtworkSmall';

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
        {artworks.map(artwork => (
          <ArtworkSmall key={artwork.id} />
        ))}
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  artworks: state.artwork.userArtworks
});

const mapDispatchToProps = dispatch => ({
  getUserArtworks: () => dispatch(getUserArtworks())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyArtworks);
