import { useState } from "react";
import LogoImage from "/src/components/assets/Images/logo.png";

//Named export
const loggedInUser = () => {
  //API call to check authentication.
  return false;
};

export const Title = () => {
  return (
    <div className="logo">
      <a href="/" style={{ textDecoration: "none" }}>
        <img key="LogoImage" src={LogoImage} alt="Hungry Hub Logo" />

      </a>
    </div>
  );
};

// Header ➤
const Header = () => {

  const [isLoggedIn, setIsLoggedIn]= useState(false);

  return (
    // for multiple lines '()' is mandatory
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Cart</li>
        </ul>
      </div>
     {
      (isLoggedIn? <button onClick={()=> setIsLoggedIn(false)}>Login</button>:<button on onClick={()=>setIsLoggedIn(true)}>Logout</button>)
     }
     
      
    </div>
  );
};
//Default export
export default Header;
