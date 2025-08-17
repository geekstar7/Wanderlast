// src/components/Card.jsx
import React from "react";

const Card = ({ image, name, type, location, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{type}</p>
        <p className="text-sm text-gray-400">{location}</p>
        <p className="mt-2 text-yellow-500 font-semibold">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default Card;
