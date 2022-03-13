import React from "react";
import Dots from "./Dots";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-bg-dots">
          <Dots className="bg-vl-gray" rotate={45} />
        </div>
        <div className="photo-container">
          <div className="photo-frame">
          <img src="./images/me.png" alt="profile" />
          </div>
        </div>
        <h2 className="hero-title">Hi, I'm Ali</h2>
        <div className="hero-content">
          <p className="fw-extra-light">
            A <span className="clr-blue fw-regular">Front-end Web Developer</span>,
            passionate about making apps with HTML5, CSS3, Bootstrap, JavaScript and <span className="clr-blue fw-regular">React.js</span>, 
            collaborative to work on crazy projects. Some of my projects are below...
          </p>
        </div>
        <a className="btn bg-linear fw-regular btn-projects" href="#projects" >See my projects</a>
      </div>
    </section>
  );
}
