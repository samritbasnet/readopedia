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
      <div>
        <h1 className="  text-4xl font-bold text-yellow-900 mt-8">Popular Book this week</h1>
      </div>
    </div>
  );
};

export default Hero;
