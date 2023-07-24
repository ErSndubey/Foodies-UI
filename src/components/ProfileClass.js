import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //cretate State here
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };

    console.log("child-constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ersndubey");
    const json = await data.json();
    //set state (Updating will start)
    this.setState({
      userInfo: json,
    });
  /*   console.log("child-componentDidMount");
    this.timer=setInterval(()=>{
      console.log("I am home page")
    },1000) */
  }

  componentWillUnmount(){
   /*  clearInterval(this.timer)
    console.log("ComponentWillUnmount"); */
  }
  render() {
    console.log("child render" + this.props.name);
    return (
      <div>
        <h2>Profile class component.</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h3>Name:{this.state.userInfo.name}</h3>
        <h3>Location:{this.state.userInfo.location}</h3>
      </div>
    );
  }
}

export default Profile;
