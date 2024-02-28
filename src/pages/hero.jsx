import React from 'react';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='relative overflow-hidden rounded-lg shadow-xl'>
        {/* Overlay */}
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold'>
              Immerse <span className='text-orange-500'>|</span> Engage <span className='text-orange-500'>|</span> Escape
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4'>
              Discover your next adventure
            </p>
          </div>
        </div>
        <img
          className='w-full h-auto object-cover max-h-[450px]' // Adjusted max-height for slightly smaller image
          src='https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?cs=srgb&dl=pexels-stanislav-kondratiev-2908984.jpg&fm=jpg'
          alt='Hero Image'
        />
      </div>
      <div className='text-center'> 
        <h1 className="  text-4xl font-bold text-brown-300 mt-8">Latest Addition</h1>
      </div>

      {/* Book Cards Container */}
      <div className="flex justify-between mt-8">
        {/* First Book Card */}
        <div className="w-full max-w-[400px] bg-black border border-white-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-300">
          <a href="#">
            <img className="w-full h-auto rounded-t-xl" src="https://marketplace.canva.com/EAD7WmQzMUQ/2/0/1003w/canva-moon-photo-thriller-mystery-book-cover-QE7uv7YSwDQ.jpg" alt="product image" />
          </a>
          <div className="px-5 pb-3">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-black-900 dark:text-black">Breaking the Oath</h5>
            </a>
            <div className="flex items-center mt-2.5 mb-3">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                ★★★★
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">4.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">$39</span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
          </div>
        </div>

        {/* Second Book Card */}
        <div className="w-full max-w-[400px] bg-black border border-white-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-300">
          <a href="#">
            <img className="w-full h-auto rounded-t-xl" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt="product image" />
          </a>
          <div className="px-5 pb-3">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-black-900 dark:text-black">Breaking the Oath</h5>
            </a>
            <div className="flex items-center mt-2.5 mb-3">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                ★★★
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">4.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">$59</span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
          </div>
        </div>

        {/* Third Book */}
        <div className="w-full max-w-[400px] bg-black border border-white-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-300">
          <a href="#">
            <img className="w-full h-auto rounded-t-xl" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt="product image" />
          </a>
          <div className="px-5 pb-3">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-black-900 dark:text-black">Breaking the Oath</h5>
            </a>
            <div className="flex items-center mt-2.5 mb-3">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                ★★★
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">4.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">$21</span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
