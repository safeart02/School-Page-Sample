import React from 'react'
import { Link } from 'react-router-dom'

const notFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '80px',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '20px',
          color: '#666',
        }}
      >
        Oops! The page you're looking for does not exist.
      </p>
      <Link
                  to="/"
                  className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Go Back
                </Link>
    </div>
  )
}

export default notFoundPage