import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Offers from "./components/Offers";
import CartPage from "./components/CartPage.js";
import RestaurantMenu from "./components/RestaurantMenu";
import BottomNav from "./components/BottomNav";
import Dining from "./components/Dining";
import Profile from "./components/Profile";

const AppLayout = () => {
  const isMobileOrTablet = window.matchMedia("(max-width: 821px)").matches;
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
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
        path: "/Offers",
        element: <Offers />,
      },
      {
        path: "/CartPage",
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
