import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding } from 'react-icons/fa'; // Add React Icons

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-blue-600">
        Our Services
      </h2>
      <div className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 items-center justify-center">
        {/* Rent Service */}
        <Link to="/rent">
        <div className="flex flex-col items-center justify-center p-8 bg-gray-200 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 max-w-md w-full">
          <FaHome size={70} className="mb-6 text-blue-600" /> {/* Rent Icon */}
          <h3 className="text-xl font-semibold text-center mb-4 text-blue-600">Rent</h3>
          <p className="text-lg text-center mb-6">Explore available rental properties with ease and comfort.</p>
          <Link to="/rent" className="text-lg font-semibold text-blue-500 hover:underline">
            Learn More
          </Link>
        </div>
        </Link>

        {/* Buy/Lease Service */}
      <Link to="/buy-lease">
      <div className="flex flex-col items-center justify-center p-8 bg-gray-200 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 max-w-md w-full">
          <FaBuilding size={70} className="mb-6 text-blue-600" /> {/* Buy/Lease Icon */}
          <h3 className="text-xl font-semibold text-center mb-4 text-blue-600">Buy/Lease</h3>
          <p className="text-lg text-center mb-6">Explore available properties for buying or leasing with us.</p>
          <Link to="/buy-lease" className="text-lg font-semibold text-blue-500 hover:underline">
            Learn More
          </Link>
        </div>
      </Link>
      </div>
    </section>
  );
};

export default Services;
