import React from 'react'
import { useState } from 'react'
import { FaBookOpen  } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const courseListing = ({course}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = course.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }


  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
          {/* Card Header with Icon */}
          <div className="bg-green-700 text-white py-4 px-6 flex items-center justify-between">
            <div className="text-2xl font-bold">{course.courses}</div>
            <div className="text-3xl">
              <i className="fas fa-graduation-cap"></i> {/* Add an icon, you can change it */}
            </div>
            <FaBookOpen className=' mb-1 h-10 w-10' />
          </div>

          {/* Card Body */}
          <div className="p-6">
            <p className="text-gray-600 text-sm mb-6">{description}</p>
            <button 
              onClick={() => setShowFullDescription((prevState) => !prevState)} 
              className="text-green-700 mb-5 hover:text-green-800">
                {showFullDescription ? 'Show Less' : 'Show More'}
            </button>

            <div className="flex justify-between items-center">
              {/* Price */}
              <span className="text-xl font-semibold text-black">${course.price}</span>

              {/* CTA Button */}
              <Link to = {`/course/${course.id}`} className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-300">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
  )
}

export default courseListing