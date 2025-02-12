import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm">
                    <span className="text-gray-400">
                        &copy; Mint Academy 2025 
                    </span>
                </div>
                <div className="flex space-x-6 text-sm font-semibold">
                    <NavLink to="/privacyPolicy" className="hover:text-gray-300">
                        Privacy Policy
                    </NavLink>
                    <NavLink to="/termsConditions" className="hover:text-gray-300">
                        Terms & Conditions
                    </NavLink>
                    <NavLink to="/disclaimer" className="hover:text-gray-300">
                        Disclaimer
                    </NavLink>
                    <NavLink to="/EULA" className="hover:text-gray-300">
                        EULA
                    </NavLink>
                </div>
            </div> 
        </footer>
    </>
  )
}

export default Footer