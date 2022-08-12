import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faPaperPlane, faHouse } from '@fortawesome/free-solid-svg-icons'
import companyLogo from '../../src/images/rv_trans_logo.png'

const About = ({data}) => {
    const { businessInfo, title, description } = data.site.siteMetadata;
  return <div>
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <section className="section is-medium">
        <h1 className="title">About Us</h1>
        <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={companyLogo} alt="RV Trans Logo" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">RV Trans</p>
      </div>
    </div>

    <div className="content">
      <FontAwesomeIcon icon={faPaperPlane} size="lg" style={{marginRight: '1rem', color: 'rgb(0,3,116)'}}/>
      1816 Orange Blossom Loop
        Laredo, TX 78045
        
    </div>
    <div className="content">
      <a href={`tel:${businessInfo.phoneNumber}`}><FontAwesomeIcon icon={faPhone} size="lg" style={{marginRight: '1rem', color: 'rgb(0,3,116)'}}/>
      {businessInfo.phoneNumber}
    </a>
    </div>
    <div className="content">
      <a href="mailto: roy@rvtrans.us">
      <FontAwesomeIcon icon={faEnvelope} size="lg" style={{marginRight: '1rem', color: 'rgb(0,3,116)'}}/>
      roy@rvtrans.us
      </a>
    </div>
    <div className="content">
      <a href="/">
    <FontAwesomeIcon icon={faHouse} size="lg" style={{marginRight: '1rem', color: 'rgb(0,3,116)'}}/>
    www.rvtrans.us
    </a>
    </div>
    <div className="content">
    MC#  125298
    </div>
    <div className="content">
    USDOT# 3179700
    </div>
    <div className="content">
    Banking  Texas Community Bank – Oscar Pena
    </div>
    <div className="content">
    Established: 2018
    </div>
  </div>
</div>
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
