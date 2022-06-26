import React from 'react';
import { graphql } from 'gatsby';
import companyLogo from '../../src/images/rv_trans_logo.png'

const Hero = ({businessInfo}) => {
  const { businessLogo, phoneNumber, name } = businessInfo;
  return <div>
      <section className="hero is-medium is-success" style={{backgroundColor: `#808080`}}>
            <div className="hero-body">
                <img className="company-logo" src={companyLogo} />
            </div>
      </section>
  </div>;
};

export const query = graphql`
  query HeroPageQuery {
    site {
      siteMetadata {
        businessInfo {
        phoneNumber
        businessLogo 
        }
      }  
    }
  }
`

export default Hero;
