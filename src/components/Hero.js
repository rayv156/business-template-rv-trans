import React from 'react';
import companyLogo from '../../src/images/pink_logo.png'

const Hero = () => {
  return <div>
      <section className="hero is-medium" >
            <div className="hero-body">
                <img className="company-logo" src={companyLogo} alt="RV Trans Logo"/>
            </div>
      </section>
  </div>;
};

export default Hero;
