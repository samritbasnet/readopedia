// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-6 fixed bottom-0 w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a3 3 0 100 6 3 3 0 000-6zm2.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
          </svg>
          {/* Add your text here */}
          <p className="text-white">Samrit Favourites Books</p>
        </div>
        <p className="text-white">© 2024 Readopedia</p>
      </div>
    </footer>
  );
}

export default Footer;
