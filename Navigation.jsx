import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section when hash changes
  useEffect(
    () => {
      if (location.hash) {
        const sectionId = location.hash.replace("#", "");
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [location]
  );

  // Scroll to top of the page for Home link
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-gray-900 bg-opacity-70 backdrop-blur-sm"
        : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-white"
          onClick={scrollToTop}
        >
          VGroup
        </Link>
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul
          className={`lg:flex lg:space-x-6 ${isMenuOpen
            ? "block"
            : "hidden"} lg:block absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent p-4 lg:p-0`}
        >
          <li>
            <Link
              to="/"
              className={`block text-gray-300 hover:text-white transition-colors duration-200 ${location.pathname ===
                "/" && !location.hash
                ? "text-white"
                : ""}`}
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              className={`block text-gray-300 hover:text-white transition-colors duration-200 ${location.hash ===
              "#about"
                ? "text-white"
                : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#testimonials"
              className={`block text-gray-300 hover:text-white transition-colors duration-200 ${location.hash ===
              "#testimonials"
                ? "text-white"
                : ""}`}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/#gallery"
              className={`block text-gray-300 hover:text-white transition-colors duration-200 ${location.hash ===
              "#gallery"
                ? "text-white"
                : ""}`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`block text-gray-300 hover:text-white transition-colors duration-200 ${location.pathname ===
              "/services"
                ? "text-white"
                : ""}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              className={`block text-gray-300 hover:text-white transition-colors duration-200 ${location.hash ===
              "#contact"
                ? "text-white"
                : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Replaced the link with a span to prevent phone number from being a link */}
        <span className="hidden lg:block text-gray-300">(412) 390-5847</span>
      </div>
    </motion.nav>
  );
};

export default Navigation;
