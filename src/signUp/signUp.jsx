import React, { useState } from "react";
import apiEndpoints from "../utils/api";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(apiEndpoints.signup, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      // Handle response here
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => changeHandler(e, setUsername)}
        />
        <input
          placeholder="email"
          value={email}
          onChange={(e) => changeHandler(e, setEmail)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => changeHandler(e, setPassword)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
