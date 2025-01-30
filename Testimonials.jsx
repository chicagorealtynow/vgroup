import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonials = [
    {
      name: 'John Doe',
      text: 'VGroup did an amazing job fixing my leaky faucet. They were professional, efficient, and the price was very reasonable.',
    },
    {
      name: 'Jane Smith',
      text: 'I hired VGroup for some electrical work, and I was extremely impressed with their expertise and attention to detail. I highly recommend them!',
    },
    {
      name: 'Peter Jones',
      text: 'The team at VGroup is fantastic! They completed a carpentry project for me, and the results were outstanding. I will definitely use their services again.',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Testimonials</h2>
      <motion.div
        variants={testimonialVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="bg-gray-800 p-6 rounded-md shadow-md"
          >
            <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
            <p className="text-gray-400 font-semibold text-right">- {testimonial.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
