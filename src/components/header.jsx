import React from "react";
import { Link } from "react-router-dom";
import instaLogo from "../assets/instaLogo.png";
import "../App.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/home">
            <img src={instaLogo} alt="Instagram" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/explore">Explore</Link>
            </li>
            <li className="nav-item">
              <Link to="/notifications">Notifications</Link>
            </li>
            <li className="nav-item">
              <Link to="/messages">Messages</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
