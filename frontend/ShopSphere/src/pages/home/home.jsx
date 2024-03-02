import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <header className="py-6">
        <h1 className="text-4xl font-bold text-center">Welcome to Our Store</h1>
        <p className="text-lg text-gray-600 text-center mt-2">Discover amazing deals on the latest products!</p>
      </header>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="product1.jpg" alt="Product 1" className="w-full h-48 object-cover object-center" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Product 1</h2>
            <p className="text-gray-600 mt-2">$19.99</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add to Cart</button>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="product2.jpg" alt="Product 2" className="w-full h-48 object-cover object-center" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Product 2</h2>
            <p className="text-gray-600 mt-2">$24.99</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add to Cart</button>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="product3.jpg" alt="Product 3" className="w-full h-48 object-cover object-center" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Product 3</h2>
            <p className="text-gray-600 mt-2">$29.99</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Featured Promotion */}
      <section className="py-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">Featured Promotion</h2>
        <p className="text-lg text-gray-600 mt-2">Limited time offer! Dont miss out.</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Shop Now</button>
      </section>
    </div>
  );
};

export default Home;
