import React from 'react';

import './CustomButton.scss';

const Button = ({
  children,
  backgroundColor,
  padding,
  fontSize,
  handleClick,
}) => {
  return (
    <button
      style={{ backgroundColor, padding, fontSize }}
      className="CustomButton"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
