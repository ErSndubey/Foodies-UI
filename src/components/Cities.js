import {useState } from "react";

const Cities = ()=>{
    const [selectedCity, setSelectedCity] = useState();
    return(
        <>
              {/* city dropdown */}
      <div className="flex lg:flex-row justify-between items-between  mt-3 px-3 ">
        <div className="lg:flex lg:flex-col">
          <h3 className="font-bold lg:text-xl text-gray-600 mt-4 ml-1 xl:ml-4 ">
            🍽️ All Restaurant Nearby
          </h3>
          <h3 className="from-neutral-700 -mt-0.5 text-sm lg:text-lg xl:ml-4  text-gray-600 mb-3 mx-1">
            Discover unique tastes near you
          </h3>
        </div>
        <div className=" flex items-center justify-center mt-3  top-14 xl:top-4   px-3 lg:ml-auto">
          <select
            className=" p-1 bg-white text-sm text-gray-500 font-semibold border border-gray-400 rounded-lg focus:border-gray-100"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="All Cities">Cities</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Surat">Surat</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Visakhapatnam">Visakhapatnam</option>
            <option value="Kochi">Kochi</option>
            <option value="Indore">Indore</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Noida">Noida</option>
            <option value="Agra">Agra</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Bhubaneswar">Bhubaneswar</option>
            <option value="Coimbatore">Coimbatore</option>

            {/* Add more cities as needed */}
          </select>
        </div>
      </div>
        </>
    )
}

export default Cities;


