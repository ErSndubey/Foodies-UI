import { restrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

// Body ➤
//restrauntList is an arry containing the various data related to a restaurants.

function filterData(searchInput, restaurants) {
  return restaurants.filter((restraunt) =>
    restraunt?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurents, setAllRestaurents] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //API Call

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurents(json?.data?.cards[0]?.data.data.cards);

    setFilteredRestaurants(json?.data?.cards[0]?.data.data.cards);
  }

  // cinditional rendring (Early return)
  if (!allRestaurents) return null;

  if (filteredRestaurants?.length == 0) return <h1>No match found.</h1>;

  return allRestaurents?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //Need to filter the data on restrauntList
            const data = filterData(searchInput, allRestaurents);
            //update the state- restaurents
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="Restraunt-List">
        {}
        {filteredRestaurants.map((restraunt) => {
          return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
