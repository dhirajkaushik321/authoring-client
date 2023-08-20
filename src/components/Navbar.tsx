import React, { useState } from 'react';
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa';
import logo from '../images/logo.jpg';

const Navbar: React.FC = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);  

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <nav className={`bg-gray-400 p-4 flex justify-between items-center fixed top-0 left-0 z-40 h-screen-0 w-full`}
      aria-label="Navbar">

      {/* Icon */}
      <div className="text-white text-2xl">
        <i className="fas fa-bars"></i>
        <img
          src={logo}
          alt="Company Logo"
          className="w-8 h-8 rounded-full"
        />
      </div>

      {/* Dropdown */}
      {/* <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-white text-xl mx-4 focus:outline-none"
        >
          <i className="fas fa-cog">Explore</i>
          
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded shadow-lg">          
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Common
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Technology
            </a>
          </div>
        )}
      </div> */}

      {/* Search Box */}
      {/* <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white w-60 self-center place-items-center"
        />
      </div> */}

<div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white"
        />
      </div>

      {/* Notifications */}
      <div className="text-white text-xl mx-4">
        <FaBell />
      </div>

      {/* Profile Photo */}
      <div className="relative">
        <FaUserCircle size="32" />
      </div>

    </nav>
  );
};

export default Navbar