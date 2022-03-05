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
            I'm a <span className="blue regular">front-end web developer</span>,
            making applications with HTML5, CSS3, Bootstrap, JavaScript and React.js.
            Collaborative to work on crazy projects. Some of my projects are below...
          </p>
        </div>
      </div>
    </section>
  );
}
