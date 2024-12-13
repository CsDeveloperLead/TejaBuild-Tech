// import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-500 flex flex-col text-white py-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row gap-20 mt-10">
        <div className="w-full md:w-1/4 ">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-start">Teja BuildTech</h2>
          <p className="text-sm mb-4 text-center md:text-start">
            Teja Buildtech saved us time and unlocked valuable insights for our
            industrial property development, making the process
            efficient and seamless.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://www.facebook.com/profile.php?id=61566151574656&mibextid=ZbWKwL" target="_blank" className="text-white hover:text-gray-200">
              <Facebook size={20} />
            </a>
            {/* <a href="#" className="text-white hover:text-gray-200">
              <Twitter size={20} />
            </a> */}
            <a href="https://www.instagram.com/tejabuiltech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-white hover:text-gray-200">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <div className="w-full px-2 md:px-10 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <Link to="/about-us#leader" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <a href="/properties" className="hover:underline">
                    Services
                  </a>
                </li>
                {/* <li>
                  <a href="/properties" className="hover:underline">
                    Work Gallery
                  </a>
                </li> */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Site Links</h3>
              <ul className="space-y-2">
                <Link to="/contact-us" className="mb-2">
                <li>
                 
                    Contact Us
                 
                </li>
                </Link>
                {/* <li>
                  <a href="#" className="hover:underline">
                    Disclaimer
                  </a>
                </li> */}
                <Link to={"https://wa.link/0po3q9"}
            target="_blank"
            rel="noopener noreferrer" >
                <li className="my-2">
                  
                    Get in Touch
               
                </li>
                </Link>
                {/* <li>
                  <a href="#" className="hover:underline">
                    Cookies Used
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="hidden md:block">
              <h3 className="text-lg font-semibold mb-4">Stay Tuned With Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" /> D39 Teja Tower RDC Rajnagar Ghaziabad
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" /> tejabuildtech.marketing@gmail.com
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" /> +91 9654987500
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden mt-10 px-2">
              <h3 className="text-lg font-semibold mb-4">Stay Tuned With Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" /> D39 Teja Tower RDC Rajnagar Ghaziabad
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" /> tejabuildtech.marketing@gmail.com
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" /> +91 9654987004
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm">
        <p>
          {" "}
          ©️2024 Teja BuildTech, made with 💖 by Campaigning Source, all rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
