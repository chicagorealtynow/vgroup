import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <motion.h2
        variants={headingVariants}
        className="text-3xl font-bold mb-8 text-center text-white"
      >
        About VGroup
      </motion.h2>
      <motion.div
        variants={paragraphVariants}
        className="bg-gray-800 p-8 rounded-md shadow-md"
      >
        <p className="text-gray-300 mb-4">
          VGroup is a team of experienced and dedicated handymen committed to providing top-notch home repair and maintenance services. We pride ourselves on our professionalism, reliability, and attention to detail.
        </p>
        <p className="text-gray-300 mb-4">
          Our team consists of skilled professionals with expertise in plumbing, electrical work, carpentry, painting, and general repairs. We are fully equipped to handle a wide range of projects, big or small.
        </p>
        <p className="text-gray-300">
          We are passionate about helping homeowners and renters maintain their properties in excellent condition. Contact us today to experience the VGroup difference!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
