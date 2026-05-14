import { faRibbon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usFlag from '../images/US-United-States-Flag-icon.png';

const Footer = () => {
  return <div>
      <footer className="footer">
  <div className="columns">
      
    <div className="column">

      <h4 className="bd-footer-title 
                 has-text-weight-medium
                 has-text-left">
        RV Trans LLC
      </h4>

      <p className="bd-footer-link 
                has-text-left">
       Established in 2018
      </p>
  
    </div>

    <div className="column">
      <h4 className="bd-footer-title 
                 has-text-weight-medium 
                 has-text-justify">
        Explore
      </h4>

      <p className="bd-footer-link">
         <a href="/">Home</a>
          <br />
          <a href="/about">About</a>
          <br />
          <a href="/contact">Contact Us</a>
      </p>
  
    </div>

    <div className="column">
      <h4 className="bd-footer-title
                 has-text-weight-medium
                 has-text-justify">
        Contact us
      </h4>
  
      <p className="bd-footer-link">
          <a href="mailto:roy@rvtrans.us">Email</a>
          <br />
          <a href="tel:956-237-2658">Call Us</a>
          <br />
          <a href="/contact">Message Us</a>
      </p>
    </div>
    </div>
    <div className="content" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <img alt="American Flag" src={usFlag} style={{marginRight: '1rem', width: '40px', height: 'auto'}} />
    <FontAwesomeIcon icon={faRibbon} style={{fontSize: "30px", color: 'hotpink'}} size="lg"/>
    </div>
    <div className="content has-text-centered">
    <p>
      Created by <a href="https://rayvelasquez.netlify.app/">Ray Velasquez</a>. &#169; 2022.
    </p>
  </div>
</footer>
  </div>;
};

export default Footer;
