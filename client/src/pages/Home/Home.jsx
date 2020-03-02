import React from 'react';

// Layout
import Hero from './layout/Hero/Hero';
import ArtworkWeek from './layout/ArtworkWeek/ArtworkWeek';

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <ArtworkWeek />
    </div>
  );
};

export default Home;
