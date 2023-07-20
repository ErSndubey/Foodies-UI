import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import PlayStoreImage from "./assets/Images/Play-Store.webp";
import AppStoreImage from "./assets/Images/App-Store.webp";

const Footer = () => {
  // Function to handle app store redirection
  const handleAppStoreRedirect = (store) => {
    if (store === "google") {
      window.open("https://play.google.com/store/apps", "_blank");
    } else if (store === "apple") {
      window.open("https://apps.apple.com/app-store", "_blank");
    }
  };

  return (
    <footer className="footer">
      {/* Footer Content */}
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Foodies</h3>

          <p>Who We Are</p>
          <p>Blog</p>
          <p>Work With US</p>
          <p>Report Fraud</p>
          <p>Life in Foodies</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>FOR RESTAURANTS</h3>
          <p>Partner With Us</p>
          <p>Apps For You</p>

        
            <h3>For Enterprise</h3>
            <p>Foodies For Enterprise</p>
          
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* Facebook Icon */}
            <button
              className="social-icon"
              onClick={() => handleAppStoreRedirect("facebook")}
            >
              <FaFacebookF />
            </button>

            {/* Twitter Icon */}
            <button
              className="social-icon"
              onClick={() => handleAppStoreRedirect("twitter")}
            >
              <FaTwitter />
            </button>

            {/* Instagram Icon */}
            <button
              className="social-icon"
              onClick={() => handleAppStoreRedirect("instagram")}
            >
              <FaInstagram />
            </button>

            {/* LinkedIn Icon */}
            <button
              className="social-icon"
              onClick={() => handleAppStoreRedirect("linkedin")}
            >
              <FaLinkedinIn />
            </button>
          </div>
          {/* App Download Section */}
          <div className="app-download">
            <h3>Download Our App</h3>
            <div className="app-stores">
              {/* Google Play Store Icon */}
              <button
                className="app-store-icon"
                onClick={() => handleAppStoreRedirect("google")}
              >
                <img src={PlayStoreImage} alt="Google Play Store" />
              </button>

              {/* Apple App Store Icon */}
              <button
                className="app-store-icon"
                onClick={() => handleAppStoreRedirect("apple")}
              >
                <img src={AppStoreImage} alt="Apple App Store" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Foodies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
