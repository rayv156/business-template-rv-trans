import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { graphql } from "gatsby";
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const Contact = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  
  return <>
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <section className="section is-medium">
        <h1 className="title">Contact Us</h1>
        <h2 className="subtitle">
            We would love to address any questions you might have so feel free to leave a note or call us at {businessInfo.phoneNumber}!
        </h2>
</section>
<div className="container">

<form action="https://getform.io/f/b4b7d02d-ae85-4874-a216-0a5397f8b409" method="POST">
<div className="field">
  <label htmlFor="name-input" className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Name" name="name" id="name-input"/>
  </div>
</div>

<div className="field">
  <label htmlFor="email-input" className="label">Email</label>
  <div className="control">
    <input className="input" type="email" placeholder="Email" name="email" id="email-input"/>
  </div>
</div>

<div className="field">
  <label htmlFor="phone-input" className="label">Phone Number</label>
  <div className="control">
    <input className="input" type="tel" placeholder="Phone #" name="phone" id="phone-input"/>
  </div>
</div>

<div className="field">
  <label htmlFor="message-input" className="label">Message</label>
  <div className="control">
    <textarea className="textarea" id="message-input" placeholder="Ex:  I'm looking for a quote please call me back at ..." name="message"></textarea>
  </div>
</div>

<ReCAPTCHA style={{marginBottom: '1rem'}} sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} onChange={() => {setDisabled(false); setError(false)}}/>
{ error ?
  <div className="icon-text">
    <span className="icon has-text-danger">
    <FontAwesomeIcon icon={faCircleExclamation} size="sm" />
    </span>
    <span>There was an error in your submission.  Please make sure to check the checkbox above. </span>
  </div>
: null
}
<div className="field is-grouped">
  <div className="control">
    {disabled 
    ? <button type="button" className="button is-link" onClick={() => disabled ? setError(true) : null}>Submit</button>
    : <button type="submit" className="button is-link" >Submit</button>
    }
  </div>
  <div className="control">
    <button className="button is-link is-light">Cancel</button>
  </div>
</div>
</form>

<iframe className="google-map" title="google map for RV Trans" src={businessInfo.googleAddress} width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>

{/* <table className="table">
  <thead>
    <tr>
      <th>Hours</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Monday</th>
      <td>08:00 AM - 6:00 PM
      </td>
    </tr>
    <tr>
      <th>Tuesday</th>
      <td>08:00 AM - 6:00 PM</td>
    </tr>
    <tr>
      <th>Wednesday</th>
      <td>08:00 AM - 6:00 PM</td>
    </tr>
    <tr>
      <th>Thursday</th>
      <td>08:00 AM - 6:00 PM</td>
    </tr>
    <tr>
      <th>Friday</th>
      <td>08:00 AM - 6:00 PM</td>
    </tr>
    <tr>
      <th>Saturday</th>
      <td>08:00 AM - 6:00 PM</td>
    </tr>
    <tr>
      <th>Sunday</th>
      <td>12:00 PM - 6:00 PM</td>
    </tr>
  </tbody>
</table> */}
</div>
<Footer />
</>;
};

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