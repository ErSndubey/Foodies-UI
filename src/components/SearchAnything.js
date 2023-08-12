import React, { useState, useEffect, useRef } from "react";
import { IMG_CDN_URL } from "../config";

function SearchAnyThing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=22.7280835&lng=75.80422949999999&str=${searchTerm}g&trackingId=undefined`
      )
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData.data.suggestions);
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
              className="suggestions absolute bg-white border rounded shadow-md mt-2 w-full mb-5  overflow-y-auto"
            >
              <ul>
                {data.map((item) => (
                  <li
                    key={item.text}
                    className="px-4 py-4 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <img
                        src={`${IMG_CDN_URL}${item.cloudinaryId}`}
                        alt="cuisine Image"
                        className="w-14 h-14 rounded-md"
                      />
                      <div
                        id="suggestions"
                        className="flex flex-col mx-3 text-center"
                      >
                        <div className="text-sm">
                          <strong>{item.text}</strong>
                        </div>
                        <div className="text-xs flex -mt-0.5 justify-start">
                          {item.tagToDisplay}
                        </div>
                      </div>
                    </div>
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
    fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/landing/PRE_SEARCH?lat=12.9715987&lng=77.5945627"
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setPopularCuisines(
          responseData.data.cards[3].card.card.gridElements.infoWithStyle.info
        );
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
