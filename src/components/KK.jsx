import React from 'react';
import { Bed, Bath, ArrowRight } from 'lucide-react';

const KK = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-orange-500 text-sm font-semibold mb-2">04 | Projects</p>
          <h2 className="text-3xl font-bold mb-4">Some of our Projects</h2>
          <p className="text-gray-600">
            Explore a curated selection of luxury homes and high-end real estate designed to suit your preferences and needs.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-gray-300 h-64 rounded-lg relative mb-4">
            {/* Price Tag */}
            <div className="absolute bottom-4 left-4 right-4 bg-black text-white p-4 rounded-lg">
              <div className="text-xl font-bold mb-1">₹10,800,000</div>
              <div className="text-sm text-gray-300 mb-2">Noida Sun City, Miami Beach, FL</div>
              
              <div className="flex justify-between text-xs">
                <span className="flex items-center"><Bed size={16} className="mr-1" /> 6 bedrooms</span>
                <span className="flex items-center"><Bath size={16} className="mr-1" /> 7 bathrooms</span>
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 mt-2 rounded-full text-sm w-full">
                Book Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
          </div>

          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full flex items-center justify-center w-full">
            Explore More Properties <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KK;