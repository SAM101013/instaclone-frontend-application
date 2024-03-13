import React from "react";
import { Link } from "react-router-dom";
import instaLogo from "../assets/instaLogo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/home">
            {" "}
            {/* Add Link to the home page */}
            <img src={instaLogo} alt="Instagram" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/home">Home</Link> {/* Link to home page */}
            </li>
            <li className="nav-item">
              <Link to="/explore">Explore</Link> {/* Link to explore page */}
            </li>
            <li className="nav-item">
              <Link to="/notifications">Notifications</Link>{" "}
              {/* Link to notifications page */}
            </li>
            <li className="nav-item">
              <Link to="/messages">Messages</Link> {/* Link to messages page */}
            </li>
            <li className="nav-item">
              <Link to="/profile">Profile</Link> {/* Link to profile page */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
