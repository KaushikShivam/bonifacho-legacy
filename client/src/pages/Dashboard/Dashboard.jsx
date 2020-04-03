import React from 'react';

import ArtworkForm from './../../components/ArtworkForm/ArtworkForm';

const Dashboard = () => {
  return (
    <main>
      <nav>
        <button>Create New</button>
      </nav>
      <div>
        <ArtworkForm />
      </div>
    </main>
  );
};

export default Dashboard;
