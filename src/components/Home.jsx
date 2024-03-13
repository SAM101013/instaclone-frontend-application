import React from "react";
import "./Home.scss";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

const Home = () => {
  const placeholderImages = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="home">
      <div className="image-grid">
        {placeholderImages.map((index) => (
          <div className="image-container" key={index}>
            <img src={image2} alt="Image 2" />
            <img src={image3} alt="Image 3" />
            <img src={image4} alt="Image 4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
