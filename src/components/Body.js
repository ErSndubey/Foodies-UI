import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

// Function to filter the restaurants based on the search input
function filterData(searchInput, restaurants) {
  return restaurants.filter(
    (restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
}

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // Update the state variables with the fetched data
    setAllRestaurants(json?.data?.cards[0]?.data.data.cards);
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
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
