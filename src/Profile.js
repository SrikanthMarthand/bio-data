import React, { useState } from 'react';
import './profile.css'; // Your CSS file
import profile from './profile.png'

const Profile = () => {
  const [showFullImage, setShowFullImage] = useState(false);

  const toggleImage = () => {
    setShowFullImage(!showFullImage);
  };

  return (
    <section className="profile-section">
      <h1>Hemanth Rudra</h1>
      <p>Age: 26</p>
      <p>Compute AI Engineer at Qualcomm. AI Model performance and Tuning.</p>
      <p>Parents: Mr. Rudra Krishna & Mrs. Lakshmi Rudra</p>

      <img
        src={profile}
        alt="Full Profile"
        className={`profile-pic ${showFullImage ? 'full' : 'small'}`}
        onClick={toggleImage}
      />

      {showFullImage && (
        <div className="overlay" onClick={toggleImage}>
          <img
            src={profile}
            alt="Full Profile"
            className="full-image"
          />
        </div>
      )}
    </section>
  );
};

export default Profile;
