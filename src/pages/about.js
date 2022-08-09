import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import { graphql } from "gatsby";

const About = ({data}) => {
    const { businessInfo, title, description } = data.site.siteMetadata;
  return <div>
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <section className="section is-medium">
        <h1 className="title">About Us</h1>
        <h2 className="subtitle">
        Name:  RV Trans
        1816 Orange Blossom Loop
        Laredo, TX 78045
        <br></br>
        Phone:  956-237-2658
        <br></br>
        Email:  roy@rvtrans.us
        <br></br>
        Established: 2018
        <br></br>
        MC#  125298
        <br></br>
        USDOT# 3179700
        <br></br>
        Website  www.rvtrans.us
        <br></br>
        Banking  Texas Community Bank – Oscar Pena
        </h2>
</section>
        <Footer />
      </div>;
};

export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
        description
        businessInfo {
          businessLogo
          phoneNumber
        }
      }
    }
  }
`

export default About;
