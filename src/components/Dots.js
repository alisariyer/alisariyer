import React from "react";

export default function Dots(props) {
  const defaultColor = "#fff";

  const styles = {
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : defaultColor,
  };

  const dots = Array.from("123456789").map((value, index) => (
    <div key={index} className="dot" style={styles}></div>
  ));

  return <div className="dot-container" >{dots}</div>;
}
