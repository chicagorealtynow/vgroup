import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
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
        Blog
      </motion.h2>
      <motion.div
        variants={paragraphVariants}
        className="bg-gray-800 p-8 rounded-md shadow-md"
      >
        <p className="text-gray-300 mb-4">
          Welcome to our blog! Here, we share tips, updates, and promotions related to home repair and maintenance.
        </p>
        <p className="text-gray-300 mb-4">
          Stay tuned for our latest posts, where we'll cover topics such as seasonal maintenance, DIY tips, and the latest trends in home improvement.
        </p>
        <p className="text-gray-300">
          Check back regularly for new content!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
