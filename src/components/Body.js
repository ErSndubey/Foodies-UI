import { restrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
// Body ➤
//restrauntList is an arry containing the various data related to a restaurants.

function filterData(searchInput , restaurants){
return(restaurants.filter((restraunt)=>restraunt.data.name.includes(searchInput)))


}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restrauntList);
  
  const [searchInput, setSearchInput] = useState();
  return (
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
         const data =   filterData(searchInput, restaurants);
         //update the state- restaurents
         setRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="Restraunt-List">
        {restaurants.map((restraunt) => {
          return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
