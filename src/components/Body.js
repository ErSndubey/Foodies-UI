import { restrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restraunt) =>
    restraunt?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurents(json?.data?.cards[2]?.data.data.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data.data.cards);
  }

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    const data = filterData(searchInput, allRestaurents);
    setFilteredRestaurants(data);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return allRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Add the onKeyPress event handler for Enter key press
        />
        <button
          className="search-btn"
          onClick={handleSearch}
        >
          search
        </button>
      </div>
      <div className="Restraunt-List">
        {filteredRestaurants.map((restraunt) => (
          <RestrauntCard {...restraunt.data} key={restraunt.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
