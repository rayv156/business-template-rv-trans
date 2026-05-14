import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import companyLogo from '../images/rv_trans_logo.png';

function Navbar({businessInfo}) {
  const {phoneNumber} = businessInfo;
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar site-navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img className="navbar-logo" src={companyLogo} alt="RV Trans LLC Logo" />
        </a>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isActive}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a href="/" className="navbar-item">Home</a>
          <a href="/about" className="navbar-item">About</a>
          <a href="/contact" className="navbar-item">Contact</a>
        </div>
        <div className="navbar-end" style={{alignItems: 'center'}}>
          <a href={`tel:${phoneNumber}`} className="navbar-item navbar-phone-btn">
            <FontAwesomeIcon icon={faPhone} style={{marginRight: '0.5em'}} />
            {phoneNumber}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
