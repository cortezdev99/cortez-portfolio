import React from 'react';

const NavTopBar = () => {
  return (
    <div className="nav-top-bar-wrapper">
      <div className="nav-top-bar-logo-links-wrapper">
        <div className="nav-top-bar-logo">
          PixelPulse
        </div>

        <div className="nav-top-bar-links-wrapper">
          <div className="nav-top-bar-link-wrapper">Home</div>
          <div className="nav-top-bar-link-wrapper">About Us</div>
          <div className="nav-top-bar-link-wrapper">Services</div>
          <div className="nav-top-bar-link-wrapper">Contact</div>
        </div>
      </div>

      <div className="hamburger-wrapper">
        <div className="bar arrow-top"></div>
        <div className="bar arrow-middle"></div>
        <div className="bar arrow-bottom"></div>
      </div>
    </div>
  )
}

export default NavTopBar;