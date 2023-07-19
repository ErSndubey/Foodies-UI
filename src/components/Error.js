import { useRouteError } from "react-router-dom";

const error = () => {
    const err = useRouteError;
    console.log(err)
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Somthing wenr wrong!!</h2>
    </div>
  );
};

export default Error; 