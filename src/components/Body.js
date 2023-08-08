import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { getRestaurants } from "../utils/helper";
import ShimmerMain from "../Shimmer/ShimmerMain";
import { handleSearch } from "../utils/helper";
import { Link } from "react-router-dom";
import SearchIcon from "../Images/search-icon.svg";
import Cities from "./cities";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // getRestaurant function call
    getRestaurants(setRestaurants, setFilteredRestaurants);
  }, []);

  return restaurants?.length === 0 && filteredRestaurants?.length === 0 ? (
    <ShimmerMain />
  ) : (
    <>
      {/* search Box */}
      <div className="max-w-screen-sm flex items-center justify-center mx-auto mt-3 sticky top-4   px-3  ">
        <input
          type="text"
          className="w-full p-2 bg-white text-sm text-gray-500 font-semibold border border-gray-400 rounded-lg focus:border-gray-100 "
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(
                setFilteredRestaurants,
                searchText,
                restaurants,
                setErrorMessage
              );
            }
          }}
        />
        <button
          type="submit"
          className="p-1.5 text-gray-700 bg-gray-100 border  border-gray-300 rounded-md ml-2 hover:bg-gray-200"
          onClick={() =>
            handleSearch(
              setFilteredRestaurants,
              searchText,
              restaurants,
              setErrorMessage
            )
          }
        >
          <img src={SearchIcon} alt="Profile" className="w-6 h-6" />
        </button>
      </div>
      {/*  Search error */}
      {errorMessage && (
        <div className="text-center my-4 font-bold text-gray-600">
          {errorMessage}.
        </div>
      )}
      {/* cities dropdown */}
      <Cities />
      {/* BODY */}
      <div className="grid grid-cols-2  mr-1 ml-1 xl:ml-4  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              /* data.cards[0].card.card.info.slugString */
              to={"/restaurant/" + restaurant?.info.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
