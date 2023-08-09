import React, { useState, useEffect } from "react";
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
