import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SnackbarProvider } from 'react-snackbar-alert';
import './App.css';

import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Alert from './components/Alert/Alert';

// import PrivateRoute from './routing/PrivateRoute/pr';

import { loadUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.jwt) {
  setAuthToken(localStorage.jwt);
}

const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <SnackbarProvider>
      <div className="App">
        <Alert />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </SnackbarProvider>
  );
};

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadUser())
});

export default connect(null, mapDispatchToProps)(App);
