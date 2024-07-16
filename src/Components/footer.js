import React from "react";
import {
  faFacebook,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Style/Stylesheet.css";

function Footer() {
  return (
    <div className="App">
      <div className="footer">
        <div className="left">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPinterest} size="2x" className="icon" />
          </a>
        </div>
        <div className="right">
          <a href="#about">ABOUT US</a>
          <a href="#article">ARTICLE</a>
          <a href="#subscribe" className="subscribes">
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
