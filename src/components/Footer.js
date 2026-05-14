import React from 'react';
import { faRibbon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/global.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">

        <div className="footer-col">
          <h4>RV Trans LLC</h4>
          <p>Family-owned freight brokerage in Laredo, TX. Integrity, reliability, and personal service since 2018.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:roy@rvtrans.us">roy@rvtrans.us</a>
          <a href="tel:956-237-2658">956-237-2658</a>
          <a href="/contact">Send a Message</a>
        </div>

        <div className="footer-col">
          <h4>Credentials</h4>
          <p>MC# 125298</p>
          <p>USDOT# 3179700</p>
          <p>DAT Credit Score: 100</p>
        </div>

      </div>

      <div className="footer-bottom">
        <span role="img" aria-label="American Flag" style={{fontSize: '1.1rem'}}>🇺🇸</span>
        <FontAwesomeIcon icon={faRibbon} style={{color: 'hotpink', fontSize: '1rem'}} />
        <span>
          &copy; {new Date().getFullYear()} RV Trans LLC. Created by{' '}
          <a href="https://rayvelasquez.netlify.app/" style={{color: 'rgba(255,255,255,0.6)'}}>Ray Velasquez</a>.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
