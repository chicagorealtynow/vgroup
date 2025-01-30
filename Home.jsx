import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import About from "./About";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import Contact from "./Contact";
import ContactPage from "./ContactPage"; // Import ContactPage

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <div id="top" className="relative h-screen overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h1 className="text-4xl font-bold mb-6 text-white">
                Welcome to VGroup Handyman Services
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Your trusted partner for all your home repair and maintenance
                needs.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "#4a5568" }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <Link
                  to="/contactpage"
                  state={{ from: "home" }} // Optional: Pass state to the ContactPage
                  className="block text-gray-300 hover:text-white transition-colors duration-200 bg-slate-600 text-3xl p-4 rounded-full"
                >
                  Request A Quote
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </motion.div>
  );
};

export default Home;
