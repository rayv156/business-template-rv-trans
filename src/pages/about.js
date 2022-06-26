import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { graphql } from "gatsby";

const About = ({data}) => {
    const { businessInfo } = data.site.siteMetadata;
  return <div>
      <Navbar businessInfo={businessInfo}/>
      <section className="section is-medium">
        <h1 className="title">About Us</h1>
        <h2 className="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
        </h2>
</section>
        <div className="card">
            <div className="card-content">
                <p className="title">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                </p>
                <p className="subtitle">
                    Jeff Atwood
                </p>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
            <p className="title">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                </p>
                <p className="subtitle">
                    Jeff Atwood
                </p>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
            <p className="title">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                </p>
                <p className="subtitle">
                    Jeff Atwood
                </p>
            </div>
        </div>
        <Footer />
      </div>;
};

export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        businessInfo {
          businessLogo
          phoneNumber
        }
      }
    }
  }
`

export default About;
