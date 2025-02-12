import React from 'react';
import heroImage from '../src/Assets/Images/hero-image.png'; // Replace with your image path
import { Link } from 'react-router-dom'

const hero = ({title = 'Mint Academy', subtitle = 'Welcome to Mint Academy'}) => {
  return (
    <section
  className="relative w-full h-90 sm:h-96 bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  {/* Glassmorphism overlay */}
  <div
    className="absolute inset-0 backdrop-blur-sm"
    style={{ backgroundColor: 'rgba(240, 240, 240, 0.45)' }}
  ></div>

  {/* Content */}
  <div className="relative z-10 flex justify-center items-center h-full text-center text-gray-900 px-6 sm:px-12">
    <div>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        {subtitle}
      </p>
      <br />
      <Link
        to="/register"
        className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:backdrop-blur-lg"
      >
        Get Started
      </Link>
    </div>
  </div>
</section>



  );
};

export default hero;
