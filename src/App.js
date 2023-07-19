import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// AppLayout component represents the main layout of the application
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
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
  },
  {
    path: "/about",
    element: <About />,
  },
]);

// Get the root element to render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the RouterProvider with the appRouter configuration to provide routing for the application
root.render(<RouterProvider router={appRouter} />);
