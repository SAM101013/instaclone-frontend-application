import React, { useState, useEffect } from "react";
import Home from "../components/Home.jsx";
import "../App.scss";

const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/?page=1&client_id=zBKrkBSfPhNr0zP2Lg10joYvq-X8sn26p8fS8-gmYkw"
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Render either fetched images or Home component with placeholders
  return (
    <div className="homepage">
      {images.length > 0 ? (
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.urls.regular} alt={image.alt_description} />
            </div>
          ))}
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default HomePage;
