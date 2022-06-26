import React from 'react';
import companyLogo from '../../src/images/rv_trans_logo.png'
const { useState } = React;

function Navbar({businessInfo}) {
  const {phoneNumber} = businessInfo;
  const [isActive, setisActive] = useState(false);
  return <div>
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src={companyLogo} />
    </a>

    <a onClick={()=> {setisActive(!isActive)}} role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
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
        Call Us Today {phoneNumber}
      </a>

    </div>

  </div>
</nav>
  </div>;
}

export default Navbar