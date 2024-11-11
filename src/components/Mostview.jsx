import React from "react";
import { MdOutlineBathtub } from "react-icons/md";
import { FaBed, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import build1 from "../assets/1.png";
import buildbg1 from "../assets/bg1.png";
import build2 from "../assets/2.png";
import buildbg2 from "../assets/bg2.png";

// Sample property data
const properties = [
  {
    id: 1,
    link: "https://wa.link/lfxord",
    image: build1,
    bgimg: buildbg1,
    title: "Logi Industrial Hero Park",
    location: "Ghaziabad, Uttar Pradesh",
    area: "1500 sq ft",
    price: "₹600,000",
    category: "Industrial",
    rooms: 3, // Added rooms data for demo
    baths: 2, // Added baths data for demo
  },
  {
    id: 2,
    link: "https://wa.link/00nqfr",
    image: build2,
    bgimg: buildbg2,
    title: "Indo World Space Phase 1",
    location: "Ghaziabad, Uttar Pradesh",
    area: "1500 sq ft",
    price: "₹600,000",
    category: "Commercial",
    rooms: 4, // Added rooms data for demo
    baths: 3, // Added baths data for demo
  },
];

const Mostview = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Most Viewed Property</h2>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

const PropertyCard = ({ property }) => {
  const { title, location, price, rooms,link, baths, area, bgimg } = property;

  return (
    <div
      className={`relative h-80 rounded-lg shadow-lg overflow-hidden flex flex-col  justify-end bg-cover bg-center`}
      style={{ backgroundImage: `url('${bgimg}')`, backgroundPosition: "center" , backgroundSize: "cover"}}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black  opacity-40"></div>

      <div className="relative z-20 flex flex-col justify-end h-full bg-opacity-90 p-8 backdrop-blur-sm">
        {/* Property Title and Location */}
        <div className="text-white mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{location}</p>
        </div>

        {/* Property Details */}
        <div className="flex justify-between items-center mt-4 text-white">
          {/* <div className="flex space-x-2">
            <span>
              <FaBed />
              {rooms ? rooms : 0} 
            </span>
            <span>
              <MdOutlineBathtub />
              {baths ? baths : 0} 
            </span>
            <span>{area}</span>
          </div> */}

          <Link to={link} target='_blank' >
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition duration-300">
                Get A Quote
              </button>
              </Link>
        </div>

        {/* Property Price */}
        {/* <p className="text-white mt-2 font-semibold">{price}</p> */}
      </div>
    </div>
  );
};

export default Mostview;
