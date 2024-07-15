import React from "react";
import drone5Image from "../asset/Images/drone5.png";

function About_Us() {
  return (
    <div className="App">
      <div className="about-list">
        <div className="about">
          <img src={drone5Image} alt="done 2" height="200" width={250} />
          <div className="about-text">
            <p className="about-p">ABOUT US</p>
            <hr />
            <p>
              Welcome to our dronoticz, where innovation and technology converge
              to shape the future. We revolutionize industries and improve lives
              worldwide through our passion for pushing the boundaries of what
              robots can do. With expertise in AI, computer vision, mechanical
              engineering, and automation, we lead the way in the robotics
              revolution. Our brilliant team creates intelligent machines that
              seamlessly integrate into daily life, enhancing productivity,
              safety, and efficiency. Join us on this exciting journey as we
              unlock new frontiers, solve complex challenges, and shape a future
              where intelligent machines work hand-in-hand with humans. Discover
              the power of robotics and be part of the revolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_Us;