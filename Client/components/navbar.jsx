
import React, { useState, useEffect, useRef } from 'react';
import logo from "../src/Assets/Images/Logo/logo.png";
import LOGO from '../icons/wired-outline-1841-algae-hover-pinch.json';
import { NavLink } from "react-router-dom";
import { Player } from '@lordicon/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white bg-gray-900 hover:bg-black rounded-md px-3 py-2 cursor-pointer transition duration-150'
      : 'text-white hover:bg-gray-800 rounded-md px-3 py-2 transition duration-50';

  return (
    <nav className="bg-green-700 p-4 sticky top-0 z-50">
      {/* Container for logo and MyApp */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Apply margin-left to center the logo and text */}
        <div className="flex items-center space-x-2 ml-4">
        <Player
          ref={playerRef}
          size={40}
          icon={LOGO} // This is your Lordicon JSON icon
          onComplete={() => playerRef.current?.playFromBeginning()}
          style={{ width: '100px', height: '100px', color: 'white'}} // Set dimensions if needed
          className="mb-1"
        />
          <Link className="hidden md:block text-white text-2xl font-bold">Mint Academy</Link>
        </div>

        {/* Container for navigation items */}
        <div className="space-x-6 md:flex">
          <span>
            <NavLink to="/" className={linkClass}>Home</NavLink>
          </span>
          <span>
            <NavLink to="/course" className={linkClass}>Courses</NavLink>
          </span>
          <span>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </span>
          <span>
            <NavLink to="/about" className={linkClass}>About</NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
