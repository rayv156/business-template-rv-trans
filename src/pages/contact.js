import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { graphql } from "gatsby";
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import 'bulma/css/bulma.min.css';
import '../styles/global.css';

const Contact = ({data}) => {
  const { businessInfo } = data.site.siteMetadata;
  const [disabled, setDisabled] = useState(true);
  return <>
      <Navbar businessInfo={businessInfo}/>
      <section className="section is-medium">
        <h1 className="title">Contact Us</h1>
        <h2 className="subtitle">
            We would love to address any questions you might have so feel free to leave a note or call us at {businessInfo.phoneNumber}!
        </h2>
</section>
<div className="container">

<form action="https://getform.io/f/b4b7d02d-ae85-4874-a216-0a5397f8b409" method="POST">
<div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Name" name="name"/>
  </div>
</div>

<div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" placeholder="Email" name="email"/>
  </div>
</div>

{/* <div className="field">
  <label className="label">Subject</label>
  <div className="control">
    <div className="select">
      <select name="dropdown">
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div> */}

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Ex:  I'm looking for a quote please call me back at ..." name="message"></textarea>
  </div>
</div>

<ReCAPTCHA style={{marginBottom: '1rem'}} sitekey={process.env.RECAPTCHA_SITE_KEY} onChange={() => {setDisabled(false)}}/>

<div className="field is-grouped">
  <div className="control">
    <button type="submit" className="button is-link" disabled={disabled}>Submit</button>
  </div>
  <div className="control">
    <button className="button is-link is-light">Cancel</button>
  </div>
</div>
</form>

<iframe className="google-map" src={businessInfo.googleAddress} width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>

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