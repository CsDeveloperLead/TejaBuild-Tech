import  { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white ">
      <div className="container mx-auto px-10 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold">Teja Builders</div>
       
        
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={50} />}
        </button>

        
        <nav className="hidden md:flex space-x-6">
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-orange-500 font-bold'
                : 'text-gray-700 hover:text-gray-900'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) =>
              isActive
                ? 'text-orange-500 font-bold'
                : 'text-gray-700 hover:text-gray-900'
            }
          >
            Properties
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? 'text-orange-500 font-bold'
                : 'text-gray-700 hover:text-gray-900'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? 'text-orange-500 font-bold'
                : 'text-gray-700 hover:text-gray-900'
            }
          >
            Contact
          </NavLink>
        </nav>

        <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
          Get in Touch
        </button>
      </div>

      
      {isMenuOpen && (
        <nav className="md:hidden shadow-lg py-4">
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'block px-4 py-2 text-orange-500 font-bold bg-gray-100'
                : 'block px-4 py-2 text-gray-700 hover:bg-gray-100'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) =>
              isActive
                ? 'block px-4 py-2 text-orange-500 font-bold bg-gray-100'
                : 'block px-4 py-2 text-gray-700 hover:bg-gray-100'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Properties
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? 'block px-4 py-2 text-orange-500 font-bold bg-gray-100'
                : 'block px-4 py-2 text-gray-700 hover:bg-gray-100'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? 'block px-4 py-2 text-orange-500 font-bold bg-gray-100'
                : 'block px-4 py-2 text-gray-700 hover:bg-gray-100'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <button
            className="mx-4 mt-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Get in Touch
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
