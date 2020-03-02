import React from 'react';
import { Link } from 'react-router-dom';
import './CustomLink.scss';

const CustomLink = ({ children }) => {
  return (
    <Link to="/" className="CustomLink">
      {children}
    </Link>
  );
};

export default CustomLink;
