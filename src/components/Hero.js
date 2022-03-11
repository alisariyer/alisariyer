import React from "react";
import Dots from "./Dots";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-bg-dots">
          <Dots backgroundColor="#ffffff36" rotate={45} />
        </div>
        <h2 className="hero-title">Hi, I'm Ali</h2>
        <div className="hero-content">
          <p className="fw-extra-light">
            A <span className="blue fw-regular">Front-end Web Developer</span>,
            passionate about making apps with HTML5, CSS3, Bootstrap, JavaScript and <span className="blue fw-regular">React.js</span>, 
            collaborative to work on crazy projects. Some of my projects are below...
          </p>
        </div>
      </div>
    </section>
  );
}
