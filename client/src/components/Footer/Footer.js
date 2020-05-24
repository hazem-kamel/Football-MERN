import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <img src={require("../../images/logo.png")} alt="logo"></img>
      <div className="social-media">
        <a href="www.facebook.com">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="www.twitter.com">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="www.instagram.com">
          <i className="fab fa-instagram-square"></i>
        </a>
        <a href="www.youtube.com">
          <i className="fab fa-youtube-square"></i>
        </a>
      </div>
      <div className="footer-links">
        <a href="/"> Contact Us</a>
        <a href="/"> Terms of Services</a>
        <a href="/"> Privacy Policy</a>
        <a href="/">App</a>
        <a href="/"> Live</a>
      </div>
      <p>
        Copyright © 2020 Goal.com All rights reserved. The information contained
        in Goal.com may not be published, broadcast, rewritten, or redistributed
        without the prior written authority of Goal.com
      </p>
    </div>
  );
};

export default Footer;
