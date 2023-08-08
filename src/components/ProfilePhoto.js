import React, { useState } from "react";

const ProfilePhoto = () => {
  const [imageData, setImageData] = useState(
    localStorage.getItem("profilePhoto") || ""
  );
  const [fileSelected, setFileSelected] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageData(e.target.result);
        setFileSelected(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setSaving(true);
    localStorage.setItem("profilePhoto", imageData);
    setTimeout(() => {
      setFileSelected(false);
      setSaving(false);
    }, 1000); // Simulate saving delay
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <img
        src={imageData || "https://via.placeholder.com/150"}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
      />
      {!fileSelected && (
        <label className="-mt-8 p-0.5 bg-white ml-20 cursor-pointer border-2 rounded-full border-blue-500 ">
          ✏️
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      )}
      {fileSelected && !saving && (
        <button
          onClick={handleSave}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded focus:outline-none"
        >
          Save
        </button>
      )}
      {saving && <p className="mt-2">Saving...</p>}
    </div>
  );
};

export default ProfilePhoto;
