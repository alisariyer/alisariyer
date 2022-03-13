import React from "react";

export default function Menu(props) {
  console.log(props.isMenuOpen);
  return (
    <div className={`menu-container ${props.isMenuOpen ? 'show-menu': ''}`}>
      <ul className="social-media-list">
        <li><i className="bi bi-github"></i></li>
        <li><i className="bi bi-linkedin"></i></li>
        <li><i className="bi bi-twitter"></i></li>
        <li><i className="bi bi-envelope-fill"></i></li>
      </ul>
    </div>
  );
}
