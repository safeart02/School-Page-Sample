import React from 'react';
import {NavLink} from 'react-router-dom';

const viewAllCourses = () => {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
        <NavLink 
        to='/courses'
        className = 'block bg-green-700 text-white text-center py-4 px-6 rounded-xl hover:bg-green-800 transition duration-300'>View All Courses
        </NavLink>
    </section>
  )
}

export default viewAllCourses