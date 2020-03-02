import React from 'react';

// Layout
import Hero from './layout/Hero/Hero';
import ArtworkWeek from './layout/ArtworkWeek/ArtworkWeek';
import ArtistWeek from './layout/ArtistWeek/ArtistWeek';
import CollectionPreview from './layout/CollectionPreview/CollectionPreview';
import Mailer from './layout/Mailer/Mailer';
import FineArt from './layout/FineArt/FineArt';

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <ArtworkWeek />
      <ArtistWeek />
      <CollectionPreview />
      <CollectionPreview />
      <CollectionPreview />
      <CollectionPreview />
      <Mailer />
      <FineArt />
    </div>
  );
};

export default Home;
