import React from 'react';

import './Dashboard.scss';

import ArtworkForm from './../../components/ArtworkForm/ArtworkForm';

const Dashboard = () => {
  return (
    <main className="Dashboard">
      <nav className="Dashboard__nav">
        <button>Create New</button>
      </nav>
      <div className="Dashboard__container">
        <ArtworkForm />
      </div>
    </main>
  );
};

export default Dashboard;
