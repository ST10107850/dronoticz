import React from "react";
import Home from "./Components/Home";
import Article from "./Components/Article";
import About from "./Components/About";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />

      <section id="article">
        <Article />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="subscribe">
        <Subscribe />
      </section>

      <Footer />
    </div>
  );
}

export default App;
