import React, { useState, useEffect } from "react";
import "../App.scss";

const Profile = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/?page=1&client_id=YOUR_UNSPLASH_ACCESS_KEY"
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>My Instagram Profile</h1>
      </div>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.urls.regular} alt={photo.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
