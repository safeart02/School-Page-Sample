import React, { useState, useEffect, useRef } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { Player } from '@lordicon/react';
import ICON from '../icons/wired-gradient-112-book-hover-flutter.json';


const CourseListing = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const playerRef = useRef(null);

  // Play animation when the card is hovered
  useEffect(() => {
    if (isHovered && playerRef.current) {
      try {
        playerRef.current.playFromBeginning();
      } catch (error) {
        console.error("Error playing Lordicon animation:", error);
      }
    }
  }, [isHovered]); // Trigger animation on hover

  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionRef = useRef(null);

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true when hovering
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false when not hovering
    >
      {/* Card Header with Icon */}
      <div className="bg-green-700 text-white py-4 px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">{course.courses}</div>
        <div className="text-3xl">
        </div>
        {/* Lordicon only plays when the card is hovered */}
        <Player
          ref={playerRef}
          icon={ICON} // This is your Lordicon JSON icon
          autoplay={isHovered} // Autoplay when the card is hovered
          style={{ width: '100px', height: '100px', color: 'white'}} // Set dimensions if needed
          className="mb-1"
        />
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Animated Description */}
        <div
          ref={descriptionRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: showFullDescription
              ? `${descriptionRef.current.scrollHeight}px`
              : '90px', // Limit the height for collapsed state
          }}
        >
          <p className="text-gray-600 text-sm mb-6">{course.description}</p>
        </div>

        {/* Show More / Show Less Button */}
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-green-700 mb-5 hover:text-green-800"
        >
          {showFullDescription ? 'Show Less' : 'Show More'}
        </button>

        <div className="flex justify-between items-center">
          {/* Price */}
          <span className="text-xl font-semibold text-black">${course.price}</span>

          {/* CTA Button */}
          <NavLink
            to={`/course/${course.id}`}
            className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-300"
          >
            Enroll Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CourseListing;
