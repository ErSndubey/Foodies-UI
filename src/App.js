import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import BottomNav from "./components/BottomNav";
import Dining from "./components/Dining";
import useLocationStatus from "./Hooks/useLocationStatus";
import LocationPrompt from "./components/LocationPromt";
import ShimmerMenu from "./Shimmer/ShimmerMenu";

const SearchAnyThing = lazy(() => import("./components/SearchAnything"));
const Offers = lazy(() => import("./components/Offers"));
const CartPage = lazy(() => import("./components/CartPage.js"));
const Profile = lazy(() => import("./components/Profile"));

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

        element: (
          <Suspense fallback={ShimmerMenu}>
            <SearchAnyThing/>
          </Suspense>
        ),
      },
      {
        path: "/Offers",
        element: (
          <Suspense fallback={ShimmerMenu}>
            <Offers />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={ShimmerMenu}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "/Dining",
        element: <Dining />,
      },
      {
        path: "/Profile",
        element: (
          <Suspense fallback={ShimmerMenu}>
            <Profile />
          </Suspense>
        ),
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
