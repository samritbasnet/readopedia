import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-600 flex justify-center items-center">
      <div className="max-w-screen-lg md:flex md:justify-center md:items-center md:mx-auto">
        {/* Image on the right */}
        <div className="md:w-1/2 md:hidden">
          <img
            src="https://www.stuff.tv/wp-content/uploads/sites/2/2023/12/Best-handheld-consoles-list-lead.jpg?w=1080"
            alt="login-image"
            className="object-cover object-center w-full h-full rounded-md"
          />
        </div>

        {/* Card layout for login form on the left */}
        <div className="md:w-1/2 md:max-w-md md:bg-white md:p-8 md:rounded-lg md:shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
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
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 leading-tight"
              />
              <label htmlFor="rememberMe" className="text-gray-700 text-sm font-bold">Remember me</label>
            </div>
            <div className="flex items-center justify-between mb-4">
              <a href="#" className="text-gray-700 text-sm">Forgot password?</a>
              <button
                type="submit"
                className="bg-gray-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-red-600"
              >
                Login
              </button>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-2 text-gray-700 text-sm font-bold">Or</span>
              <button
                type="button"
                className="bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-blue-800"
              >
                Sign in with Google
              </button>
            </div>
          </form>
        </div>

        {/* Image on the right for medium screens and above */}
        <div className="hidden md:w-1/2 md:block">
          <img
            src="https://www.stuff.tv/wp-content/uploads/sites/2/2023/12/Best-handheld-consoles-list-lead.jpg?w=1080"
            alt="login-image"
            className="object-cover object-center w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
