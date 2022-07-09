import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';
import 'bulma/css/bulma.min.css';
import '../styles/global.css';

const Services = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;
  return <div>
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      This is my services page
      <Footer />
      </div>;
};

export const query = graphql`
  query ServicesPageQuery {
    site {
      siteMetadata {
        title
        description
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
