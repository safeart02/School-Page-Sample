import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FAB from "../components/upFAB";
import '../dist/customScroll.css';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <FAB />
    </>
  );
};

export default MainLayout;
