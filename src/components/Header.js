import { useState } from "react";
import LogoImage from "/src/components/assets/Images/logo.png";

// Named export: Check if the user is logged in (placeholder implementation, actual API call should be added)
const loggedInUser = () => {
  // Placeholder API call to check authentication. Replace this with the actual API call.
  return false;
};

// Component: Title component to display the logo
export const Title = () => {
  return (
    <div className="logo">
      <a href="/" style={{ textDecoration: "none" }}>
        <img key="LogoImage" src={LogoImage} alt="Hungry Hub Logo" />
      </a>
    </div>
  );
};

// Component: Header component to display the header section
const Header = () => {
  // State to track user's login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      {/* Render the Title component */}
      <Title />

      {/* Navigation items */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Cart</li>
        </ul>
      </div>

      {/* Render Login/Logout button based on user's login status */}
      {
        isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }
    </div>
  );
};

// Default export: Export the Header component as the default export of this module
export default Header;
