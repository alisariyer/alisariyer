import React from "react";

export default function Dots(props) {

  const dotContainerStyle = {
    transform: `rotate(${props.rotate}deg)`
  }

  const dots = Array.from("123456789").map((value, index) => (
    <div key={index} className={`dot ${props.className ? props.className : ''}`}></div>
  ));

  return <div className={`dot-container ${props.isTriangle ? "dots-triangle" : ""} ${props.isMenuOpen ? "dot-cross" : ""}`} style={dotContainerStyle} onClick={props.handleMenu && props.handleMenu}>{dots}</div>;
}
