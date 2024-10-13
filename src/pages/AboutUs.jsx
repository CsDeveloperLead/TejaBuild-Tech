import React from 'react';
import Navbar from '../components/Header';
import Main from '../components/Main';
import { Calendar, Trophy } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 max-sm:pt-2">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20">
          {/* Left: Images */}
          <div className="relative w-[80%] lg:w-1/2 mb-12 lg:mb-0">
            <div className="bg-gray-300 rounded-2xl w-full h-[570px] lg:w-[500px]"></div>
            <div className="bg-gray-300 rounded-2xl w-full h-[520px] lg:w-[480px] absolute top-20 left-12 lg:top-32 lg:left-20"></div>
            <div className="bg-orange-500 text-white p-4 rounded-2xl absolute bottom-0 left-4 lg:bottom-4 lg:left-8 w-64">
              <p className="text-5xl font-bold mb-2">120+</p>
              <p className="text-lg">Happy Clients</p>
            </div>
          </div>

          {/* Right: Text Section */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-12 lg:mt-0">
            <span className="text-gray-600 uppercase">ABOUT US</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">We Are in This Business Since 15 Years</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Trophy className="text-orange-500 mr-3" size={24} />
                <span>20+ Winning Awards</span>
              </li>
              <li className="flex items-center">
                <Calendar className="text-orange-500 mr-3" size={24} />
                <span>15 Years Of Experience</span>
              </li>
            </ul>
            <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-100 rounded-lg py-12 px-4 mt-24 flex flex-wrap justify-around">
          {[
            { number: '386', label: 'House Design' },
            { number: '56', label: 'Our Partner' },
            { number: '78', label: 'House Package' },
            { number: '15Y', label: 'Years Of Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center mb-8 lg:mb-0">
              <div className="text-4xl font-bold text-orange-500">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Main />
    </div>
  );
};

export default AboutUs;
