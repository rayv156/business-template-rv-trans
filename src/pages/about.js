import React from 'react';
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../components/Navbar';
import { graphql } from "gatsby";
import { faEnvelope, faPhone, faPaperPlane, faHouse } from '@fortawesome/free-solid-svg-icons'
import companyLogo from '../images/rv_trans_logo.png'

const About = ({data}) => {
    const { businessInfo } = data.site.siteMetadata;
  return <div>
      <Navbar businessInfo={businessInfo}/>
      <section className="section is-medium">
        <h1 className="title">About Us</h1>

        <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={companyLogo} alt="RV Trans LLC Logo" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">RV Trans LLC</p>
      </div>
    </div>

    <div className="content">
      <p>
        RV TRANS LLC is a family-owned and operated logistics company built on experience, integrity, and commitment.
        With years of hands-on experience in the logistics industry, we understand that reliability and communication
        are just as important as timely delivery.
      </p>
      <p>
        As a family business, we take pride in treating every customer like part of our own. Our focus is on providing
        top-notch customer service, clear communication, and dedicated support from start to finish. Every shipment
        matters to us, and we approach each job with care, professionalism, and attention to detail.
      </p>

      <div className="notification is-warning is-light" style={{marginTop: '1.5rem'}}>
        <strong>RV TRANS LLC is the only broker on the DAT board with a perfect 100 credit score.</strong>
      </div>

      <h2 className="title is-5" style={{marginTop: '1.5rem'}}>Our Values</h2>
      <ul>
        <li><strong>Integrity</strong> – We operate honestly and transparently in every interaction.</li>
        <li><strong>Reliability</strong> – We do what we say we'll do, on time and every time.</li>
        <li><strong>Customer Commitment</strong> – Your success is our priority from pickup to delivery.</li>
        <li><strong>Safety First</strong> – We prioritize the safety of our drivers, freight, and partners.</li>
        <li><strong>Family-Oriented Service</strong> – As a family-owned company, we treat customers and partners with respect and personal care.</li>
      </ul>

      <p style={{marginTop: '1rem'}}>
        At RV TRANS LLC, we don't just move freight—we build long-term relationships based on trust, accountability,
        and consistent performance.
      </p>
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
      <a href="mailto:roy@rvtrans.us">
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

export function Head({ data }) {
  const { title, description } = data.site.siteMetadata;
  return <Seo title={title} description={description} />;
}

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
