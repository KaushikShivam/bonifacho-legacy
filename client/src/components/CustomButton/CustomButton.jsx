import React from 'react';

import './Button.scss';

const Button = ({ children, backgroundColor, padding, fontSize }) => {
  return (
    <button style={{ backgroundColor, padding, fontSize }} className="Button">
      {children}
    </button>
  );
};

export default Button;
