import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './layout/Navbar/Navbar';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
