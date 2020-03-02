import React from 'react';
import './FormButton.scss';

const FormButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} FormButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default FormButton;
