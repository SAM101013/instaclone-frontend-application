import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import LogOrSign from "./logOrSign/logOrSign.jsx";
import Header from "./components/header.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Profile from "./Pages/Profile.jsx";
import Explore from "./Pages/Explore.jsx";
import Messages from "./Pages/messages.jsx";
import Notifications from "./Pages/Notifications.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // handle signup
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

          {isLoggedIn && <Route path="/Home" element={<HomePage />} />}
          {isLoggedIn && <Route path="/Profile" element={<Profile />} />}
          {isLoggedIn && <Route path="/Explore" element={<Explore />} />}
          {isLoggedIn && <Route path="/Messages" element={<Messages />} />}
          {isLoggedIn && (
            <Route path="/Notifications" element={<Notifications />} />
          )}

          {isLoggedIn && <Route path="/" element={<Navigate to="/Home" />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
