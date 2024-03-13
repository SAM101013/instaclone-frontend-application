import React, { useState } from "react";
import Login from "../login/login";
import Signup from "../signUp/signUp";

const LogOrSign = ({ handleLogin, handleSignup }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle login
  const handleLoginClick = () => {
    setIsLoggingIn(true);
    setError(null); // Clear any previous errors
  };

  // Function to handle signup
  const handleSignupClick = () => {
    setIsLoggingIn(false);
    setError(null); // Clear any previous errors
  };

  // Function to handle login error
  const handleLoginError = (errorMessage) => {
    setError(errorMessage);
    console.error("Error logging in:", errorMessage);
  };

  // Function to handle signup error
  const handleSignupError = (errorMessage) => {
    setError(errorMessage);
    console.error("Error signing up:", errorMessage);
  };

  return (
    <div className="logOrSign-wrapper">
      <div className="logOrSign-container">
        <div className="logOrSign-box">
          {isLoggingIn ? (
            <Login onLogin={handleLogin} onError={handleLoginError} />
          ) : (
            <Signup onSignup={handleSignup} onError={handleSignupError} />
          )}
        </div>
        <div className="logOrSign-box">
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={handleSignupClick}>Signup</button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LogOrSign;
