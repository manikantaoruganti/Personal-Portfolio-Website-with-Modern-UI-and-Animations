import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = portfolioData.navigation;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-serif font-bold text-primary cursor-pointer hover:text-accent transition-colors duration-300"
          aria-label="Scroll to Home"
        >
          Manikanta.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.id}
              smooth={true}
              duration={500}
              className="text-textSecondary hover:text-primary transition-colors duration-300 cursor-pointer text-lg font-medium relative group"
              activeClass="text-primary"
              spy={true}
              aria-label={`Scroll to ${link.name} section`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-text focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-background bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-40 animate-fade-in">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-text focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-2"
            aria-label="Close navigation menu"
          >
            <FaTimes className="h-8 w-8" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.id}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="text-text text-3xl font-bold hover:text-primary transition-colors duration-300 cursor-pointer"
              activeClass="text-primary"
              spy={true}
              aria-label={`Scroll to ${link.name} section`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
