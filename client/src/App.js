import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SnackbarProvider } from 'react-snackbar-alert';
import './App.css';

import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Alert from './components/Alert/Alert';

const App = () => {
  return (
    <SnackbarProvider>
      <div className="App">
        <Alert />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
        <Footer />
      </div>
    </SnackbarProvider>
  );
};

export default App;
