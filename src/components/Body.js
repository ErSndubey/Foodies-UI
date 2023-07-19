import { restrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

// Function to filter the restaurants based on the search input
function filterData(searchInput, restaurants) {
  return restaurants.filter((restraunt) =>
    restraunt?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  // State to hold the list of all restaurants
  const [allRestaurents, setAllRestaurents] = useState([]);
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
    setAllRestaurents(json?.data?.cards[2]?.data.data.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data.data.cards);
  }

  // Event handler to update the search input state as the user types
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Function to handle the search action when the search button is clicked
  const handleSearch = () => {
    const data = filterData(searchInput, allRestaurents);
    setFilteredRestaurants(data);
  };

  // Event handler to handle the Enter key press event for triggering search
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return allRestaurents?.length === 0 ? (
    // Show Shimmer effect if the data is loading
    <Shimmer />
  ) : (
    <>
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Add the onKeyPress event handler for Enter key press
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {/* List of Restaurants */}
      <div className="Restraunt-List">
        {filteredRestaurants.map((restraunt) => (
          <RestrauntCard {...restraunt.data} key={restraunt.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
