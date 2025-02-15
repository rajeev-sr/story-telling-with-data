// ImageSection.jsx
import React, { useState } from 'react';
import './ImageSection.css';

const ImageSection = ({ title, description, longDescription, imageUrl, altText, imagePosition = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`image-section-container ${isVisible ? 'expanded' : ''}`}>
      <div className="section-block" onClick={() => setIsVisible(!isVisible)}>
        <h2 style={{paddingLeft:"35px", paddingRight:"35px"}}>{title}</h2>
        <p className="short-description" style={{paddingLeft:"35px", paddingRight:"35px"}}>{description}</p>
        <div className="toggle-indicator" style={{paddingLeft:"35px", paddingRight:"35px"}}>
          {isVisible ? '▼' : '►'}
        </div>
      </div>

      {isVisible && (
        <div className={`content-wrapper ${imagePosition}`}>
          <div className="image-container" style={{alignContent:"center"}}>
            <img
              src={imageUrl}
              alt={altText}
              className="section-image"
              style={{ display: "block", margin: "0 auto" }}
            />
          </div>
          <div className="text-content">
            <p className="long-description" style={{paddingLeft:"35px", paddingRight:"35px"}}>{longDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSection;