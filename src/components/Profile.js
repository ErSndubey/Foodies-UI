import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
   const timer= setInterval(()=>{
      console.log("I am about page.")
    },1000);
    return()=>{
      clearInterval(timer);
      console.log("useEffect Return")

    }
  },[]);

  return (
    <div>
      <h2>Profile Functional component.</h2>
      <h3>Nmae:{props.name}</h3>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
