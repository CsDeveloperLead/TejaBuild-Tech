import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-10 px-4 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Teja Builders</h2>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200"><Facebook size={20} /></a>
            <a href="#" className="text-white hover:text-gray-200"><Twitter size={20} /></a>
            <a href="#" className="text-white hover:text-gray-200"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Team Work</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Work Gallery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Site Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Disclaimer</a></li>
            <li><a href="#" className="hover:underline">Terms & Condition</a></li>
            <li><a href="#" className="hover:underline">Cookies Used</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Tuned With Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><MapPin size={16} className="mr-2" /> Location info</li>
            <li className="flex items-center"><Mail size={16} className="mr-2" /> Hello@Email.com</li>
            <li className="flex items-center"><Phone size={16} className="mr-2" /> (+62) 123 456 789</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>ALLRIGHT RESERVED - Campaigning Source </p>
      </div>
    </footer>
  );
};

export default Footer;