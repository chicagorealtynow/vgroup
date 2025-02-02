import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      title: 'Fences',
      description: 'Custom-built wooden and composite fences for privacy, security, and aesthetics.',
    },
    {
      title: 'Street Tiles & Concrete Patios',
      description: 'Durable and stylish paving solutions for driveways, walkways, and outdoor seating areas.',
    },
    {
      title: 'Wooden Terraces',
      description: 'Beautifully crafted wooden terraces that expand your outdoor living space.',
    },
    {
      title: 'Gazebo Installation',
      description: 'Elegant and sturdy gazebos for shade, relaxation, and outdoor gatherings.',
    },
    {
      title: 'Garden & Vegetable Garden Enhancements',
      description: 'Functional and inviting outdoor spaces designed for gardening and sustainability.',
    },
   {
      title: 'Lawn Irrigation Systems and Planting of Lawn',
      description: 'We program lawn irrigation system installation and planting of lawn services.',
    },
  ];
  

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Services</h2>
      <motion.div
        variants={serviceVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="bg-gray-800 p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
