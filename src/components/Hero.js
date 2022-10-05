import React from 'react';
import companyLogo from '../../src/images/pink_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRibbon } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return <div>
      <section className="hero is-medium" >
            <div className="hero-body">
                <img className="company-logo" src={companyLogo} alt="RV Trans Logo"/>
                <FontAwesomeIcon icon={faRibbon} style={{fontSize: "120px" ,color: 'rgb(240, 0, 186)', position: 'absolute', zIndex: '2', margin: '100px 0 0 140px'}} size="lg"/>
            </div>
      </section>
  </div>;
};

export default Hero;
