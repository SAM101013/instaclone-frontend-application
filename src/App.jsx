import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./Pages/About.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import Header from "./components/header.jsx"; // Import your Header component
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header /> {/* Include your Header component */}
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add routes for other pages if necessary */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
