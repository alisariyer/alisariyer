import React from "react";
import Dots from "./Dots";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-bg-dots">
          <Dots backgroundColor="#ffffff36" rotate={45} />
        </div>
        <h2 className="hero-title">WELCOME TO MY PORTFOLIO</h2>
        <div className="hero-content">
          <Dots backgroundColor="#356EFF" rotate={0} />
          <p className="extra-light">
            Hi, I'm Ali<br />A <span className="blue regular">Front-end Web Developer</span>,
            passionate about making apps with HTML5, CSS3, Bootstrap, JavaScript and <span className="blue regular">React.js</span>, 
            collaborative to work on crazy projects. Some of my projects are below...
          </p>
        </div>
      </div>
    </section>
  );
}
