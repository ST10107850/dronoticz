import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Style/Stylesheet.css";

function Navbar({ closeOtherSections }) {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavBar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <h3>
        D<span className="backdrop">Z</span>
      </h3>
      <nav ref={navRef}>
        <div className="nav-links">
          <a href="#about" onClick={closeNavBar}>
            ABOUT
          </a>
          <a href="#article" onClick={closeNavBar}>
            ARTICLE
          </a>
        </div>
        <div className="subscribe-link">
          <a href="#subscribe" onClick={closeNavBar}>
            Subscribe
          </a>
        </div>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
