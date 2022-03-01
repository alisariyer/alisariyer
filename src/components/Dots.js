import React from "react";

export default function Dots(props) {
  const defaultColor = "#fff";

  const dotStyle = {
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : defaultColor   
  };

  const dotContainerStyle = {
    transform: `rotate(${props.rotate}deg)`
  }

  const dots = Array.from("123456789").map((value, index) => (
    <div key={index} className="dot" style={dotStyle}></div>
  ));

  return <div className="dot-container" style={dotContainerStyle}>{dots}</div>;
}
