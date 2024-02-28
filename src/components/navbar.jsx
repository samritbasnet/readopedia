// Navbar.js

import React from 'react';
import logo from "../components/logo.jpeg";

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt='logo' className='h-8 w-auto mr-2'/>
          <a href="/" className="text-white text-2xl font-semibold">Readopedia</a>
        </div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
          <li><a href="/categories" className="text-white hover:text-gray-400">Categories</a></li>
          <li><a href="/about" className="text-white hover:text-gray-400">Blog</a></li>
          <li><a href="/about" className="text-white hover:text-gray-400">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
