import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
