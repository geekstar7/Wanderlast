// src/pages/ExplorePage.jsx
import React, { useState } from "react";
import FilterBar from "../components/FilterBar";
import Card from "../components/Card";
import { attractions } from "../data";

const ExplorePage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredAttractions =
    activeFilter === "All"
      ? attractions
      : attractions.filter((a) => a.type.includes(activeFilter));

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
        Discover Your Next Adventure
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Explore curated lists of top attractions, hidden gems, and local favorites from around the globe.
      </p>

      {/* Filters */}
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAttractions.map((place, index) => (
          <Card key={index} {...place} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
