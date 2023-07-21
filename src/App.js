import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";

import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Support from "./components/Support";
import Cart from "./components/Cart";
import ReataurantMenu from "./components/ReatrauntMenu";

// AppLayout component represents the main layout of the application
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

// Create a router configuration using react-router-dom's createBrowserRouter
const appRouter = createBrowserRouter([
  {
    // Define the route for the home page (path: "/")
    path: "/",
    // The element to be rendered when the home page is accessed
    element: <AppLayout />,
    // The element to be rendered when the URL is not found.
    errorElement: <Error />,
    children: [

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Support",
        element: <Support />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <ReataurantMenu />,
      },
    ],
  },
]);

// Get the root element to render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the RouterProvider with the appRouter configuration to provide routing for the application
root.render(<RouterProvider router={appRouter} />);
