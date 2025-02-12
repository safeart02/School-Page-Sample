import React from "react";
import logo from "../src/Assets/Images/Logo/logo.png";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'

const Navbar = () => {

  const linkClass = ({ isActive }) => isActive ? 'text-white bg-black hover:bg-gray-900 rounded-md px-3 py-2 cursor-pointer' : 'text-white hover:bg-gray-900 rounded-md px-3 py-2'

  return (
    <nav className="bg-green-700 p-4">
      {/* Container for logo and MyApp */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Apply margin-left to center the logo and text */}
        <div className="flex items-center space-x-2 ml-4">
          <img src={logo} alt="logo" className="h-10" />
          <Link className="text-white text-2xl font-bold">Mint Academy</Link>
        </div>

        {/* Container for navigation items */}
        <div className="space-x-6">
          <span>
            <NavLink to = '/' className={linkClass}>Home</NavLink>
          </span>
          <span>
            <NavLink to = '/course' className={linkClass}>Courses</NavLink>
          </span>
          <span>
            <NavLink to = '/contact' className={linkClass}>Contact</NavLink>
          </span>
          <span>
            <NavLink to = '/about' className={linkClass}>About</NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
