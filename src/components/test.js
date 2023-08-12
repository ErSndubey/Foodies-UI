import React, { useState, useEffect } from 'react';
import CI_1 from "../Images/CI_1.webp";
import CI_2 from "../Images/CI_2.webp";
import CI_3 from "../Images/CI_3.webp";

const LocationPrompt = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [CI_1, CI_2, CI_3];

  const handleLocationAccess = () => {
    navigator.geolocation.getCurrentPosition(
      () => {
        setContentVisible(true);
      },
      () => {
        // Handle case where user denies location access
      }
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow-3 relative overflow-hidden">
        <div
          className="h-full w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="h-full w-full inline-block"
            />
          ))}
        </div>
      </div>
      <div className="flex-grow-1 bg-gradient-to-b from-blue-300 to-purple-400 p-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300 ease-in-out"
          onClick={handleLocationAccess}
        >
          Allow Location Access
        </button>
      </div>
    </div>
  );
};

export default LocationPrompt;
