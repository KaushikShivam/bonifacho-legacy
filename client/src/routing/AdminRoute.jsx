import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!isAuthenticated && !loading) {
        return <Redirect to="/login" />;
      } else if (!loading && isAuthenticated && user) {
        if (user.role === 'artist') {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminRoute);
