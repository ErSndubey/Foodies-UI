import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  // State to hold the list of all restaurants
  const [allRestaurants, setAllRestaurants] = useState([]);
  // State to hold the filtered list of restaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // State to store the current value of the search input
  const [searchInput, setSearchInput] = useState("");

  // API Call to fetch the restaurants data
  useEffect(() => {
    getRestaurants();
  }, []);

  // Function to fetch the restaurants data from the API
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Update the state variables with the fetched data
    setAllRestaurants(json?.data?.cards[2]?.data.data.cards);
  }

  // Event handler to update the search input state as the user types
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Event handler to handle the Enter key press event for triggering search
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Function to handle the search action when the search button is clicked
  const handleSearch = () => {
    const data = filterData(searchInput, allRestaurants);
    setFilteredRestaurants(data);
  };

  // Initialize filteredRestaurants with allRestaurants when the component mounts
  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  // If Offline
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Yor are Offline. Please check your internet connection.</h1>;
  }

  return (
    <>
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* List of Restaurants */}
      <div className="Restraunt-List">
        {allRestaurants?.length === 0 ? (
          // Show Shimmer effect if the data is loading
          <Shimmer />
        ) : filteredRestaurants.length === 0 ? (
          // Display "No match found" message if filteredRestaurants array is empty
          <p>No match found</p>
        ) : (
          // Display the list of restaurants
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
