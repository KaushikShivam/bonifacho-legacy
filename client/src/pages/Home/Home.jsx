import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Layout
import Hero from './layout/Hero/Hero';
import ArtworkWeek from './layout/ArtworkWeek/ArtworkWeek';
import ArtistWeek from './layout/ArtistWeek/ArtistWeek';
import CollectionPreview from './layout/CollectionPreview/CollectionPreview';
import Mailer from './layout/Mailer/Mailer';
import FineArt from './layout/FineArt/FineArt';
import Services from './layout/Services/Services';

// Redux
import { getArtworksWithCategories } from './../../redux/actions/artwork';

const Home = ({ getArtworksWithCategories, artworkCategories }) => {
  useEffect(() => {
    getArtworksWithCategories();
  }, [getArtworksWithCategories]);

  const configureArtworkCategories = () => {
    console.log(artworkCategories);
    return artworkCategories.map((artwork) => (
      <CollectionPreview key={artwork._id} {...artwork} />
    ));
  };

  return (
    <div className="Home">
      <Hero />
      <ArtworkWeek />
      <ArtistWeek />
      {configureArtworkCategories()}
      <Mailer />
      <FineArt />
      <Services />
    </div>
  );
};

const mapStateToProps = (state) => ({
  artworkCategories: state.artwork.artworkCategories,
});

const mapDispatchToProps = (dispatch) => ({
  getArtworksWithCategories: () => dispatch(getArtworksWithCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
