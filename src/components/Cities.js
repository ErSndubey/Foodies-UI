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

      </div>
        </>
    )
}

export default Cities;


