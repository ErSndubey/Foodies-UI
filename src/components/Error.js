import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for the "Back to Home" button
import "/index.css"; // Make sure to create this CSS file
import errorImge from "/src/components/assets/Images/error.png";
import Header from "./Header";
import Footer from "./Footer";


const Error = () => {
  // Get the current location object from react-router-dom's useLocation hook
  const location = useLocation();

  // Extract the error data from the location state, if it exists
  const errorData = location.state?.error;

  return (
    <>
    <Header/>
    <div className="error-container">
      <div className="error-content">
        <img
          src={errorImge} // Replace with the path to your error image
          alt="Error"
          className="error-image"
        />
        <h1>{errorData ? errorData.code : "404"}</h1>
        <h2>{errorData ? errorData.message : "Page not found"}</h2>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Error;
