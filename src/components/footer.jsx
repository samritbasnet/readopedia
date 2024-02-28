import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a3 3 0 100 6 3 3 0 000-6zm2.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
          </svg>
          <p className="text-white text-sm font-semibold">Samrit Favourite Books</p>
        </div>
        <div>
          <p className="text-gray-300 text-xs">Follow us on social media:</p>
          <div className="flex space-x-2">
            {/* Social media icons */}
            <a href="#" className="text-white hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.4v3.533a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.533M15 7s1-2 2-2c1.052 0 2 1 2 2v2h3V7s0-2-2-2h-2m-1 9.5h-4m-4 0H6m4 0c-.75 0-1.5-.75-1.5-2h-1c0 1.5-1 2.75-3 2.75s-3-1-3-2.75h-1c0 1.25-.75 2-1.5 2H2m2-10.5V10m0 0h4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-2 pt-2 text-center">
        <p className="text-gray-300 text-xs">© 2024 Readopedia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
