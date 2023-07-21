import { useState } from "react";
import LogoImage from "/src/components/assets/Images/logo.png";
import { Link } from "react-router-dom";

// Named export: Check if the user is logged in (placeholder implementation, actual API call should be added)
const loggedInUser = () => {
  // Placeholder API call to check authentication. Replace this with the actual API call.
  return false;
};

// Component: Title component to display the logo
export const Title = () => {
  return (
    <div className="logo">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img key="LogoImage" src={LogoImage} alt="Hungry Hub Logo" />
      </Link>
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Support">Support</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </div>

      {/* Render Login/Logout button based on user's login status */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

// Default export: Export the Header component as the default export of this module
export default Header;
