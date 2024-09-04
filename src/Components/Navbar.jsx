import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaPlusCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-pink-500 bg-opacity-70 p-4 flex justify-between items-center shadow-md">
      <div className="text-white text-2xl font-bold">
        <Link to="/home" className="hover:text-gray-200">
          Toy Shop
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-white rounded-md">
          <input
            type="text"
            placeholder="Search toys..."
            className="p-2 rounded-md border-none outline-none bg-transparent text-white placeholder-gray-300"
          />
          <FaSearch className="h-5 w-5 text-white mx-2" />
        </div>
        <Link
          to="/login"
          className="text-white hover:bg-pink-700 hover:text-white px-4 py-2 rounded-md transition duration-300 flex items-center"
        >
          <FaUser className="h-5 w-5 mr-2" />
          Login
        </Link>
        <Link
          to="/register"
          className="text-white hover:bg-pink-700 hover:text-white px-4 py-2 rounded-md transition duration-300 flex items-center"
        >
          <FaPlusCircle className="h-5 w-5 mr-2" />
          Register
        </Link>
        <Link
          to="/banner"
          className="text-white hover:bg-pink-700 hover:text-white px-4 py-2 rounded-md transition duration-300 flex items-center"
        >
          <FaUser className="h-5 w-5 mr-2" />
          Banner
        </Link>
        <Link
          to="/galaxy"
          className="text-white hover:bg-pink-700 hover:text-white px-4 py-2 rounded-md transition duration-300 flex items-center"
        >
          <FaUser className="h-5 w-5 mr-2" />
          Galaxy
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
