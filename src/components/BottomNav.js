import React from "react";
import { Link } from "react-router-dom";
import useOnline from "../Hooks/useOnline";

import HomeIcon from "../Images/home-icon.svg";
import OffersIcon from "../Images/offers-icon.svg";
import CartIcon from "../Images/cart-icon.svg";
import SearchIcon from "../Images/search-icon.svg";

const BottomNavigation = () => {
  const online = useOnline();

  return !online ? (
    <div className="fixed flex bottom-0 left-0 w-full bg-gray-800 border-t border-gray-300 p-2 justify-center  mx-auto shadow-md">
      <h3 className="text-white text-xs font-normal gap-1">You are Offline</h3>
    </div>
  ) : (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 p-2 grid grid-cols-4 justify-items-center shadow-md">
      <Link to="/" className="text-center text-gray-500">
        <img src={HomeIcon} alt="Home" className="w-6 h-6 fill-current " />
        <span className="text-sm"></span>
      </Link>
      <Link to="/search" className="text-center">
        <img src={SearchIcon} alt="Offers" className="w-6 h-6" />
        <span className="text-sm"></span>
      </Link>
      <Link to="/offers" className="text-center">
        <img src={OffersIcon} alt="Offers" className="w-6 h-6" />
        <span className="text-sm"></span>
      </Link>
      <Link to="/cart" className="text-center">
        <img src={CartIcon} alt="cart" className="w-6 h-6 " />
        <span className="text-sm"></span>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
