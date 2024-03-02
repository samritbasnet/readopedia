import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center">
            <img
              className="block lg:hidden h-10 w-auto mr-2"
              src="https://img.freepik.com/premium-vector/video-game-shop-theme-logo-template_1056-348.jpg"
              alt="navlogo"
            />
            <img
              className="hidden lg:block h-10 w-auto mr-2"
              src="https://img.freepik.com/premium-vector/video-game-shop-theme-logo-template_1056-348.jpg"
              alt="Workflow"
            />
            <span className="text-white text-lg font-bold">GameStore</span>
          </a>

          {/* Search */}
          <div className="flex justify-center flex-grow">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 w-48 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Navigation links */}
          <div className="hidden sm:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="/"
                className="text-gray-300 hover:bg-red-700 hover:text-red px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/Shop"
                className="text-gray-300 hover:bg-red-700 hover:text-red px-3 py-2 rounded-md text-sm font-medium"
              >
                Shop
              </a>
              <a
                href="/About"
                className="text-gray-300 hover:bg-red-700 hover:text-red px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
           
            </div>
          </div>

          {/* Language selection */}
          <div className="flex items-center">
            <select
              className="text-white bg-gray-800 border-none rounded-md px-3 py-2 mr-4 focus:outline-none"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
            {/* Account */}
            <div>
              <a
                href="/login"
                className="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </a>
              <span className="text-gray-300 mx-2">|</span>
              <a
                href="/logout"
                className="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
