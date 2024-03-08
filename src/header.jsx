import React from "react";
import instaLogo from "./assets/instaLogo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={instaLogo} alt="Instagram" />
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">Explore</a>
            </li>
            <li className="nav-item">
              <a href="#">Notifications</a>
            </li>
            <li className="nav-item">
              <a href="#">Messages</a>
            </li>
            <li className="nav-item">
              <a href="#">Profile</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
