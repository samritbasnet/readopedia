import React, { useState } from 'react';
import logo from "../components/logo.jpeg";
import userLogo from "../components/userlogo.jpeg";

function Navbar() {
  // State to manage authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic (e.g., authenticate user)
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic (e.g., clear authentication)
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-gray-800 py-4 relative z-10"> {/* Increased z-index */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt='logo' className='h-8 w-auto mr-2'/>
          <a href="/" className="text-white text-2xl font-semibold hover:text-red-500">Readopedia</a>
        </div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-red-500">Home</a></li>
          <li><a href="/categories" className="text-white hover:text-red-500">Categories</a></li>
          <li><a href="/about" className="text-white hover:text-red-500">Blog</a></li>
          <li><a href="/about" className="text-white hover:text-red-500">About</a></li>
          {isLoggedIn ? (
            <li className="relative">
              <img src={userLogo} alt="User Logo" className="h-8 w-8 rounded-full cursor-pointer" />
              <ul className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg text-gray-800">
                <li><a href="/account" className="block px-4 py-2 hover:bg-gray-200">My Account</a></li>
                <li><button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-200 w-full text-left">Logout</button></li>
              </ul>
            </li>
          ) : (
            <li><button onClick={handleLogin} className="text-white hover:text-red-500">Login</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
