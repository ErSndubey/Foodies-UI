/* import React, { useState, useEffect } from "react";
import ProfilePhoto from "./ProfilePhoto";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Load user profile data from local storage on component mount
    const savedData = JSON.parse(localStorage.getItem("userProfileData")) || {};
    setName(savedData.name || "");
    setEmail(savedData.email || "");
    setPhoneNumber(savedData.phoneNumber || "");
    setAddress(savedData.address || "");
  }, []);

  const handleEditSave = () => {
    if (editing) {
      // Save user profile data to local storage
      const userProfileData = { name, email, phoneNumber, address };
      localStorage.setItem("userProfileData", JSON.stringify(userProfileData));
    }
    setEditing(!editing);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <ProfilePhoto />
      <div className="mx-auto text-center">
        
        <div className="mt-4 mx-auto">
          <div className="mb-4 flex items-center">
            <label className="w-32 ">Name:</label>
            {editing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            ) : (
              <p>{name}</p>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-32 ">Email:</label>
            {editing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            ) : (
              <p>{email}</p>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-32 ">contact:</label>
            {editing ? (
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            ) : (
              <p>{phoneNumber}</p>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <label className="w-32 ">Address:</label>
            {editing ? (
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            ) : (
              <p className="w-56 text-justify">{address}</p>
            )}
          </div>
        </div>
        <button
          onClick={handleEditSave}
          className="px-6 py-2 my-4 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          {editing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
 */
import ProfileIcon from "../Images/profile-icon.svg";
import { useState } from "react";
import React from 'react';

const UserProfilePage = () => {
  const [userName, setUserName] = useState('John Doe');
  return (
    <div className="bg-red-100 min-h-screen">
           <Header userName={userName} />
      <PersonalInformation userName={userName} setUserName={setUserName} />
      <OrderHistory />
      <Favorites />
      <Settings />
      <LogoutButton />
    </div>
  );
};

const Header = ({ userName }) => {
  return (
    <header className="bg-red-500 text-white p-4 flex-col md:flex justify-between items-center">
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden w-12 h-12">
          <img src={ProfileIcon} alt="User Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4 flex md:flex-col">
          <h1 className="text-xl font-semibold mt-2">{userName}</h1>
          <p className="text-sm mt-3.5 mx-2">Food Lover</p>
        </div>
      </div>
      <nav>
        {/* Navigation links */}
        <ul className="flex space-x-4 justify-between mt-2">
        <li>
            <a href="#profile" className="text-white hover:underline">
              Profile
            </a>
          </li>
          <li>
            <a href="#orders" className="text-white hover:underline">
              Orders
            </a>
          </li>
          <li>
            <a href="#favorites" className="text-white hover:underline">
              Favorites
            </a>
          </li>
          <li>
            <a href="#settings" className="text-white hover:underline">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const PersonalInformation = ({ userName, setUserName }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [email, setEmail] = useState('john@example.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [location, setLocation] = useState('City, Country');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform API call or update logic here
    setIsEditing(false);
  };

  return (
    <section id="profile" className="bg-white p-6 rounded-lg shadow-md my-4 mx-2">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Name</label>
          {isEditing ? (
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
            />
          ) : (
            <p className="mt-1">{userName}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
            />
          ) : (
            <p className="mt-1 text-sm">{email}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          {isEditing ? (
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
            />
          ) : (
            <p className="mt-1">{phoneNumber}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          {isEditing ? (
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
            />
          ) : (
            <p className="mt-1">{location}</p>
          )}
        </div>
      </div>
      {isEditing ? (
        <button
          onClick={handleSaveClick}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleEditClick}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Edit
        </button>
      )}
    </section>
  );
};
const OrderHistory = () => {
  return (
    <section id="orders" className="bg-white p-6 rounded-lg shadow-md my-4 mx-2">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <ul className="space-y-4">
        <li>
          <p className="text-gray-600">Date: July 15, 2023</p>
          <p>Items: Pizza, Salad</p>
          <p>Total: $25.99</p>
          <button className="text-blue-500 hover:underline">View Details</button>
        </li>
        {/* Add more order history items */}
        <li>
          <p className="text-gray-600">Date: July 10, 2023</p>
          <p>Items: Burger, Fries</p>
          <p>Total: $15.99</p>
          <button className="text-blue-500 hover:underline">View Details</button>
        </li>
      </ul>
    </section>
  );
};

const Favorites = () => {
  return (
    <section id="favorites" className="bg-white p-6 rounded-lg shadow-md my-4 mx-2">
      <h2 className="text-xl font-semibold mb-4">Favorites</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="border border-gray-300 p-2 rounded">
          <img src="food-image-1.jpg" alt="Food Item 1" className="w-full" />
          <p className="mt-2">Pizza</p>
          <button className="mt-2 text-red-500 hover:underline">Remove</button>
        </div>
        {/* Add more favorite food items */}
        <div className="border border-gray-300 p-2 rounded">
          <img src="food-image-2.jpg" alt="Food Item 2" className="w-full" />
          <p className="mt-2">Burger</p>
          <button className="mt-2 text-red-500 hover:underline">Remove</button>
        </div>
      </div>
    </section>
  );
};

const Settings = () => {
  return (
    <section id="settings" className="bg-white p-6 rounded-lg shadow-md my-4 mx-2">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div>
        {/* Add settings options */}
        <div className="mb-4">
          <label className="block text-gray-700">Change Password</label>
          <input type="password" className="mt-1 w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Communication Preferences</label>
          {/* Add radio buttons or checkboxes */}
        </div>
        <div>
          <label className="block text-gray-700">Notification Settings</label>
          {/* Add checkboxes or toggle switches */}
        </div>
      </div>
    </section>
  );
};

const LogoutButton = () => {
  return (
    <div className="mt-8  flex justify-center">
      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default UserProfilePage;

