import LogoImage from "/src/Images/logo.png";
//Named export
const authenticateUser = () => {
  return true;
};

export const Title = () => {
  return (
    <div className="logo">
      <a href="/" style={{ textDecoration: "none" }}>
        <img key="LogoImage" src={LogoImage} alt="Hungry Hub Logo" />
        <h2 id="title" key="LogoText">
          Hungry Hub
        </h2>
      </a>
    </div>
  );
};

// Header ➤
const Header = () => {
  return (
    // for multiple lines '()' is mandatory
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Suport</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        
      }
      <button>Login</button>
      <button>Logout</button>
    </div>
  );
};
//Default export
export default Header;
