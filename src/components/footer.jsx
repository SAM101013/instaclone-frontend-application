import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/instaLogo.png";
import exploreIcon from "../assets/6.png";
import notificationsIcon from "../assets/2.png";
import messagesIcon from "../assets/5.png";
import profileIcon from "../assets/4.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/home" className="footer-icon">
          <img src={homeIcon} alt="Home" />
        </Link>
        <Link to="/explore" className="footer-icon">
          <img src={exploreIcon} alt="Explore" />
        </Link>
        <Link to="/notifications" className="footer-icon">
          <img src={notificationsIcon} alt="Notifications" />
        </Link>
        <Link to="/messages" className="footer-icon">
          <img src={messagesIcon} alt="Messages" />
        </Link>
        <Link to="/profile" className="footer-icon">
          <img src={profileIcon} alt="Profile" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
