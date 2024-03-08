import React from "react";
import Login from "../login/login";
import Signup from "../signUp/signUp";

const LogOrSign = ({ handleLogin, handleSignup }) => {
  // Function to handle login
  const handleLoginClick = () => {
    handleLogin();
  };

  // Function to handle signup
  const handleSignupClick = () => {
    handleSignup();
  };

  return (
    <div className="logOrSign-wrapper">
      <div className="logOrSign-container">
        <div className="logOrSign-box">
          <Login onLogin={handleLoginClick} />
        </div>
        <div className="logOrSign-box">
          <Signup onSignup={handleSignupClick} />
        </div>
      </div>
    </div>
  );
};

export default LogOrSign;
