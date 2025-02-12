import React from 'react';
import ClockLoader from 'react-spinners/ClockLoader';

const override = {
  display: 'block',
  margin: 'auto',
};

const Spinner = ({ loading }) => {
  return (
    // Full screen overlay with translucent glass effect
    <div
      style={{
        position: 'fixed', // Position the div to cover the entire screen
        top: 0,
        left: 0,
        width: '100vw', // Full width of the viewport
        height: '100vh', // Full height of the viewport
        backgroundColor: 'rgba(0, 100, 0, 0.1)', // Slightly transparent background
        backdropFilter: 'blur(10px)', // Apply a blur effect to the background
        display: 'flex',
        justifyContent: 'center', // Center spinner horizontally
        alignItems: 'center', // Center spinner vertically
        zIndex: 1, // Ensure it's on top of other content
      }}
    >
      <ClockLoader
        color="#287F3E"
        loading={loading}
        cssOverride={override}
        size={150} // Keep the size of the spinner the same
      />
    </div>
  );
};

export default Spinner;
