// Land.js
import React, { useEffect, useState } from 'react';
import './land.css'; // Import your CSS file for styling

const Land = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 80); // Change image every 100 milliseconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentImageIndex, totalImages]);

  const padImageIndex = (index) => {
    return index.toString().padStart(4, '0');
  };

  return (
    <div className="land-image-slider">
      <img
        className="land-image"
        src={`${process.env.PUBLIC_URL}/imagel/grassvid${padImageIndex(currentImageIndex + 1)}.png`}
        alt={`Grass Image ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default Land;
