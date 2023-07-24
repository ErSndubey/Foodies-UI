import ProfileFunctionlComponent from "./Profile";
import Profile from "./ProfileClass";
import React from "react";

/* const About2 = () => {
  return (
    <>
      <div>
        <h1>About us Page</h1>
        <p>This is our about us page.</p>

        <ProfileFunctionlComponent  name={"Akshay"}/>
        <Profile name={"Akshay Class"}/>
      </div>
    </>
  );
}; */

class About extends React.Component {
  constructor(props) {
    super(props);
   
    console.log("parent-constructor");
  }

  componentDidMount() {
    //best place to make an API call
  

    console.log(" parent-componentDidMount");
  }
  render() {
    console.log("parent-render");
    return (
      <>
        <div>
          <h1>About us Page</h1>
          <p>This is our about us page.</p>

          
          <ProfileFunctionlComponent/>
        </div>
      </>
    );
  }
}

export default About;
