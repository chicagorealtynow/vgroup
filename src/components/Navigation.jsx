import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 bg-opacity-70 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          VGroup
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/#top"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                location.hash === '#top' ? 'text-white' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                location.hash === '#about' ? 'text-white' : ''
              }`}
            >
              About
            </Link>
          </li>
           <li>
            <Link
              to="/#testimonials"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                location.hash === '#testimonials' ? 'text-white' : ''
              }`}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/#gallery"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                location.hash === '#gallery' ? 'text-white' : ''
              }`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                location.pathname === '/services' ? 'text-white' : ''
              }`}
            >
              Services
            </Link>
          </li>
           <li>
            <Link
              to="/#contact"
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                location.hash === '#contact' ? 'text-white' : ''
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
         <a href="tel:+14123905847" className="text-gray-300 hover:text-white transition-colors duration-200">
            (412) 390-5847
          </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
