import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const mainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default mainLayout