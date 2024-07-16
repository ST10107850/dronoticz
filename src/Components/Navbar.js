import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Style/Stylesheet.css";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        D<span className="backdrop">Z</span>
      </h3>
      <nav ref={navRef}>
        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#article">ARTICLE</a>
        </div>

        <a href="#subscribe" className="subscribe-link">
          Subscribe
        </a>
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
