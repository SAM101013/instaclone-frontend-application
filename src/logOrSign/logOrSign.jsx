import React, { useState } from "react";
import { signup, login } from "../utils/api.js";

const LogOrSign = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Default to login mode

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call the login API function
      const data = await login(username, password);
      // Redirect to profile page or perform other actions based on the response
      console.log("Login success:", data);
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Call the signup API function
      const data = await signup(username, email, password);
      // Redirect to profile page or perform other actions based on the response
      console.log("Signup success:", data);
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle signup error
    }
  };

  return (
    <div>
      {isLogin ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      )}
      {/* Toggle between login and sign up forms */}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Switch to Sign Up" : "Switch to Login"}
      </button>
    </div>
  );
};

export default LogOrSign;
