import React, { useState, useEffect } from "react";
import LogoImage from "../Images/logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "../Images/search-icon.svg";
import OffersIcon from "../Images/offers-icon.svg";
import DiningIcon from "../Images/dining-icon.svg";
import ProfileIcon from "../Images/profile-icon.svg";
import CartIcon from "../Images/cart-icon.svg";
import SearchLocation from "./SearchLocation";
import SearchAnything from "./SearchAnything";

const Header = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(
        (prevVisible) =>
          prevScrollPos > currentScrollPos || currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`bg-white sticky top-0 z-50 drop-shadow-lg grid grid-cols-3 gap-4 items-center py-2 lg:py-4 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Logo */}
      <Link to={"/"} className="col-span-1 ml-2 flex items-center">
        <img src={LogoImage} alt="Logo" className="h-10 w-auto mr-2" />
        <span className="text-red-600 font-bold text-2xl xl:text-4xl hidden sm:block">
          Foodies
        </span>
        <span className="text-gray-600 font-semibold text-sm xl:text-base ml-2">
          {userLocation}
        </span>
      </Link>

      {/* <SearchLocation/> */}
    
     
      {/* Navigation Links */}
      <nav className="col-span-2 flex justify-end items-center gap-4 font-semibold text-gray-700 mr-1">
        <Link to="/search">
          <img
            src={SearchIcon}
            alt="Cart"
            className="w-6 h-6 mr-2 hidden lg:block"
          />
        </Link>

        <Link to="/Offers">
          <img
            src={OffersIcon}
            alt="Cart"
            className="w-6 h-6 mr-2 hidden lg:block"
          />
        </Link>
        <Link to="/Dining">
          <img
            src={DiningIcon}
            alt="Cart"
            className="w-6 h-6 mr-2 hidden lg:block"
          />
        </Link>
        <Link to="/CartPage">
          <img
            src={CartIcon}
            alt="Cart"
            className="w-6 h-6 mr-2 hidden lg:block"
          />
        </Link>
        <Link to="/Profile">
          <img
            src={ProfileIcon}
            alt="Cart"
            className="w-6 h-6 mr-3 ml-7  border rounded-full border-gray-600"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
