import React from "react";
import droneImage from "../asset/Images/drone.png";
import drone2Image from "../asset/drone2.png";
import drone3Image from "../asset/Images/drone3.png";
import drone4Image from "../asset/Images/drone4.png";

import "../Style/Stylesheet.css";

function Article() {
  return (
    <div className="articles">
      <p>LATEST ARTICLES</p>
      <hr />
      <div className="article-list">
        <div className="article-box">
          <img src={droneImage} alt="done 1" />
          <div className="second-box">
            <hr />
            <p>
              How to automate <br /> surveillance drones
            </p>
          </div>
        </div>
        <div className="article-box">
          <img src={drone2Image} alt="done 2" />
          <div className="second-box">
            <hr />
            <p>
              Robotics and Artificial
              <br /> Intelligence
            </p>
          </div>
        </div>
        <div className="article-box">
          <img src={drone3Image} alt="done 4" />
          <div className="second-box">
            <hr />
            <p>
              Improving Lives through
              <br /> Robotic Prosthetics
            </p>
          </div>
        </div>
        <div className="article-box">
          <img src={drone4Image} alt="done 4" />
          <div className="second-box">
            <hr />
            <p>
              Power of Robotics in
              <br /> Agriculture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
