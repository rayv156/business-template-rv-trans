import React from 'react';
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faGlobe, faIdCard, faTruck, faBuilding, faStar } from '@fortawesome/free-solid-svg-icons';
import companyLogo from '../images/rv_trans_logo.png';

const About = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;

  return (
    <div>
      <Navbar businessInfo={businessInfo} title={title} description={description} />

      <div className="page-header">
        <h1>About RV Trans LLC</h1>
        <p>Family-owned logistics based in Laredo, TX</p>
      </div>

      <section className="site-section">

        {/* Achievement Banner */}
        <div className="achievement-banner">
          <div className="achievement-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="achievement-text">
            <strong>Perfect 100 Credit Score on DAT</strong>
            <span>RV TRANS LLC is the only broker on the DAT board with a perfect 100 credit score — a testament to our commitment to paying carriers on time, every time.</span>
          </div>
        </div>

        <div className="about-grid">
          {/* Left: Description + Values */}
          <div>
            <div className="info-card" style={{marginBottom: '1.5rem'}}>
              <h2 style={{fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '2px solid var(--gray-100)'}}>Who We Are</h2>
              <p style={{lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.97rem'}}>
                RV TRANS LLC is a family-owned and operated logistics company built on experience, integrity, and
                commitment. With years of hands-on experience in the logistics industry, we understand that
                reliability and communication are just as important as timely delivery.
              </p>
              <p style={{lineHeight: 1.75, fontSize: '0.97rem', marginBottom: 0}}>
                As a family business, we take pride in treating every customer like part of our own. Our focus is
                on providing top-notch customer service, clear communication, and dedicated support from start to
                finish. At RV TRANS LLC, we don't just move freight — we build long-term relationships based on
                trust, accountability, and consistent performance.
              </p>
            </div>

            <div className="info-card">
              <h2 style={{fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '2px solid var(--gray-100)'}}>Our Values</h2>
              <ul className="values-list">
                <li><strong>Integrity</strong> — We operate honestly and transparently in every interaction.</li>
                <li><strong>Reliability</strong> — We do what we say we'll do, on time and every time.</li>
                <li><strong>Customer Commitment</strong> — Your success is our priority from pickup to delivery.</li>
                <li><strong>Safety First</strong> — We prioritize the safety of our drivers, freight, and partners.</li>
                <li><strong>Family-Oriented Service</strong> — We treat customers and partners with personal care and respect.</li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="info-card">
            <div className="info-card-header">
              <img className="info-card-logo" src={companyLogo} alt="RV Trans LLC Logo" />
              <h2>RV Trans LLC</h2>
            </div>

            <div className="info-row">
              <span className="info-icon"><FontAwesomeIcon icon={faLocationDot} /></span>
              1816 Orange Blossom Loop, Laredo, TX 78045
            </div>
            <div className="info-row">
              <span className="info-icon"><FontAwesomeIcon icon={faPhone} /></span>
              <a href={`tel:${businessInfo.phoneNumber}`}>{businessInfo.phoneNumber}</a>
            </div>
            <div className="info-row">
              <span className="info-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
              <a href="mailto:roy@rvtrans.us">roy@rvtrans.us</a>
            </div>
            <div className="info-row">
              <span className="info-icon"><FontAwesomeIcon icon={faGlobe} /></span>
              <a href="/">www.rvtrans.us</a>
            </div>
            <div className="info-row">
              <span className="info-icon"><FontAwesomeIcon icon={faTruck} /></span>
              MC# 125298
            </div>
            <div className="info-row">
              <span className="info-icon"><FontAwesomeIcon icon={faIdCard} /></span>
              USDOT# 3179700
            </div>
            <div className="info-row">
              <span className="info-icon"><FontAwesomeIcon icon={faBuilding} /></span>
              Banking: Texas Community Bank – Oscar Pena
            </div>
            <div className="info-row">
              <span className="info-icon"><FontAwesomeIcon icon={faBuilding} /></span>
              Established: 2018
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export function Head({data}) {
  const { title, description } = data.site.siteMetadata;
  return (
    <>
      <title>About — {title}</title>
      <meta name="description" content={description} />
    </>
  );
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
