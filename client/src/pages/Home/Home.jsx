import React from 'react';

// Layout
import Hero from './layout/Hero/Hero';
import ArtworkWeek from './layout/ArtworkWeek/ArtworkWeek';
import ArtistWeek from './layout/ArtistWeek/ArtistWeek';
import CollectionPreview from './layout/CollectionPreview/CollectionPreview';

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <ArtworkWeek />
      <ArtistWeek />
      <CollectionPreview />
    </div>
  );
};

export default Home;
