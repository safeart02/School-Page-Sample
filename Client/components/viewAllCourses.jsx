import React from 'react'

const viewAllCourses = () => {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
        <a 
        href='/course'
        className = 'block bg-green-700 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'>View All Courses
        </a>
    </section>
  )
}

export default viewAllCourses