import React from "react";
import Dots from "./Dots";

export default function Header({handleMenu, isMenuOpen, className}) {
  return (
    <header className="main-header">
      <div className="container">
        <h1><a href="#top" className="brand-link">ALI SARIYER</a></h1>
        <Dots className={`${className ? className : ''}`} rotate={0} handleMenu={handleMenu} isMenuOpen={isMenuOpen}/>
      </div>
    </header>
  );
}
