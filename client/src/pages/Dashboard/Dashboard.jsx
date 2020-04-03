import React from 'react';

import './Dashboard.scss';

import ArtworkForm from './../../components/ArtworkForm/ArtworkForm';
import MyArtworks from './../../components/MyArtworks/MyArtworks';

const Dashboard = () => {
  return (
    <main className="Dashboard">
      <nav className="Dashboard__nav">
        <button>Create New</button>
      </nav>
      <div className="Dashboard__container">
        {/* <ArtworkForm /> */}
        <MyArtworks />
      </div>
    </main>
  );
};

export default Dashboard;
