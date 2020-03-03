import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-logo">
        <h4>LONDON</h4>
        <Link to="/">
          <Logo />
        </Link>

        <h4>BEVERLY HILLS</h4>
      </div>
      <div className="Footer-bottom">
        <p>&copy; 2019 House of 99. All rights reserved</p>
        <div className="links">
          <p className="link">Copyrights</p>
          <p className="link">Privacy Policy</p>
          <p className="link">Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
