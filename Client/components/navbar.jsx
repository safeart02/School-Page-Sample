import React, { useState, useEffect, useRef } from "react";
import LOGO from "../icons/logo.json";
import Home from "../icons/home.json";
import Courses from "../icons/courses.json";
import Contact from "../icons/contact.json";
import About from "../icons/about.json";
import { NavLink } from "react-router-dom";
import { Player } from "@lordicon/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const playerRef = useRef(null);
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);

  const [hovered, setHovered] = useState({
    home: false,
    courses: false,
    contact: false,
    about: false
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (section) => {
    setHovered((prev) => ({ ...prev, [section]: true }));
    if (section === "home") playerRef1.current?.playFromBeginning();
    if (section === "courses") playerRef2.current?.playFromBeginning();
    if (section === "contact") playerRef3.current?.playFromBeginning();
    if (section === "about") playerRef4.current?.playFromBeginning();
  };

  const handleMouseLeave = (section) => {
    setHovered((prev) => ({ ...prev, [section]: false }));
    if (section === "home") playerRef1.current?.playFromBeginning();
    if (section === "courses") playerRef2.current?.playFromBeginning();
    if (section === "contact") playerRef3.current?.playFromBeginning();
    if (section === "about") playerRef4.current?.playFromBeginning();
  };

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-gray-900 hover:bg-black rounded-md px-3 py-2 cursor-pointer transition duration-150 flex items-center space-x-2"
      : "text-white hover:bg-gray-800 rounded-md px-3 py-2 transition duration-50 flex items-center space-x-2";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-green-900 bg-opacity-60 backdrop-blur-lg p-4 sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center w-full flex-wrap">
        <div className="flex items-center space-x-4 ml-4">
          <Player
            ref={playerRef}
            size={60}
            icon={LOGO}
            onComplete={() => playerRef.current?.playFromBeginning()}
            style={{ width: "60px", height: "60px", color: "white" }}
            className="mb-1"
          />
          <Link className="md:block text-white text-2xl font-bold">
            Mint Academy
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
        </div>

        <div
          className={`space-x-6 flex flex-col md:flex-row md:space-x-6 items-center w-full md:w-auto md:flex md:block ${menuOpen ? 'block' : 'hidden'}`}
        >
          <NavLink
            to="/"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={() => handleMouseLeave("home")}
            className={linkClass}
          >
            <Player
              ref={playerRef1}
              size={30}
              icon={Home}
              className="mb-1"
            />
            Home
          </NavLink>

          <NavLink
            to="/courses"
            onMouseEnter={() => handleMouseEnter("courses")}
            onMouseLeave={() => handleMouseLeave("courses")}
            className={linkClass}
          >
            <Player
              ref={playerRef2}
              size={30}
              icon={Courses}
              className="mb-1"
            />
            Courses
          </NavLink>

          <NavLink
            to="/contact"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={() => handleMouseLeave("contact")}
            className={linkClass}
          >
            <Player
              ref={playerRef3}
              size={30}
              icon={Contact}
              className="mb-1"
            />
            Contact
          </NavLink>

          <NavLink
            to="/about"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
            className={linkClass}
          >
            <Player
              ref={playerRef4}
              size={30}
              icon={About}
              className="mb-1"
            />
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
