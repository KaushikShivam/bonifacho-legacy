import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import cart from '../../assets/cart.png';
import phoneIcon from '../../assets/phoneGreen.png';
import searchInput from '../../assets/searchInput.png';

class Navbar extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="Navbar">
        <div className="Navbar-main">
          {/* left */}
          <div className="Navbar-main-left">
            <div className="search">
              <img src={`${searchInput}`} alt="Search input" />
            </div>
            <div className="phone">
              <div>
                <img src={`${phoneIcon}`} alt="phone icon" />
              </div>
              <p>+9711112922</p>
            </div>
          </div>
          <Link to="/" className="Navbar-main-center">
            <Logo />
          </Link>
          {/* Right */}
          <div className="Navbar-main-right">
            {currentUser ? (
              <div className="login">
                <p className="signin">LOG OUT</p>
              </div>
            ) : (
              <div className="login">
                <Link to="/auth" className="signin">
                  SIGN IN
                </Link>
                <Link to="/auth" className="register">
                  REGISTER
                </Link>
              </div>
            )}
            <div className="cart">
              <img src={`${cart}`} alt="Cart" />
              <span>8</span>
            </div>
          </div>
        </div>
        <div className="Navbar-bottom">
          <div className="categories">
            <p className="browse">BROWSE GALLERIES:</p>
            <div>LIMITED EDITIONS</div>
            <div>ORIGINAL ARTWORKS</div>
          </div>
          <div className="contact">
            <div>ARTISTS</div>
            <div>CONTACT US</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
