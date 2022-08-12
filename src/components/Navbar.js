import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import companyLogo from '../../src/images/rv_trans_logo.png'
import appleTouch from '../../src/images/apple-touch-icon.png'
import favicon32 from '../../src/images/favicon-32x32.png'
import favicon16 from '../../src/images/favicon-16x16.png'

const { useState } = React;

function Navbar({businessInfo, title, description}) {
  const {phoneNumber} = businessInfo;
  const [isActive, setisActive] = useState(false);
  return <div>
    <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link href="../../src/styles/initial.css" rel="stylesheet" />
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

      {/* <a href="/services" className="navbar-item">
        Services
      </a> */}

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