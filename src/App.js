import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
import Error from "./components/Error";
import Offers from "./components/Offers";
import CartPage from "./components/CartPage.js";
import RestaurantMenu from "./components/RestaurantMenu";
import BottomNav from "./components/BottomNav";
import Dining from "./components/Dining";
import Profile from "./components/Profile";
import SearchAnyThing from "./components/SearchAnything";
import useLocationStatus from "./Hooks/useLocationStatus";
import LocationPrompt from "./components/LocationPromt";

const AppLayout = () => {
  // Check if the current screen width falls within the "mobile or tablet" range
  const isMobileOrTablet = window.matchMedia("(max-width: 821px)").matches;
  
  // Get the current location using the useLocation hook from react-router-dom
  const location = useLocation();
  

  
  // Check if the current route is "/search"
  const isSearchRoute = location.pathname === "/search";

  // Get the status of the user's location using a custom hook (useLocationStatus)
const isLocationOn = useLocationStatus(); // Assume location is on initially


  // If the location is off, render the LocationPrompt component
  if (!isLocationOn) {
    return <LocationPrompt />;
  }

  // Render the main content if the location is on
  return (
    <>
      <Header />
      <Outlet /> {/* This is likely related to react-router */}
      
      {/* Conditionally render the Footer if not on the "/search" route */}
      {!isSearchRoute && <Footer />}
      
      {/* Conditionally render the BottomNav on mobile or tablet */}
      {isMobileOrTablet && <BottomNav />}
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <SearchAnyThing />,
      },
      {
        path: "/Offers",
        element: <Offers />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/Dining",
        element: <Dining />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
