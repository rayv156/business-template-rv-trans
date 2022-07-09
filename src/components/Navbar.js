import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import companyLogo from '../../src/images/rv_trans_logo.png'
const { useState } = React;

function Navbar({businessInfo, title, description}) {
  const {phoneNumber} = businessInfo;
  const [isActive, setisActive] = useState(false);
  return <div>
    <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src={companyLogo} alt={`${businessInfo.name} Logo`}/>
    </a>

    <button onClick={()=> {setisActive(!isActive)}} className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>

  <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
    <div className="navbar-start" style={{textAlign: 'center'}}>
      <a href="/" className="navbar-item">
        Home
      </a>

      <a href="/about" className="navbar-item">
        About
      </a>

      <a href="/services" className="navbar-item">
        Services
      </a>

      <a href="/contact" className="navbar-item">
        Contact Us
      </a>

      <a href={`tel:${phoneNumber}`} className="navbar-item">
      <FontAwesomeIcon icon={faPhone} style={{marginRight: '0.5em'}}/> Call Us Today {phoneNumber}
      </a>

    </div>

  </div>
</nav>
  </div>;
}

export default Navbar