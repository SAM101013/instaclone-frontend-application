import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a href="#">Explore</a>
            </li>
            <li className="nav-item">
              <a href="#">Notifications</a>
            </li>
            <li className="nav-item">
              <Link to="/messages">Messages</Link>{" "}
              {/* Define the route for Messages */}
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
