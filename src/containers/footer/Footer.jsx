import React from 'react'
import spinachLogo from '../../assets/logo.png';
import './footer.css'


const Footer = () => {
  return (
    <div className="spinach__footer section__padding">
    <div className="spinach__footer-links">
      <div className="spinach__footer-links_logo">
        <img src={spinachLogo} alt="logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="spinach__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="spinach__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="spinach__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="spinach__footer-copyright">
      <p>@2023 Spinach. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer
