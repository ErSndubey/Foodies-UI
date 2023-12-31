import React, { useState, useEffect } from "react";
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
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert("Location access denied. You can adjust this in your browser's settings.");
        }
      }
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); // Change image every 1 second

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="h-screen flex flex-col sm:justify-center sm:bg-[url('https://png.pngtree.com/background/20230524/original/pngtree-lot-of-food-sitting-on-a-table-picture-image_2706274.jpg')] sm:bg-cover bg-center  sm:items-center"  >
      <div className="h-3/5 relative overflow-hidden visible sm:hidden">
        <div
          className="  flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="h-full"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col mx-auto md:rounded-md md:shadow-lg sm:bg-gray-100 md:w-1/2">
        <h1 className="flex mx-auto font-bold text-xl text-gray-600 mt-5">
          Quick delivery to your doorstep
        </h1>
        <h1 className="flex  justify-center text-base text-gray-400 my-4 px-5">
        Please enable your computer's location settings and grant location access to find nearby restaurants.
        </h1>
        <button
          className="bg-blue-500 text-white px-4 mx-auto flex py-2 rounded hover:bg-red-600 transition-colors duration-300 ease-in-out"
          onClick={handleLocationAccess}
        >
          Allow Location Access
        </button>
        <h1 className="flex  justify-center text-sm text-gray-400 my-4">
          Have an account?{" "}
          <span className="text-sm text-red-500 font-semibold ml-1">
            {" "}
            Login
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LocationPrompt;
