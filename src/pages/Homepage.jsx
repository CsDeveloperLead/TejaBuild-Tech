// import React, { useState } from 'react';
import KK from "../components/KK";
// import Navbar from '../components/Header';
import { TiTickOutline } from "react-icons/ti";
// import Footer from '../components/Footer';
import { Link } from "react-router-dom";

import img1 from "../assets/man1.webp";
import img2 from "../assets/man2.webp";
import img3 from "../assets/man3.webp";
import img4 from "../assets/women.webp";
import img5 from "../assets/man4.webp";
import img6 from "../assets/women1.webp";

import build1 from "../assets/1.webp";
import build2 from "../assets/2.webp";
import build3 from "../assets/3.webp";
import build4 from "../assets/4.webp";
import build5 from "../assets/5.webp";
import build6 from "../assets/6.webp";
import build7 from "../assets/7.webp";
import build8 from "../assets/8.webp";
import build9 from "../assets/9.webp";
// import build10 from "../assets/10.png";
import build11 from "../assets/11.webp";

import prop1 from "../assets/p1.webp";
import prop2 from "../assets/p2.webp";
import prop3 from "../assets/p3.webp";
import prop4 from "../assets/p4.webp";

import img11 from "../assets/deepak.webp";
import img12 from "../assets/rahul.webp";
import house from "../assets/house1.webp";
import { useEffect, useRef, useState } from "react";
import { RollingNumber } from "../utils/RollingNumber";
import { UpwardsCarousel } from "../utils/UpwardsCarousal";

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // How much is scrolled
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Total scrollable area
      const progress = (scrollTop / windowHeight) * 100; // Scroll progress percentage
      setScrollProgress(progress);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-10 sticky top-0 z-50 bg-white">
      <div className="w-full h-4 rounded-3xl bg-[#D9D9D9E8] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#EF6D11] to-[#FF8C42] rounded-3xl"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
}

const HomePage = () => {
  // const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 6000); // 5 seconds interval

    return () => clearInterval(interval);
  }, []);

  const properties = [
    {
      id: 2,
      link: "https://wa.link/00nqfr",
      image: build2,
      title: "Indo World Space Phase 1",
      location: "Ghaziabad, Uttar Pradesh",
      area: "1500 sq ft",
      price: "₹25,000 per sq yard",
    },
    {
      id: 3,
      link: "https://wa.link/16fa60",
      image: build3,
      title: "Indo World Space Phase 2",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹25,000 per sq yard",
    },
    {
      id: 4,
      link: "https://wa.link/273olj",
      image: build4,
      title: "Capital Logistic",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹25,000 per sq yard",
    },
    {
      id: 5,
      link: "https://wa.link/pdvvi4",
      image: build5,
      title: "Fellcon Infratech",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹25,000 per sq yard",
    },
    {
      id: 6,
      image: build6,
      link: "https://wa.link/f1lrha",
      title: "Sai Industrial Park Phase 1",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹25,000 per sq yard",
    },
    {
      id: 7,
      link: "https://wa.link/mhemmw",
      image: build7,
      title: "Sai Industrial Park Phase 2",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹25,000 per sq yard",
    },
    {
      id: 8,
      link: "https://wa.link/4ifxhb",
      image: build8,
      title: "Mangalam Hero Park",
      location: "Haridwar, Uttarakhand",
      area: "2500 sq ft",
      price: "₹25,000 per sq meter",
    },
    {
      id: 9,
      link: "https://wa.link/ktonmv",
      image: build9,
      title: "Sunrise Enclave",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹40,000 per sq yard",
    },
    // {
    //   id: 10,
    //   link: "https://wa.link/x9f8kc",
    //   image: build10,
    //   title: "OPUS Industrial Park",
    //   location: "Ghaziabad, Uttar Pradesh",
    //   area: "2500 sq ft",
    //   price: "₹1,500,000",
    // },
    {
      id: 11,
      link: "https://wa.link/uesj24",
      image: build11,
      title: "MG Industrial Park",
      location: "Ghaziabad, Uttar Pradesh",
      area: "2500 sq ft",
      price: "₹18,000 per sq yard",
    },
    {
      id: 1,
      link: "https://wa.link/lfxord",
      image: build1,
      title: "Logi Industrial Hero Park",
      location: "Ghaziabad, Uttar Pradesh",
      area: "1500 sq ft",
      price: "₹22,500 per sq yard",
    }
    // Add more property objects here as needed
  ];
  const data = [
    {
      id: 1,
      image: img1,
      name: "Khush Raj",
      role: "Homeowner",
      description:
        "Buying an industrial plot from Teja Build Tech was a great investment! The space is perfect for our needs, and the process was smooth from start to finish.",
    },
    {
      id: 2,
      image: img2,
      name: "Jatin Sehgal",
      role: "Tenant",
      description:
        "Our new industrial property from Teja Build Tech is exactly what we needed. It’s already proving to be a valuable asset for our business!",
    },
    {
      id: 3,
      image: img3,
      name: "Bhavesh Kumar",
      role: "Property Manager",
      description:
        "Teja Build Tech delivered a fantastic industrial space that fits our operations perfectly. A seamless process and a great investment!",
    },
    {
      id: 4,
      image: img4,
      name: "Riya Jain",
      role: "Real Estate Agent",
      description:
        "Thrilled with our industrial plot from Teja Build Tech! Excellent location and layout—it’s been a game-changer for our business.",
    },
    {
      id: 5,
      image: img5,
      name: "Kanishk Vatsal",
      role: "Investor",
      description:
        "Investing in an industrial space through Teja Build Tech has transformed our business. The property layout is efficient. A great decision for any business!",
    },
    {
      id: 6,
      image: img6,
      name: "Samridhi Singh",
      role: "Architect",
      description:
        "Our industrial plot from Teja Build Tech has been an invaluable asset. The space is well-planned, accessible, and already boosting our productivity. Couldn’t be happier with the choice!",
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const animateScroll = () => {
      if (scrollContainer) {
        const totalScrollWidth = scrollContainer.scrollWidth;
        const currentScrollPosition = scrollContainer.scrollLeft;
        const containerWidth = scrollContainer.clientWidth;

        if (currentScrollPosition >= totalScrollWidth - containerWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 340;
        }
      }
    };

    // Set the interval to move scroll every 2400ms
    const interval = setInterval(animateScroll, 2400);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);


  const carousal = [
    "Industrial Plots",
    "Villas plots",
    "Resedential plots",
    "high rise Flats"
  ]

  const carousal2 = [
    "1BHK",
    "2BHK",
    "3BHK",
    "& Many More"
  ]

  return (
    <div className="font-sans text-gray-800 max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="disable-scrollbar w-auto h-auto flex overflow-x-hidden">
        <div className="min-w-full h-auto flex scroll-smooth duration-700 ease-in-out transition-all"
          ref={sliderRef} style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${3 * 100}%`,
          }}>
          <section className="text-center min-w-full py-8 sm:py-14 px-4 sm:px-6 lg:px-8 bg-neutral-100 overflow-hidden rounded-2xl my-6 max-sm:mt-0 flex flex-col md:flex-row md:justify-between md:relative">
            <div className="w-full md:w-1/2">
              <div className="disable-scrollbar w-full h-auto flex overflow-hidden scroll-smooth">
                <h1 className="min-w-full text-2xl text-center md:text-left  sm:text-5xl lg:text-6xl font-bold mb-6 ">
                  Find Your Dream Property<br></br> with Teja BuildTech
                </h1>
              </div>
              <div className="sm:hidden">
                <img src={house} alt="" className="w-full h-full md:h-[550px]" />
              </div>
              <p className="text-lg mt-5 sm:mt-0 sm:text-xl text-gray-600 mb-8 max-w-3xl  text-center md:text-left">
                Explore an exclusive selection of prime real estate tailored to match
                your lifestyle and preferences. Whether you&apos;re seeking a family
                home, a luxurious apartment, or a smart investment in terms of
                Residential plots or Specially designed Industrial plots.
              </p>
              <div className="flex flex-col sm:flex-row justify-left gap-4 mb-8">
                <Link
                  to={"/properties"}
                  className="block relative group rounded-full p-1 w-[206px] mx-auto sm:mx-0 sm:w-auto bg-gradient-to-r from-white to-orange-600 overflow-hidden"
                >
                  {/* Running border with pseudo-element */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-600 animate-gradient-flow"></div>

                  {/* Button content */}
                  <button className="relative z-10 bg-orange-600 text-white px-8 py-4 sm:py-3 rounded-full flex items-center font-semibold text-md">
                    Explore Properties
                  </button>
                </Link>
                <Link
                  to={"https://wa.link/0po3q9"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-gray-800 py-3 px-8 rounded-full text-lg border-2 border-gray-800 hover:bg-gray-100 transition duration-300">
                    Get In Touch
                  </button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row justify-left gap-6 mt-8">
                <div className="flex items-center text-lg">
                  <TiTickOutline className="text-green-500 mr-2" /> Professional Team
                </div>
                <div className="flex items-center text-lg">
                  <TiTickOutline className="text-green-500 mr-2" /> Premium Product
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-full md:w-[45%] md:absolute md:-top-8 md:right-0">
              <img src={house} alt="" className="w-full h-full md:h-[550px]" />
            </div>

          </section>
          <section className="text-center min-w-full py-8 sm:py-14 px-4 sm:px-6 lg:px-8 bg-neutral-100 overflow-hidden rounded-2xl my-6 max-sm:mt-0 flex flex-col md:flex-row md:justify-between md:relative">
            <div className="w-full md:w-1/2">
              <div className="disable-scrollbar w-full h-auto flex overflow-hidden scroll-smooth">
                <h1 className="min-w-full text-4xl text-center md:text-left sm:text-5xl lg:text-6xl font-bold mb-6 ">
                  Are You Looking <br /> For the Best <br />
                  <div className="flex flex-col overflow-visible">
                    {(currentIndex === 1 || currentIndex === 2) && <UpwardsCarousel items={carousal} />}
                  </div>
                </h1>
                <h1 className="min-w-full text-2xl text-center md:text-left sm:text-5xl lg:text-6xl font-bold mb-6 ">
                  Are You Looking <br /> For the Best <br />
                  <div className="flex flex-col overflow-visible">
                    Hello2
                  </div>
                </h1>
              </div>
              <div className="sm:hidden">
                <img src={house} alt="" className="w-full h-full md:h-[550px]" />
              </div>
              <p className="text-lg mt-5 sm:mt-0 sm:text-xl text-gray-600 mb-8 max-w-3xl  text-center md:text-left">
                Our premium industrial plots offer excellent connectivity, essential infrastructure, and a business-friendly environment to help you scale your operations seamlessly. Invest in the right location today for long-term success!
              </p>
              <div className="flex flex-col sm:flex-row justify-left gap-4 mb-8">
                <Link
                  to={"/contact-us"}
                  className="block relative group rounded-full p-1 w-[153px] mx-auto sm:mx-0 sm:w-auto bg-gradient-to-r from-white to-orange-600 overflow-hidden"
                >
                  {/* Running border with pseudo-element */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-600 animate-gradient-flow"></div>

                  {/* Button content */}
                  <button className="relative z-10 bg-orange-600 text-white px-8 py-4 sm:py-3 rounded-full flex items-center font-semibold text-md">
                    Book a Call
                  </button>
                </Link>
                <Link
                  to={"https://wa.link/0po3q9"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-gray-800 py-3 px-8 rounded-full text-lg border-2 border-gray-800 hover:bg-gray-100 transition duration-300">
                    Get It Now
                  </button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row justify-left gap-6 mt-8">
                <div className="flex items-center text-lg">
                  <TiTickOutline className="text-green-500 mr-2" /> With Best Price
                </div>
                <div className="flex items-center text-lg">
                  <TiTickOutline className="text-green-500 mr-2" /> With Best Location
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-full md:w-[45%] md:absolute md:-top-8 md:right-0">
              <img src={house} alt="" className="w-full h-full md:h-[550px]" />
            </div>

          </section>
          <section className="text-center min-w-full py-8 sm:py-14 px-4 sm:px-6 lg:px-8 bg-neutral-100 overflow-hidden rounded-2xl my-6 max-sm:mt-0 flex flex-col md:flex-row md:justify-between md:relative">
            <div className="w-full md:w-1/2">
              <div className="disable-scrollbar w-full h-auto flex overflow-hidden scroll-smooth">
                <h1 className="min-w-full text-4xl text-center md:text-left sm:text-5xl lg:text-6xl font-bold mb-6 ">
                  Are You Looking For <br /> high rise Flats <br />
                  <div className="flex flex-col overflow-visible mt-2">
                    {(currentIndex === 2 || currentIndex === 0) && <UpwardsCarousel items={carousal2} />}
                  </div>
                </h1>
                <h1 className="min-w-full text-2xl text-center md:text-left sm:text-5xl lg:text-6xl font-bold mb-6 ">
                  Are You Looking <br /> For the Best <br />
                  <div className="flex flex-col overflow-visible">
                    Hello
                  </div>
                </h1>
              </div>
              <div className="sm:hidden">
                <img src={house} alt="" className="w-full h-full md:h-[550px]" />
              </div>
              <p className="text-lg mt-5 sm:mt-0 sm:text-xl text-gray-600 mb-8 max-w-3xl  text-center md:text-left">
                Discover premium 1BHK, 2BHK, 3BHK, and more, designed for modern living. Experience unmatched comfort, stunning views, and top-notch amenities in well-connected locations. Find your dream home in the sky today!
              </p>
              <div className="flex flex-col sm:flex-row justify-left gap-4 mb-8">
                <Link
                  to={"https://kd-sure-construction.vercel.app/"}
                  target="_blank"
                  className="block relative group rounded-full p-1 w-[169px] mx-auto sm:mx-0 sm:w-auto bg-gradient-to-r from-white to-orange-600 overflow-hidden"
                >
                  {/* Running border with pseudo-element */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-600 animate-gradient-flow"></div>

                  {/* Button content */}
                  <button className="relative z-10 bg-orange-600 text-white px-8 py-4 sm:py-3 rounded-full flex items-center font-semibold text-md">
                    Explore More
                  </button>
                </Link>
                <Link
                  to={"https://kd-sure-construction.vercel.app/contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-gray-800 py-3 px-8 rounded-full text-lg border-2 border-gray-800 hover:bg-gray-100 transition duration-300">
                    Get In Touch
                  </button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row justify-left gap-6 mt-8">
                <div className="flex items-center text-lg">
                  <TiTickOutline className="text-green-500 mr-2" /> Spacious Flats
                </div>
                <div className="flex items-center text-lg">
                  <TiTickOutline className="text-green-500 mr-2" /> Luxurious Residence
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-full md:w-[45%] md:absolute md:-top-8 md:right-0">
              <img src={house} alt="" className="w-full h-full md:h-[550px]" />
            </div>

          </section>
        </div>
      </div>

      {/* Stats Section */}
      <ScrollProgressBar />

      <section className="flex flex-col md:flex-row justify-around py-8 bg-white mx-4 sm:mx-0 my-10">
        {["122K+", "280+", "120+"].map((number, index) => (
          <div key={index} className="flex gap-4 items-center mb-8 md:mb-0">
            <h2 className="font-bold"><RollingNumber targetNumber={parseInt(number, 10)} duration={1000} stepTime={50} /></h2>
            <p className="text-gray-600 mt-2 text-base text-center max-w-[180px]">
              {index === 0 && "People Believe In Our Service"}
              {index === 1 && "Property And House Ready For Occupancy"}
              {index === 2 && "Partners Who Have Worked With Us"}
            </p>
          </div>
        ))}
      </section>

      {/* Featured Properties Section */}
      <section className="bg-neutral-100 p-8 rounded-lg sm:mx-0 my-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <p className="text-orange-500 text-sm font-bold mb-2">
              02 | Featured
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Featured Properties
            </h2>
          </div>
          <Link
            to={"/properties"}
            className="hidden md:block relative group rounded-full p-1 bg-gradient-to-r from-white to-orange-600 overflow-hidden"
          >
            {/* Running border with pseudo-element */}
            <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-600 animate-gradient-flow"></div>

            {/* Button content */}
            <button className="relative z-10 bg-orange-600 sm:mt-0 text-white px-4 py-[6px] rounded-full flex items-center font-semibold text-md sm:py-3 sm:px-8">
              View More
            </button>
          </Link>
        </div>

        {/* Wrapping container for the animated cards */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="hidden md:flex md:space-x-8 md:overflow-x-scroll md:scroll-smooth pb-8"
            style={{
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For Internet Explorer and Edge
            }}
          >
            {[...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties].map((property, index) => (
              <div
                key={index} // Unique key needed even for duplicate entries
                className="bg-white cursor-pointer rounded-lg overflow-y-hidden shadow-md transition duration-300 hover:shadow-xl min-w-[300px]"
              >
                <div className=" w-full h-48 bg-gray-300 overflow-y-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-[130%]  object-cover   "
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="font-bold text-sm w-[140px] text-orange-500">{property.price}</div>
                    </div>
                    <Link
                      to={property.link}
                      className="relative group rounded-full p-1  min-w-[118px] bg-gradient-to-r from-white to-orange-600 overflow-hidden"
                    >
                      {/* Running border with pseudo-element */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-600 animate-gradient-flow"></div>

                      {/* Button content */}
                      <button className="relative z-10 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                        Get A Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:hidden"
            style={{
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For Internet Explorer and Edge
            }}
          >
            {[...properties].map((property, index) => (
              <div
                key={index} // Unique key needed even for duplicate entries
                className="bg-white cursor-pointer rounded-lg w-full shadow-md overflow-hidden"
              >
                <div className=" w-full h-48 bg-gray-300 overflow-y-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-[130%]  object-cover   "
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-lg mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex space-x-2">
                      <div className="font-bold text-sm w-[140px]">{property.price}</div>
                    </div>
                    <Link
                      to={property.link}
                      className="relative group rounded-full p-1 w-[118px] bg-gradient-to-r from-white to-orange-600 overflow-hidden"
                    >
                      {/* Running border with pseudo-element */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-600 animate-gradient-flow"></div>

                      {/* Button content */}
                      <button className="relative z-10 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                        Get A Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            to={"/properties"}
            className="sm:hidden mx-auto w-[119px] flex justify-center mt-7 items-center relative group rounded-full p-1  bg-gradient-to-r from-white to-orange-600 overflow-hidden"
          >
            {/* Running border with pseudo-element */}
            <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-600 animate-gradient-flow"></div>

            {/* Button content */}
            <button className="relative z-10 bg-orange-600 text-white px-4 py-[6px] rounded-full flex items-center font-semibold text-md">
              View More
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-2 md:px-10 bg-white">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 flex gap-4">
            <div className="w-1/2 h-[200px] md:h-[400px] bg-gray-300 rounded-2xl">
              <img
                src={img11}
                alt="Deepak"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-1/2 h-[200px] md:h-[400px] bg-gray-300 rounded-2xl">
              <img
                src={img12}
                alt="Rahul"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-orange-500 text-sm font-bold text-center md:text-start uppercase mb-2">
              03 | About Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-center md:text-start mb-6">
              About Teja Builders
            </h2>
            <p className="text-gray-600 text-lg text-center md:text-start leading-relaxed">
              Welcome to Teja Builders, where sophistication harmonizes with
              coziness in the heart of the bustling metropolis. With a
              dedication to quality, we endeavor to offer our customers
              exceptional service and stunning residences that go beyond
              expectations. Our goal is to transform your ideal living space
              into a tangible vision, guaranteeing that every aspect is
              meticulously designed. Rely on Teja Builders for a smooth,
              hassle-free property journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Comprehensive Real Estate Services Tailored to You
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Explore a curated selection of luxury homes and high-end real estate
            designed to suit your preferences and needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Property Sales */}
          <div className="flex flex-col items-center">
            <div className="w-60 h-80 bg-gray-200 rounded-lg mb-4 overflow-hidden transform transition-transform duration-300 hover:scale-110 touch:scale-125">
              <img
                src={prop1}
                alt="Property Sales"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Industrial Sales
            </h3>
            <p className="text-center text-gray-600">
              Whether you&apos;re starting a new business or expanding your
              current.
            </p>
          </div>

          {/* Rental Management */}
          <div className="flex flex-col items-center">
            <div className="w-60 h-80 bg-gray-200 rounded-lg mb-4 overflow-hidden transform transition-transform duration-300 hover:scale-110 touch:scale-125">
              <img
                src={prop2}
                alt="Rental Management"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Residential Management
            </h3>
            <p className="text-center text-gray-600">
              Let us take care of your Residential property with our
              professional management services.
            </p>
          </div>

          {/* Investment Consulting */}
          <div className="flex flex-col items-center">
            <div className="w-60 h-80 bg-gray-200 rounded-lg mb-4 overflow-hidden transform transition-transform duration-300 hover:scale-110 touch:scale-125">
              <img
                src={prop3}
                alt="Investment Consulting"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Investment Consulting
            </h3>
            <p className="text-center text-gray-600">
              Navigating the world of real estate investments can be complex.
            </p>
          </div>

          {/* Home Staging Marketing */}
          <div className="flex flex-col items-center">
            <div className="w-60 h-80 bg-gray-200 rounded-lg mb-4 overflow-hidden transform transition-transform duration-300 hover:scale-110 touch:scale-125">
              <img
                src={prop4}
                alt="Home Staging Marketing"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Home Staging Marketing
            </h3>
            <p className="text-center text-gray-600">
              First impressions matter. Our home staging and marketing services.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <KK />

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 mt-16 rounded-lg mx-0 sm:mx-0 px-4 sm:px-8">
        <p className="text-orange-500 text-sm font-bold mb-2">
          05 | Testimonials
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <h2 className="text-4xl font-bold mb-6 lg:w-1/2">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 lg:w-1/2" style={{ fontSize: "16.57px" }}>
            Hear from our satisfied clients who have found their dream homes
            with Teja Builders. Their experiences reflect our unwavering
            commitment to excellence and our dedication to ensuring every
            client&apos;s satisfaction. From the initial consultation to the
            final closing, we strive to make the home-buying process seamless
            and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div key={item.id} className="bg-gray-200 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover object-center rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-gray-600 italic">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-16 bg-white mt-8 rounded-lg mx-2 md:mx-10 mb-8 sm:mx-0 ">
        <p className="text-orange-500 text-sm font-bold mb-2">
          06 | Discover Your Dream Property
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 lg:w-1/3">
            Ready to Find Your New Industrial Space?
          </h2>
          <p className="text-gray-600 lg:w-1/2">
            Are you ready to find the perfect place to call your industry ? At Teja Builders, we offer a diverse range of industrial plots designed to meet your every need. From modern downtown commercial to spacious industrial plots and stunning industrial plot , your dream space awaits.
          </p>
        </div>
      </section>
    </div >
  );
};

export default HomePage;
