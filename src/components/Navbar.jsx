// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-teal-600">
        Wanderlast
      </Link>

      {/* Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/explore" className="hover:text-teal-600">Explore</Link>
        <Link to="/trips" className="hover:text-teal-600">Trips</Link>
        <Link to="/community" className="hover:text-teal-600">Community</Link>
        <Link to="/about" className="hover:text-teal-600">About</Link>
      </div>

      {/* Search + Profile */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search destinations..."
          className="hidden md:block border rounded-full px-4 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-teal-500"
        />
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </nav>
  );
};

export default Navbar;
