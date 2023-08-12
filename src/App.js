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
  const isMobileOrTablet = window.matchMedia("(max-width: 821px)").matches;
  const location = useLocation();
  const [contentVisible, setContentVisible] = useState(true);
  // Check if the current route is SearchAnyThing
  const isSearchRoute = location.pathname === "/search";

  const locationOn = useLocationStatus();

  useEffect(() => {
    if (!locationOn) {
      // Show the dialog after a short delay if location is off
      const timeout = setTimeout(() => {
        setContentVisible(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [locationOn]);

  if (!locationOn) {
    return <LocationPrompt />;
  }

  return (
    <>
      <Header />

      <Outlet />
      
      {/* Conditionally render Footer */}
      {!isSearchRoute && <Footer />}
      
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
