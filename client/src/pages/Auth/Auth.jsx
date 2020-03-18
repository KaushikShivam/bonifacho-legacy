import React from 'react';
import './Auth.scss';

import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';

const Auth = () => {
  return (
    <div className="Auth">
      <Login />
      <SignUp />
    </div>
  );
};

export default Auth;
