import React from "react";

// Component: Shimmer effect to display loading placeholders
const Shimmer = () => {
  return (
    <div className="Restraunt-List">
      {/* Create an array of 10 elements and fill it with null as placeholders */}
      {Array(10)
        .fill(null)
        .map((_, index) => (
          // Render each shimmer-card div with a unique key (using the index)
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
