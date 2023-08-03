import { useState } from "react";
import { restaurantList } from "../config";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("KFC");

  const [restaurant, setRestaurant] = useState(restaurantList);
  return (
    <>
      {
        <div className="w-full md:w-72 flex items-center justify-center">
          <input
            type="text"
            className=" w-full p-2 pl-10 text-sm text-gray-500 font-semibold  border border-gray-400 rounded-lg bg-white "
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            type="submit"
            className="p-1.5 text-gray-700 bg-gray-100 border  border-gray-300 rounded-md ml-2 hover:bg-gray-200"
            onClick={() => {
              filterData();
            }}
          >
            Search
          </button>
        </div>
      }
    </>
  );
};

export default SearchBox;
