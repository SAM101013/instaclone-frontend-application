import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LogOrSign from "./logOrSign/logOrSign";
import Header from "./header";
import HomePage from "./Pages/HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle  signup
  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="container">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          {!isLoggedIn && (
            <Route
              path="/"
              element={
                <LogOrSign
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                />
              }
            />
          )}

          {isLoggedIn && <Route path="/home" element={<HomePage />} />}

          {isLoggedIn && <Route path="/" element={<Navigate to="/home" />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
