import React, { useState, useEffect } from "react";
import LogoImage from "../Images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Check if the geolocation API is available in the browser
    if ("geolocation" in navigator) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          // Fetch city and country based on latitude and longitude
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            if (response.ok) {
              const data = await response.json();
              setUserLocation(`${data.address.city}, ${data.address.country}`);
            } else {
              throw new Error("Failed to fetch location data.");
            }
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 drop-shadow-lg grid grid-cols-3 gap-4 items-center py-2 lg:py-4">
      {/* Logo */}
      <Link to={"/"} className="col-span-1 ml-2 flex items-center">
        <img src={LogoImage} alt="Logo" className="h-10 w-auto mr-2" />
        <span className="text-red-600 font-bold text-2xl xl:text-4xl hidden sm:block">
          Foodies
        </span>
        <span className="text-gray-600 font-bold text-sm xl:text-4xl">
          {userLocation && ` ${userLocation}`}
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="col-span-2 flex justify-end items-center gap-4 font-semibold text-gray-700 mr-1">
        <Link to="/Offers">
          <span>🏷️Offers</span>
        </Link>

        <Link to="/CartPage">
          <span> 🛒Cart</span>
        </Link>

        {/* Avatar */}
        <img
          className="w-10 h-10 p-1 rounded-full"
          src="https://static.langimg.com/photo/imgsize-52268,msid-86087064/navbharat-times.jpg"
          alt="user avatar"
        />
      </nav>
    </header>
  );
};

export default Header;
