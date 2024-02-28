
import React from 'react';
const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            Immerse <span className='text-orange-500'></span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            Engage <span className='text-orange-500'></span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <span className='text-orange-500'>Escape</span> Repeat

          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src='https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?cs=srgb&dl=pexels-stanislav-kondratiev-2908984.jpg&fm=jpg'
          alt='/'
        />
      </div>
      <div>
      <h1 className="text-4xl font-bold text-gray-900 mt-8">Popular Book this week</h1>

      </div>
    </div>
  );
};
export default Hero;