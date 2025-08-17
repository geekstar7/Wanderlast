// src/components/FilterBar.jsx
import React from "react";

const FilterBar = ({ activeFilter, setActiveFilter }) => {
  const filters = ["All", "Landmarks", "Museums", "Parks", "Hidden Gems"];

  return (
    <div className="flex justify-center space-x-4 my-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition 
            ${activeFilter === filter 
              ? "bg-teal-600 text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
