import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const testimonials = [
    {
      name: "Megan S.",
      text:
        "We had a wonderful experience! I needed some cabinets installed, and a counter/backsplash attached. He did an amazing job I highly recommend this pro! I will definitely be using him again",
      details:
        "Cabinets, shelves, or bookcases • New custom building or construction"
    },
    {
      name: "Lisa H.",
      text:
        "After speaking with this contractor and relaying our situation with the garage door opener we needed installed, he came out the next day & installed the opener. Unfortunately, we wound up having an issue that required us to have it looked at further, so he worked with us to find a resolution that made things right. I was pleased with his professionalism and his ability to work with the customer to make sure we were happy.",
      details: "Less than 2 hours (Simple tasks) • Installation • Garage • Home"
    },
    {
      name: "Jessica L.",
      text:
        "Hired this team to install baseboards and assemble a bathroom vanity . did great with both projects. Would hire again",
      details:
        "2 - 5 hours (A few different projects) • Installation • Bathroom • Kitchen • Living room • Bedroom • Garage • Molding or baseboards • Home"
    },
    {
      name: "Zeke S.",
      text:
        "Amazing work in a timely fashion. The clean up afterwards was great as well. Will definitely use again and recommend to friends.",
      details:
        "Less than 2 hours (Simple tasks) • Installation • Garage • Doors"
    },
    {
      name: "Luis C.",
      text:
        "Vitalii was excellent. was responsive and a wonderful job. very polite and understanding of the issue. Thank you and will do business again!.",
      details: " 2 - 5 hours (A few different projects) • Repairs • Garage"
    },
    {
      name: "Carla M.",
      text:
        "The pro was responsive and gave a fair quote. He worked hard to finish the job in one day. He totally replaced my front walkway which was very old.",
      details:
        "Deck, porch, or balcony • Replacement of portions of existing structure"
    },
    {
      name: "Stefanie H.",
      text:
        "He got us out of a pickle. Saturday evening, fast response and was on-site fast. He helped us move a new fridge in, the old out and setup the new fridge as well. We will definitely be reaching out again",
      details: "Less than 2 hours (Simple tasks) • Kitchen • Home"
    },
    {
      name: "Lisa J.",
      text:
        "They great a great job, very affordable. Would DEFINITELY recommend",
      details: "2 - 5 hours (A few different projects) • Repairs"
    },
    {
      name: "Mary H.",
      text:
        "The V group was very professional and completed the job. Highly recommend. I would definitely call on them again!",
      details:
        "Less than 2 hours (Simple tasks) • Repairs • Installation • Basement • Doors • Home"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Testimonials
      </h2>
      <motion.div
        variants={testimonialVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) =>
          <motion.div
            variants={itemVariants}
            key={index}
            className="bg-gray-800 p-6 rounded-md shadow-md"
          >
            <p className="text-gray-300 mb-4 italic">
              "{testimonial.text}"
            </p>
            <p className="text-gray-400 font-semibold text-right">
              - {testimonial.name}
            </p>
            <p className="text-gray-400 font-semibold text-right pt-5">
              - {testimonial.details}
            </p>
            <img
              src="https://png.pngtree.com/png-vector/20240621/ourmid/pngtree-gaming-5-star-rating-vector-png-image_12804957.png"
              alt="Testimonial"
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
