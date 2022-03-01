import React from "react";
import Dots from "./Dots";

export default function Hero() {
  return (
    <section className="hero">
        <h2 className="hero-title">WELCOME TO MY GITHUB PAGE</h2>
        <div className="hero-content">
          <Dots backgroundColor="#356EFF" />
          <p>I'm a front-end web developer, interested in CSS, JavaScript, and React.js</p>
        </div>
    </section>
  );
}
