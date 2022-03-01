import React from "react";

export default function Dots() {
  const dots = Array.from("123456789").map((value, index) => (
    <div key={index} className="dot"></div>
  ));
  return <div className="dot-container">{dots}</div>;
}
