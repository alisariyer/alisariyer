import React from "react";
import Dots from "./Dots";

export default function Header({handleMenu}) {
  return (
    <header className="main-header">
      <div className="container">
        <h1>ALI SARIYER</h1>
        <Dots backgroundColor="#29282f" rotate={0} handleMenu={handleMenu}/>
      </div>
    </header>
  );
}
