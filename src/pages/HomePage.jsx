// src/pages/HomePage.jsx
import React from "react";

const HomePage = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover Local Experiences & Attractions
        </h1>

        {/* Search Bar */}
        <div className="flex items-center max-w-xl mx-auto bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Where do you want to explore?"
            className="flex-grow px-4 py-3 text-gray-700 outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition">
            Discover Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
