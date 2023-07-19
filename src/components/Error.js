import React from "react";
import { useLocation } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {

const err = useRouteError();
console.log(err);

  // Get the current location object from react-router-dom's useLocation hook
  const location = useLocation();
  
  // Extract the error data from the location state, if it exists
  const errorData = location.state?.error;

  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong!!</h2>
      <h2>{err.status+":"+ err.statusText}</h2>
      {/* Render the error message if errorData exists */}
      {errorData && <p>Error message: {errorData.message}</p>}
    </div>
  );
};

export default Error;
