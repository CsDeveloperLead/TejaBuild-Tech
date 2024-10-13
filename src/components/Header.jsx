import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white mt-4">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Teja Builders</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={50} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink 
            exact to="/" 
            className="text-gray-700 hover:text-gray-900" 
            activeClassName="text-orange-500"
          >
            Home
          </NavLink>
          <NavLink 
            to="/properties" 
            className="text-gray-700 hover:text-gray-900" 
            activeClassName="text-orange-500"
          >
            Properties
          </NavLink>
          <NavLink 
            to="/about-us" 
            className="text-gray-700 hover:text-gray-900" 
            activeClassName="text-orange-500"
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact-us" 
            className="text-gray-700 hover:text-gray-900" 
            activeClassName="text-orange-500"
          >
            Contact
          </NavLink>
        </nav>
        
        <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          Sign Up
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden shadow-lg py-4">
          <NavLink 
            exact to="/" 
            className="block px-4 py-2 text-orange-500 hover:bg-gray-100" 
            activeClassName="text-orange-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/properties" 
            className="block px-4 py-2 text-orange-500 hover:bg-gray-100" 
            activeClassName="text-orange-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Properties
          </NavLink>
          <NavLink 
            to="/about-us" 
            className="block px-4 py-2  text-orange-500 hover:bg-gray-100" 
            activeClassName="text-orange-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact-us" 
            className="block px-4 py-2 text-orange-500 hover:bg-gray-100" 
            activeClassName="text-orange-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <button 
            className="mx-4 mt-2 w-calc(100% - 2rem) bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
