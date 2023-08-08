import React from "react";

const Dining = () => {
  return (
    <div className="max-w-3xl mx-auto mt-3">
      <div className="bg-white px-2 rounded-lg ">
        <img
          src="https://b.zmtcdn.com/data/pictures/6/19255146/2a0917e81fdd351cba04293c64a25fb9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="Restaurant"
          className="w-full h-auto rounded-lg shadow-sm shadow-gray-500"
        />
        <div className="flex"><span>
        <h2 className="text-xl font-bold mt-2">Raahi</h2>

        <p className="text-gray-600 mb-2">St. Marks Road, Bangalore</p>
        </span>
        <p className="text-gray-600 mt-2">🕗 11:00 AM - 10:00 PM</p>
        </div>
      </div>

      <div className="mb-6 mx-3">
        <h3 className="text-lg font-semibold mb-2">Reviews</h3>
        <div className="flex items-center mb-3">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="font-semibold">Alice Smith</p>
            <p className="text-gray-600">"The pasta here is amazing!"</p>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="font-semibold">Bob Johnson</p>
            <p className="text-gray-600">"Excellent service and ambiance."</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="font-semibold">Eve Williams</p>
            <p className="text-gray-600">"Highly recommend the tiramisu!"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
