import React from 'react';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-8 max-sm:px-4 lg:w-1/2 lg:ml-20 shadow-md">
      <h3 className="text-4xl font-bold mb-4">Leave a Message For Us</h3>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
      </p>
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <p className="mb-2 text-sm">First Name</p>
            <input
              type="text"
              placeholder="Ex. Jatin"
              className="w-full p-3 rounded-full border border-gray-300"
            />
          </div>
          <div className="flex-1">
            <p className="mb-2 text-sm">Second Name</p>
            <input 
              type="text" 
              placeholder="Ex. Sharma" 
              className="w-full p-3 rounded-full border border-gray-300"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <p className="mb-2 text-sm">E-mail</p>
            <input
              type="email"
              placeholder="Ex. Hello@email"
              className="w-full p-3 rounded-full border border-gray-300"
            />
          </div>
          <div className="flex-1">
            <p className="mb-2 text-sm">Subject</p>
            <select className="w-full p-3 rounded-full border border-gray-300">
              <option>-- Choose Topic --</option>
            </select>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm">Message</p>
          <textarea
            placeholder="Your message..."
            className="w-full p-3 rounded-lg border border-gray-300 h-32"
          />
        </div>
        <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="lg:w-1/2 p-8 max-sm:p-4">
      <h4 className="text-orange-500 text-sm font-bold mb-2">STAY TUNED WITH US</h4>
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">Keep Connected & Lets Get In Touch With Our Team</h2>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <MapPin className="text-orange-500 mr-4" size={24} />
          <p>Our Head Office: Gresik a</p>
        </div>
        <div className="flex items-center">
          <Mail className="text-orange-500 mr-4" size={24} />
          <p>Email Address: Hello@Email.com</p>
        </div>
        <div className="flex items-center">
          <Phone className="text-orange-500 mr-4" size={24} />
          <p>Telephone: (+62) 123 456 789</p>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="font-sans">
      <div className=" mx-auto px-0 sm:px-6 lg:px-8 py-16 max-sm:py-8 max-sm:pt-0">
        <div className="flex flex-col lg:flex-row justify-between">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>   
  );
};

export default ContactUs;