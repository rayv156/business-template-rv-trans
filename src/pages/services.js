import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';

const Services = ({data}) => {
  const { businessInfo } = data.site.siteMetadata;
  return <div>
      <Navbar businessInfo={businessInfo}/>
      This is my services page
      <Footer />
      </div>;
};

export const query = graphql`
  query ServicesPageQuery {
    site {
      siteMetadata {
        businessInfo {
          businessLogo
          phoneNumber
          googleAddress
        }
      }
    }
  }
`

export default Services;
