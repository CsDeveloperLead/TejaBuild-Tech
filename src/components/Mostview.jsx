import React, { useState } from "react";
import { MdOutlineBathtub } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Luxury Suite",
    location: "101, A-5 Paschim Vihar, New Delhi",
    price: "₹2,000,000",
    rooms: 4,
    baths: 3,
    area: "1500 sqft",
    type: "House",
  },
  {
    id: 2,
    title: "Front Villa",
    location: "231, A-3 Paschim Vihar, New Delhi",
    price: "₹1,500,000",
    rooms: 4,
    baths: 3,
    area: "1500 sqft",
    type: "House",
  },
];

const Mostview = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProperties =
    selectedType === "All"
      ? properties
      : properties.filter((property) => property.type === selectedType);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Most Viewed Property</h2>

      {/* Filter buttons */}
      <div className="mb-4 flex space-x-4">
        <button
          className={`px-4 py-2 rounded-full ${selectedType === "All" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setSelectedType("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full ${selectedType === "House" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setSelectedType("House")}
        >
          House
        </button>
        <button
          className={`px-4 py-2 rounded-full ${selectedType === "Apartment" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setSelectedType("Apartment")}
        >
          Apartment
        </button>
        <button
          className={`px-4 py-2 rounded-full ${selectedType === "Flats" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setSelectedType("Flats")}
        >
          Flats
        </button>
        <button
          className={`px-4 py-2 rounded-full ${selectedType === "Small House" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setSelectedType("Small House")}
        >
          Small House
        </button>
        <button
          className={`px-4 py-2 rounded-full ${selectedType === "Mansion" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setSelectedType("Mansion")}
        >
          Mansion
        </button>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

const PropertyCard = ({ property }) => {
  const { title, location, price, rooms, baths, area } = property;

  const cardStyle = {
    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8))",
  };

  return (
    <div className="relative h-80 p-8 rounded-lg shadow-lg overflow-hidden flex flex-col justify-end">
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10" style={cardStyle}></div>

      <div className="relative z-20 flex flex-col justify-end h-full">
        {/* Property Title and Location */}
        <div className="text-white mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{location}</p>
        </div>

        {/* Property Details */}
        <div className="flex justify-between items-center mt-4 text-white">
          <div className="flex space-x-2">
            <span><FaBed />{rooms} </span>
            <span><MdOutlineBathtub />{baths} </span>
            <span>{area}</span>
          </div>

          {/* View More Button */}
          <button
            className="bg-orange-500 text-white px-4 py-3 rounded-full flex items-center"
            style={{ backgroundColor: "#ff5722" }}
          >
            View More <span className="ml-2"><FaLongArrowAltRight /></span>
          </button>
        </div>

        {/* Property Price */}
        <p className="text-white mt-2 font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default Mostview;
