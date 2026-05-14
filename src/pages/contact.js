import React, { useState } from 'react';
import '../styles/global.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';
import ReCAPTCHA from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Contact = ({data}) => {
  const { businessInfo } = data.site.siteMetadata;
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);

  return (
    <>
      <Navbar businessInfo={businessInfo} title={title} description={description} />

      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you — reach out and we'll respond promptly.</p>
      </div>

      <section className="site-section">
        <div className="contact-grid">

          {/* Info Panel */}
          <div className="contact-info-panel">
            <h2>Get In Touch</h2>
            <div className="contact-info-row">
              <FontAwesomeIcon icon={faPhone} />
              <a href={`tel:${businessInfo.phoneNumber}`}>{businessInfo.phoneNumber}</a>
            </div>
            <div className="contact-info-row">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:roy@rvtrans.us">roy@rvtrans.us</a>
            </div>
            <div className="contact-info-row">
              <FontAwesomeIcon icon={faLocationDot} />
              1816 Orange Blossom Loop<br />Laredo, TX 78045
            </div>
            <div className="contact-info-row">
              <FontAwesomeIcon icon={faClock} />
              Dispatch available 24/7
            </div>
          </div>

          {/* Form Panel */}
          <div className="contact-form-panel">
            <h2>Send Us a Message</h2>
            <form action="https://getform.io/f/b4b7d02d-ae85-4874-a216-0a5397f8b409" method="POST">

              <div className="form-field">
                <label className="form-label" htmlFor="name-input">Name</label>
                <input className="form-input" type="text" id="name-input" name="name" placeholder="Your name" />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="email-input">Email</label>
                <input className="form-input" type="email" id="email-input" name="email" placeholder="your@email.com" />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="phone-input">Phone Number</label>
                <input className="form-input" type="tel" id="phone-input" name="phone" placeholder="(555) 000-0000" />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="message-input">Message</label>
                <textarea className="form-input form-textarea" id="message-input" name="message" placeholder="How can we help you?" />
              </div>

              <ReCAPTCHA
                style={{marginBottom: '1rem'}}
                sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                onChange={() => { setDisabled(false); setError(false); }}
              />

              {error && (
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e53e3e', marginBottom: '1rem', fontSize: '0.9rem'}}>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                  <span>Please complete the reCAPTCHA before submitting.</span>
                </div>
              )}

              <button
                type={disabled ? 'button' : 'submit'}
                className="form-submit"
                onClick={() => disabled ? setError(true) : null}
                disabled={false}
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export function Head({data}) {
  const { title, description } = data.site.siteMetadata;
  return (
    <>
      <title>Contact — {title}</title>
      <meta name="description" content={description} />
    </>
  );
}

export const query = graphql`
  query ContactPageQuery {
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

export default Contact;
