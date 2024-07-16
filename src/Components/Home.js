import React from "react";

function Home() {
  return (
    <div className="App">
      <div className="container">
        <nav className="nav">
          <div className="dz-h1">
            <h1>
              D<span className="backdrop">Z</span>
            </h1>
          </div>
          <div>
            <div className="nav-links">
              <a href="#about">ABOUT</a>
              <a href="#article">ARTICLE</a>
            </div>
            <a href="#subscribe" className="subscribe-link">
              Subscribe
            </a>
          </div>
        </nav>

        <div className="dr">
          <h2>DRONOTICZ</h2>
          <p>THE ERA OF DRONES</p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Home;
