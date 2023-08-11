import React, { useState } from 'react';

const SearchLocation = () => {
    const [inputValue, setInputValue] = useState('');
    const [predictions, setPredictions] = useState([]);
  
    const handleChange = async (e) => {
      const value = e.target.value;
      setInputValue(value);
  
      if (value.length >= 3) {
        try {
          const response = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${value}&types=`);
          const data = await response.json();
          console.log(data);
          setPredictions(data.data);
        } catch (error) {
          console.error('Error fetching place suggestions:', error);
        }
      } else {
        setPredictions([]);
      }
    };
  
    const handleSuggestionClick = (prediction) => {
      setInputValue(prediction.description);
      setPredictions([]);
    };
  
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for a city..."
        />
        <div>
          {predictions.map((prediction) => (
            <div
              key={prediction.place_id}
              onClick={() => handleSuggestionClick(prediction)}
              style={{ cursor: 'pointer', padding: '5px' }}
            >
              {prediction.description}
            </div>
          ))}
        </div>
      </div>
    );
  };
export default SearchLocation;
