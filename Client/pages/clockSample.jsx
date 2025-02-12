import React, { useState, useEffect } from 'react';
import Spinner from '../components/spinner'; // Adjust the path if necessary

const MyPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner loading={loading} /> // Show spinner if loading
      ) : (
        <div>
          <h1>Page Content Loaded!</h1>
          <p>This is where your actual page content goes.</p>
        </div>
      )}
    </div>
  );
};

export default MyPage;
