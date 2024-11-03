// import React, { useState } from 'react';
import KK from '../components/KK';
// import Navbar from '../components/Header';
import { TiTickOutline } from "react-icons/ti";
// import Footer from '../components/Footer';
import { Link } from 'react-router-dom';



import img1 from '../assets/man1.jpg';
import img2 from '../assets/man2.jpg';
import img3 from '../assets/man3.jpg';
import img4 from '../assets/women.jpg';
import img5 from '../assets/man4.jpg';
import img6 from '../assets/women1.jpg';

import build1 from '../assets/1.png';
import build2 from '../assets/2.png';
import build3 from '../assets/3.png';
import build4 from '../assets/4.png';
import build5 from '../assets/5.png';
import build6 from '../assets/6.png';
import build7 from '../assets/7.png';
import build8 from '../assets/8.png';
import build9 from '../assets/9.png';
import build10 from '../assets/10.png';
import build11 from '../assets/11.png';


import prop1 from '../assets/p1.png';
import prop2 from '../assets/p2.png';
import prop3 from '../assets/p3.png';
import prop4 from '../assets/p4.png';

const HomePage = () => {
  // const [hovered, setHovered] = useState(false);
 
  const properties = [
    {
      id: 1,
      link: "https://wa.link/lfxord",
      image: build1,
      title: 'Logi Industrial Hero Park',
      location: 'Haridwar, Uttarakhand',
      area: '1500 sq ft',
      price: '₹600,000',
    },
    {
      id: 2,
      link: "https://wa.link/00nqfr",
      image: build2,
      title: 'Indo World Space Phase 1',
      location: 'Ghaziabad, Uttar Pradesh',
      area: '1500 sq ft',
      price: '₹600,000',
    },
    {
      id: 3,
      link: "https://wa.link/16fa60",
      image: build3,
      title: 'Indo World Space Phase 2',
      location: 'Ghaziabad, Uttar Pradesh',
      area: '2500 sq ft',
      price: '₹1,200,000',
    },
    {
      id: 4,
      link: "https://wa.link/273olj",
      image: build4,
      title: 'Capital Logistic',
      location: 'Ghaziabad, Uttar Pradesh',
      area: '2500 sq ft',
      price: '₹1,500,000',
    },
    {
      id: 5,
      link: "https://wa.link/pdvvi4",
      image: build5,
      title: 'Fellcon Infratech',
      location: 'Ghaziabad, Uttar Pradesh',
      area: '2500 sq ft',
      price: '₹1,500,000',
    },
    {
      id: 6,
      image: build6,
      link: "https://wa.link/f1lrha",
      title: 'Sai Industrial Park Phase 1',
      location: 'Ghaziabad, Uttar Pradesh',
      area: '2500 sq ft',
      price: '₹1,500,000',
    },
    {
      id: 7,
      link: "https://wa.link/mhemmw",
      image: build7,
      title: 'Sai Industrial Park Phase 2',
      location: 'Ghaziabad, Uttar Pradesh',
      area: '2500 sq ft',
      price: '₹1,500,000',
    },
    {
      id: 8,
      link: "https://wa.link/4ifxhb",
      image: build8,
      title: 'Mangalam Hero Park',
      location: 'Haridwar, Uttarakhand',
      area: '2500 sq ft',
      price: '₹1,500,000',
    },
    {
      id: 9,
      link: "https://wa.link/ktonmv",
      image: build9,
      title: 'Sunrise Enclave',
      location: 'Ghaziabad, Uttar Pradesh',
      area: '2500 sq ft',
      price: '₹1,500,000',
    },
    {
      id: 10,
      link: "https://wa.link/x9f8kc",
      image: build10,
      title: 'OPUS Industrial Park',
      location: 'Ghaziabad, Uttar Pradesh',
      area: '2500 sq ft',
      price: '₹1,500,000',
    },
    {
      id: 11,
      link: "https://wa.link/uesj24",
      image: build11,
      title: 'MG Industrial Park',
      location: 'Ghaziabad, Uttar Pradesh',
      area: '2500 sq ft',
      price: '₹1,500,000',
    },
    // Add more property objects here as needed
  ];
  const data = [
    {
      id: 1,
      image : img1,
      name: "Khush Raj",
      role: "Homeowner",
      description: "Buying an industrial plot from Teja Build Tech was a great investment! The space is perfect for our needs, and the process was smooth from start to finish.",
    },
    {
      id: 2,
      image : img2,
      name: "Jatin Sehgal",
      role: "Tenant",
      description: "Our new industrial property from Teja Build Tech is exactly what we needed. It’s already proving to be a valuable asset for our business!",
    },
    {
      id: 3,
      image : img3,
      name: "Bhavesh Kumar",
      role: "Property Manager",
      description: "Teja Build Tech delivered a fantastic industrial space that fits our operations perfectly. A seamless process and a great investment!",
    },
    {
      id: 4,
      image : img4,
      name: "Riya Jain",
      role: "Real Estate Agent",
      description: "Thrilled with our industrial plot from Teja Build Tech! Excellent location and layout—it’s been a game-changer for our business.",
    },
    {
      id: 5,
      image : img5,
      name: "Kanishk Vatsal",
      role: "Investor",
      description: "Investing in an industrial space through Teja Build Tech has transformed our business. The property layout is efficient. A great decision for any business!",
    },
    {
      id: 6,
      image : img6,
      name: "Samridhi Singh",
      role: "Architect",
      description: "Our industrial plot from Teja Build Tech has been an invaluable asset. The space is well-planned, accessible, and already boosting our productivity. Couldn’t be happier with the choice!",
    },
  ];
  
 
  // const copyToClipboard = (link) => {
  //   navigator.clipboard.writeText(link)
  //     .then(() => {
  //       alert("Link copied to clipboard!");
  //     })
  //     .catch((err) => {
  //       console.error("Failed to copy: ", err);
  //     });
  // };

  
  return (
    <div className="font-sans text-gray-800 max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <section className="text-center  py-8 sm:py-14 px-4 sm:px-6 lg:px-8 rounded-2xl my-6 max-sm:mt-0">
        <h1 className="text-2xl text-center md:text-left  sm:text-5xl lg:text-6xl font-bold mb-6 ">Find Your Dream Property<br></br> with Teja BuildTech</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl  text-center md:text-left">
          Explore an exclusive selection of prime real estate tailored to match your lifestyle and preferences. Whether you&apos;re seeking a family home, a luxurious apartment, or a smart investment in terms of Residential plots or Specially designed Industrial plots.
        </p>
        <div className="flex flex-col sm:flex-row justify-left gap-4 mb-8">
          <Link to={'/properties'}>
          <button className="bg-orange-500  text-white py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300">Explore Properties</button>
          </Link>
          <Link to={"https://wa.link/0po3q9"} target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-gray-800 py-3 px-8 rounded-full text-lg border-2 border-gray-800 hover:bg-gray-100 transition duration-300">Get In Touch</button>
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
      </section>
     <div className='px-10'>
      <div className=' rounded-3xl'>
        <div className='py-1.5 bg-gradient-to-r from-[#D9D9D9E8] to-[#EF6D11] rounded-3xl'></div>
      </div>
      </div>
     
      <section className="flex flex-col md:flex-row justify-around py-8 bg-white mx-4 sm:mx-0">
        {['122K+', '280+', '120+'].map((number, index) => (
          <div key={index} className="flex gap-4 items-center mb-8 md:mb-0">
            <h2 className="text-5xl font-bold">{number}</h2>
            <p className="text-gray-600 mt-2 text-base text-center max-w-[180px]">
              {index === 0 && "People Believe In Our Service"}
              {index === 1 && "Property And House Ready For Occupancy"}
              {index === 2 && "Partners Who Have Worked With Us"}
            </p>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="py-16 px-10 bg-white">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 flex gap-4">
            <div className="w-1/2 h-[400px] bg-gray-300 rounded-2xl"></div>
            <div className="w-1/2 h-[400px] bg-gray-300 rounded-2xl"></div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-orange-500 text-sm font-bold text-center md:text-start uppercase mb-2">02 | About Us</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-center md:text-start mb-6">About Teja Builders</h2>
            <p className="text-gray-600 text-lg text-center md:text-start leading-relaxed">
              Welcome to Teja Builders, where sophistication harmonizes with coziness in the heart of the bustling metropolis. 
              With a dedication to quality, we endeavor to offer our customers exceptional service and stunning residences 
              that go beyond expectations. Our goal is to transform your ideal living space into a tangible vision, 
              guaranteeing that every aspect is meticulously designed. Rely on Teja Builders for a smooth, hassle-free property journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-neutral-100 p-8 rounded-lg sm:mx-0">
  <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
    <div>
      <p className="text-orange-500 text-sm font-bold mb-2">02 | Featured</p>
      <h2 className="text-3xl sm:text-4xl font-bold">Featured Properties</h2>
    </div>
    <Link to={'/properties'}>
    <button className="mt-4 sm:mt-0 bg-orange-500 text-white rounded-full px-4 py-[6px] text-lg hover:bg-orange-600 transition duration-300 sm:py-3 sm:px-8">
      View More
    </button>
    </Link>
  </div>

  {/* Wrapping container for the animated cards */}
  <div className="overflow-hidden">
    <div className="flex space-x-8 animate-marquee">
      {[...properties, ...properties].map((property, index) => (
        <div
          key={index}  // Unique key needed even for duplicate entries
          className="bg-white rounded-lg overflow-y-hidden shadow-md transition duration-300 hover:shadow-xl min-w-[300px]"
        >
          <div className=" w-full h-48 bg-gray-300 overflow-y-hidden">
            <img src={property.image} alt={property.title} className="w-full h-[130%]  object-cover   " />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-4">{property.location}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {/* <button className="text-gray-500 hover:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                    <circle cx="256" cy="256" r="244.49" fill="#f25268"></circle>
                    <path fill="#fff" d="M381.91 157.66C339.49 99.28 256 133.72 256 193c0-59.29-83.5-93.74-125.93-35.35C86.23 218 129.45 323.74 256 384.48 382.54 323.74 425.77 218 381.91 157.66z"></path>
                  </svg>
                </button> */}
                {/* <button className="text-gray-500 hover:text-blue-500"  onClick={() => copyToClipboard(property.link)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"></path>
                  </svg>
                </button> */}
                <div className='font-bold text-base'>{property.area}</div>
              </div>
              <Link to={property.link} target='_blank' >
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition duration-300">
                Get A Quote
              </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
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
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Industrial Sales</h3>
          <p className="text-center text-gray-600">
            Whether you&apos;re starting a new business or expanding your current.
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
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Residential Management</h3>
          <p className="text-center text-gray-600">
            Let us take care of your Residential property with our professional
            management services.
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
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Investment Consulting</h3>
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
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Home Staging Marketing</h3>
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
        <p className="text-orange-500 text-sm font-bold mb-2">05 | Testimonials</p>
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <h2 className="text-4xl font-bold mb-6 lg:w-1/2">What Our Clients Say</h2>
          <p className="text-gray-600 lg:w-1/2" style={{ fontSize: '16.57px' }}>
            Hear from our satisfied clients who have found their dream homes with Teja Builders. Their experiences reflect our unwavering commitment to excellence and our dedication to ensuring every client&apos;s satisfaction. From the initial consultation to the final closing, we strive to make the home-buying process seamless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item) => (
        <div key={item.id} className="bg-gray-200 rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
              <img src={item.image} alt={item.name} className='w-12 h-12 object-cover object-center rounded-full'/>
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
        <p className="text-orange-500 text-sm font-bold mb-2">06 | Discover Your Dream Property</p>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 lg:w-1/3">Ready to Find Your New Industrial Space?</h2>
          <p className="text-gray-600 lg:w-1/2">
            Are you ready to find the perfect place to call home? At Teja Builders, we offer a diverse range of luxurious properties designed to meet your every need. From modern downtown apartments to spacious suburban homes and stunning beachfront villas, your dream home awaits.
          </p>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
