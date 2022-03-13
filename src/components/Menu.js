import React from "react";

export default function Menu(props) {
  console.log(props.isMenuOpen);
  return (
    <div className={`menu-container ${props.isMenuOpen ? 'show-menu': ''}`}>
      <ul className="social-media-list">
        <li><a href="https://github.com/alisariyer" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a></li>
        <li><a href="https://linkedin.com/in/alisariyer" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></li>
        <li><a href="https://twitter.com/sariyer_ali" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a></li>
        <li><a href="mailto:mail@alisariyer.com" target="_blank" rel="noreferrer"><i className="bi bi-envelope-fill"></i></a></li>
      </ul>
    </div>
  );
}
