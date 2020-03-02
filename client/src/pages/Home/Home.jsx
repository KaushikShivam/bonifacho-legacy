import React from 'react';

// Layout
import Hero from './layout/Hero/Hero';
import ArtworkWeek from './layout/ArtworkWeek/ArtworkWeek';
import ArtistWeek from './layout/ArtistWeek/ArtistWeek';

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <ArtworkWeek />
      <ArtistWeek />
    </div>
  );
};

export default Home;
