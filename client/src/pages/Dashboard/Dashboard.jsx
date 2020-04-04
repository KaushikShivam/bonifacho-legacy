import React, { useState } from 'react';

import './Dashboard.scss';

import ArtworkForm from './../../components/ArtworkForm/ArtworkForm';
import MyArtworks from './../../components/MyArtworks/MyArtworks';

const Dashboard = () => {
  const [tab, setTab] = useState('My Artworks');

  const handleTabDisplay = () => {
    switch (tab) {
      case 'My Artworks':
        return <MyArtworks />;
      case 'Create New':
        return <ArtworkForm />;
      default:
        return <MyArtworks />;
    }
  };

  const handleButtonClick = (e) => setTab(e.target.textContent);

  return (
    <main className="Dashboard">
      <nav className="Dashboard__nav">
        <button
          className={`Dashboard__btn ${tab === 'My Artworks' ? 'active' : ''}`}
          onClick={handleButtonClick}
        >
          My Artworks
        </button>
        <button
          className={`Dashboard__btn ${tab === 'Create New' && 'active'}`}
          onClick={handleButtonClick}
        >
          Create New
        </button>
      </nav>
      <div className="Dashboard__container">{handleTabDisplay()}</div>
    </main>
  );
};

export default Dashboard;
