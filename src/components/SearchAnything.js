import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IMG_CDN_URL } from "../config";

function SearchAnyThing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(
          `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=22.7280835&lng=75.80422949999999&str=${searchTerm}g&trackingId=undefined`
        )
        .then((response) => {
          setData(response.data.data.suggestions);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSearchTerm("");
        setData([]);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  rounded border-2 ">
      <header className="py-0 bg-white w-full">
        {/* Your header content can go here */}
      </header>
      <main className="flex-1 w-full max-w-3xl px-4 py-8">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for restaurant and food "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border font-sans rounded-xl px-4 py-2.5 w-full focus:outline-none border-gray-300 focus:border-gray-400"
          />
          {data.length > 0 && (
            <div
              ref={suggestionsRef}
              className="suggestions absolute bg-white border rounded shadow-md mt-2 w-full max-h-40 overflow-y-auto"
            >
              <ul>
                {data.map((item) => (
                  <li
                    key={item.text}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <strong>{item.highlightedText}</strong> - {item.type}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Fetch and display popular cuisine suggestions from another API */}
        <PopularCuisines />
      </main>
      <footer className="py-6 bg-white w-full">
        {/* Your footer content can go here */}
      </footer>
    </div>
  );
}


function PopularCuisines() {
  const [popularCuisines, setPopularCuisines] = useState([]);

  useEffect(() => {
    // Fetch popular cuisine suggestions from the API
    axios
      .get("https://corsproxy.io/?https://www.swiggy.com/mapi/landing/PRE_SEARCH?lat=12.9715987&lng=77.5945627")
      .then((response) => {
        console.log(response.data);
        setPopularCuisines(response.data.data.cards[3].card.card.gridElements.infoWithStyle.info);
      })
      .catch((error) => {
        console.error("Error fetching popular cuisines:", error);
      });
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-gray-700 text-xl font-bold mb-4">
        Popular <span className="text-red-900">Cuisines</span>
      </h2>
      <div className="flex flex-wrap -mx-2">
        {popularCuisines.map((cuisine) => (
          <div key={cuisine.id} className="w-1/4 p-2">
            <a href={`${cuisine.link}`}>
            <img
              src={`${IMG_CDN_URL}${cuisine.imageId}`}
              alt={cuisine.name}
              className="w-full h-auto rounded-md"
            />
            </a>
            <p className="mt-2 text-center text-gray-600">{cuisine.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}




export default SearchAnyThing;