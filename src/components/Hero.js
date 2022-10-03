import React from 'react';
import companyLogo from '../../src/images/rv_trans_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRibbon } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return <div>
      <section className="hero is-medium" >
            <div className="hero-body">
                <img className="company-logo" src={companyLogo} alt="RV Trans Logo"/>
                <FontAwesomeIcon icon={faRibbon} style={{fontSize: "200px" ,color: 'hotpink', position: 'absolute', zIndex: '-1'}} size="lg"/>
            </div>
      </section>
  </div>;
};

export default Hero;
