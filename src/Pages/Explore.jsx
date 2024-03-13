import React, { useState, useEffect } from "react";
import "../App.scss";

const ExplorePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
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

    fetchImages();
  }, []);

  return (
    <div className="explore-page">
      <h1>Explore</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.urls.regular} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
