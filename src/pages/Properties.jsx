import { useState } from "react";
// import Navbar from '../components/Header';
import Bestprop from "../components/Bestprop";
// import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight, Heart, Share } from "lucide-react";
import Mostview from "../components/Mostview";
import build1 from "../assets/1.webp";
import buildbg1 from "../assets/bg1.webp";
import build2 from "../assets/2.webp";
import buildbg2 from "../assets/bg2.webp";
import build3 from "../assets/3.webp";
import buildbg3 from "../assets/bg3.webp";
import build4 from "../assets/4.webp";
import buildbg4 from "../assets/bg4.webp";
import build5 from "../assets/5.webp";
import buildbg5 from "../assets/bg5.webp";
import build6 from "../assets/6.webp";
import buildbg6 from "../assets/bg6.webp";
import build7 from "../assets/7.webp";
import buildbg7 from "../assets/bg7.webp";
import build8 from "../assets/8.webp";
import buildbg8 from "../assets/bg8.webp";
import build9 from "../assets/9.webp";
import buildbg9 from "../assets/bg9.webp";
import build10 from "../assets/10.webp";
import buildbg10 from "../assets/bg10.webp";
import build11 from "../assets/11.webp";
import buildbg11 from "../assets/bg11.webp";
import { Link } from "react-router-dom";

import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allProperties = [
    {
      id: 1,
      link: "https://wa.link/lfxord",
      image: build1,
      bgimg: buildbg1,
      title: "Logi Industrial Hero Park",
      location: "Ghaziabad, Uttar Pradesh",
      area: "1500 sq ft",
      price: "₹25,000 per sq yard",
      category: "Industrial",
    },
    {
      id: 2,
      link: "https://wa.link/00nqfr",
      image: build2,
      bgimg: buildbg2,
      title: "Indo World Space Phase 1",
      location: "Ghaziabad, Uttar Pradesh",
      area: "1500 sq ft",
      price: "₹25,000 per sq yard",
      category: "Commercial",
    },
    {
      id: 3,
      link: "https://wa.link/16fa60",
      image: build3,
      bgimg: buildbg3,
      title: "Indo World Space Phase 2",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹25,000 per sq yard",
      category: "Commercial",
    },
    {
      id: 4,
      link: "https://wa.link/273olj",
      image: build4,
      bgimg: buildbg4,
      title: "Capital Logistic",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹25,000 per sq yard",
      category: "Industrial",
    },
    {
      id: 5,
      link: "https://wa.link/pdvvi4",
      image: build5,
      bgimg: buildbg5,
      title: "Fellcon Infratech",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹25,000 per sq yard",
      category: "Residential",
    },
    {
      id: 6,
      image: build6,
      bgimg: buildbg6,
      link: "https://wa.link/f1lrha",
      title: "Sai Industrial Park Phase 1",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹25,000 per sq yard",
      category: "Industrial",
    },
    {
      id: 7,
      link: "https://wa.link/mhemmw",
      image: build7,
      bgimg: buildbg7,
      title: "Sai Industrial Park Phase 2",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹25,000 per sq yard",
      category: "Industrial",
    },
    {
      id: 8,
      link: "https://wa.link/4ifxhb",
      image: build8,
      bgimg: buildbg8,
      title: "Mangalam Hero Park",
      location: "Haridwar, Uttarakhand",
      area: "2500 sq ft",
      price: "₹25,000 per sq meter",
      category: "Industrial",
    },
    {
      id: 9,
      link: "https://wa.link/ktonmv",
      image: build9,
      bgimg: buildbg9,
      title: "Sunrise Enclave",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹40,000 per sq yard",
      category: "Residential",
    },
    // {
    //   id: 10,
    //   link: "https://wa.link/x9f8kc",
    //   image: build10,
    //   bgimg: buildbg10,
    //   title: "OPUS Industrial Park",
    //   location: "Ghaziabad, Uttar Pradesh",
    //   area: "2500 sq ft",
    //   price: "₹1,5XX,XXX",
    //   category: "Industrial",
    // },
    {
      id: 11,
      link: "https://wa.link/x9f8kc",
      image: build11,
      bgimg: buildbg11,
      title: "MG Industrial Park",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹18,000 per sq yard",
      category: "Industrial",
    },
  ];

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || property.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProperties.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredProperties.length) % filteredProperties.length
    );
  };

  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#main" && mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
  
    <div className="font-sans">
      {/* Carousel Section */}
      <div
        className="relative mx-10 my-8 max-sm:mt-0 rounded-3xl max-md:rounded-none overflow-hidden"
        style={{
          backgroundImage: `url(${filteredProperties[currentIndex]?.bgimg})`,

          backgroundPosition: "center",
        }}
         id="main"
       ref={mainRef}
      >
        <div className="flex items-center p-1 md:p-8">
          <div className="w-full md:w-full bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl max-sm:rounded-lg ">
            <h2 className="text-3xl font-bold mb-4">
              {filteredProperties[currentIndex]?.title}
            </h2>
            <p className="text-gray-600 mb-2">
              {filteredProperties[currentIndex]?.location}
            </p>
            <p className="text-2xl font-bold mb-4">
              {filteredProperties[currentIndex]?.price}
            </p>
            <p className="text-gray-700 mb-6">
              {filteredProperties[currentIndex]?.description}
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300 flex items-center">
              Get A Quote<ChevronRight className="ml-2" />
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
      <div className="mx-10 ">
        <div className="flex justify-between items-center max-md:flex-col">
          <input
            type="text"
            placeholder="Search by title or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-2 mb-8 text-lg px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["All", "Commercial", "Residential", "Industrial"].map(
              (category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className=" w-full h-[250px] bg-gray-300 overflow-y-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-[150%]  object-cover   "
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-orange-500">
                    {property.price}
                  </p>
                  <div className="flex space-x-2">
                    {/* <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                      <Heart size={20} />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                      <Share size={20} />
                    </button> */}
                    <Link to={property.link} target="_blank">
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition duration-300">
                        Get A Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
         ) : (
          // Display "Not Found" message
          <div className="not-found-message">
            <p>No such properties found</p>
          </div>
        )}
      </div>
      <div className="px-10 my-10">
        <Mostview />
        {/* <Bestprop /> */}
      </div>
    </div>
  );
};

export default Properties;
