import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// components
import ArtworkBig from './../../components/ArtworkBig/ArtworkBig';

// redux
import { getAllArtworks } from './../../redux/actions/artwork';

const Artworks = ({ artworks, getAllArtworks }) => {
  useEffect(() => {
    getAllArtworks();
  }, [getAllArtworks]);

  const configureArtworks = () =>
    artworks.map((artwork) => <ArtworkBig key={artwork.id} {...artwork} />);

  return (
    <main className="Artworks">
      <nav className="Artworks__nav"></nav>
      <div className="Artworks__container">{configureArtworks()}</div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  artworks: state.artwork.artworks,
});

const mapDispatchToProps = (dispatch) => ({
  getAllArtworks: () => dispatch(getAllArtworks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artworks);
