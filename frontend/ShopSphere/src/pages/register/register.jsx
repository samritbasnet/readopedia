import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-600 flex justify-center items-center">
      <div className="max-w-screen-lg w-full md:flex md:justify-center md:items-center md:mx-auto">
        {/* Card layout for registration form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Register</h2>
          <form className="w-full">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your mobile number"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-red-600 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
