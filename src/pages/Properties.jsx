import React, { useState } from 'react';
import Navbar from '../components/Header';
import Bestprop from '../components/Bestprop';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight, Heart, Share } from 'lucide-react';
import Mostview from '../components/Mostview';

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allProperties = [
    {
      title: 'Charming Suburban Homes',
      location: '4 A-3 Paschim Vihar, New Delhi',
      price: '₹600,000',
      category: 'House',
      beds: 4,
      baths: 3,
      size: '1500 sqft',
      description:'The building is a state-of-the-art, 12-story structure designed to balance functionality with aesthetic appeal. ',
    },
    {
      title: 'Spacious Family Houses',
      location: '4 A-3 Paschim Vihar, New Delhi',
      price: '₹1,200,000',
      category: 'House',
      beds: 4,
      baths: 3,
      size: '2500 sqft',
      description:'The building is a state-of-the-art, 12-story structure designed to balance functionality with aesthetic appeal.',
    },
    {
      title: 'Small Houses',
      location: '7 A-3 Paschim Vihar, New Delhi',
      price: '₹1,500,000',
      category: 'Small House',
      beds: 4,
      baths: 3,
      size: '2500 sqft',
      description:'The building is a state-of-the-art, 12-story structure designed to balance functionality with aesthetic appeal. ',
    },
    {
      title: 'Modern Townhouse',
      location: '4 A-3 Paschim Vihar, New Delhi',
      price: '₹650,000',
      category: 'Apartment',
      beds: 4,
      baths: 3,
      size: '1800 sqft',
      description:'The building is a state-of-the-art, 12-story ',
    },
    {
      title: 'Mountain Retreat',
      location: '2 A-3 Paschim Vihar, New Delhi',
      price: '₹1,200,000',
      category: 'Mansion',
      beds: 4,
      baths: 3,
      size: '2000 sqft',
      description:'The building is a state-of-the-art, 12-story structure designed to balance functionality with aesthetic appeal.',
    },
    {
      title: 'Eco-Friendly Home',
      location: '4 A-3 Paschim Vihar, New Delhi',
      price: '₹900,000',
      category: 'Mansion',
      beds: 4,
      baths: 3,
      size: '2000 sqft',
      description:'The building is a state-of-the-art, 12-story structure designed to balance functionality with aesthetic appeal.',
    },
  ];

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || property.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProperties.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + filteredProperties.length) % filteredProperties.length
    );
  };

  return (
    <div className="font-sans">
      
      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto my-8 max-sm:mt-0 bg-gray-200 rounded-3xl max-md:rounded-none overflow-hidden">
        <div className="flex items-center p-4 md:p-16">
          <div className="w-full md:w-1/2 bg-gray-300 p-8 rounded-2xl max-sm:rounded-lg ">
            <h2 className="text-3xl font-bold mb-4">{filteredProperties[currentIndex]?.title}</h2>
            <p className="text-gray-600 mb-2">{filteredProperties[currentIndex]?.location}</p>
            <p className="text-2xl font-bold mb-4">{filteredProperties[currentIndex]?.price}</p>
            <p className="text-gray-700 mb-6">{filteredProperties[currentIndex]?.description}</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300 flex items-center">
              View More <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
        
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={handlePrev}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={handleNext}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Search and Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex justify-between items-center max-md:flex-col'>
        <input
          type="text"
          placeholder="Search by title or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-2 mb-8 text-lg px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['All', 'House', 'Apartment', 'Small House', 'Mansion'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        </div>
        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-orange-500">{property.price}</p>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                      <Heart size={20} />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                      <Share size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Mostview />
      <Bestprop />
    </div>
  );
};

export default Properties;
