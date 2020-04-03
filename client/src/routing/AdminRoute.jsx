import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!isAuthenticated && !loading) {
        return <Redirect to="/login" />;
      } else {
        if (user.role === 'creator') {
          <Redirect to="/" />;
        } else {
          <Component {...props} />;
        }
      }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
