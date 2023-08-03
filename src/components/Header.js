import LogoImage from "../Images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-4 sticky top-0 z-50 drop-shadow-lg ">
      <div className=" flex items-center justify-between px-4">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex items-center">
            <img src={LogoImage} alt="Logo" className="h-10 w-auto mr-2" />
            <span className="text-red-600 font-bold text-2xl xl:text-4xl ">
              Foodies
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className=" flex ">
          <ul className="flex gap-4 font-semibold text-gray-700 mt-2 mr-3">
            <li className="hidden">Home</li>
            <Link to="/Offers">
              <li>🏷️Offers</li>
            </Link>

            <Link to="/CartPage">
              <li> 🛒Cart</li>
            </Link>
          </ul>

          <div className="">
            {" "}
            <img
              class="w-10 h-10 p-1 rounded-full  "
              src="https://static.langimg.com/photo/imgsize-52268,msid-86087064/navbharat-times.jpg"
              alt="user avatar"
            />
          </div>
        </nav>
        {/* Avtar */}

        {/* Login Button */}
        {/*         <button className=" md:block bg-blue-600 text-white px-3 py-1 rounded-lg">
          Login
        </button> */}

        {/* Mobile Menu (hidden by default) */}
        <div className="md:hidden">
          {/* Add mobile menu toggle functionality here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
