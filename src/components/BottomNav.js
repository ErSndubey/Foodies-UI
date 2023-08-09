import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "../Images/home-icon.svg";
import OffersIcon from "../Images/offers-icon.svg";
import DiningIcon from "../Images/dining-icon.svg";
import CartIcon from "../Images/cart-icon.svg";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 p-2 grid grid-cols-4 justify-items-center shadow-md">
      <Link to="/" className="text-center text-gray-500">
        <img src={HomeIcon} alt="Home" className="w-6 h-6 fill-current " />
        <span className="text-sm"></span>
      </Link>
      <Link to="/offers" className="text-center">
        <img src={OffersIcon} alt="Offers" className="w-6 h-6" />
        <span className="text-sm"></span>
      </Link>
      <Link to="/dining" className="text-center">
        <img src={DiningIcon} alt="Dining" className="w-6 h-6" />
        <span className="text-sm"></span>
      </Link>
      <Link to="/profile" className="text-center">
        <img src={CartIcon} alt="Profile" className="w-6 h-6 " />
        <span className="text-sm"></span>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
