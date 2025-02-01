import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
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
        {/* <p className="text-gray-300 mb-4">
          VGroup is a team of experienced and dedicated handymen committed to providing top-notch home repair and maintenance services. We pride ourselves on our professionalism, reliability, and attention to detail.
        </p>
        <p className="text-gray-300 mb-4">
          Our team consists of skilled professionals with expertise in plumbing, electrical work, carpentry, painting, and general repairs. We are fully equipped to handle a wide range of projects, big or small.
        </p>
        <p className="text-gray-300">
          We are passionate about helping homeowners and renters maintain their properties in excellent condition. Contact us today to experience the VGroup difference!
        </p> */}

        <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-lg">
          <h2 className=" text-3xl font-bold text-teal-400 mb-6 text-center" />
          <p className="text-gray-400 mb-4">
            VGroup specializes in high-quality carpentry and outdoor
            construction, bringing craftsmanship and durability to every
            project. Our expertise lies in enhancing outdoor spaces with
            functional and stylish structures tailored to your needs.
          </p>

          <h3 className="text-2xl font-semibold text-orange-400 mb-4">
            Our Focus Areas:
          </h3>

          <ul className="space-y-4">
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                1. Fences –
              </span>{" "}
              Custom-built wooden and composite fences for privacy, security,
              and aesthetics.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                2. Street Tiles & Concrete Patios –
              </span>{" "}
              Durable, well-designed paving solutions for driveways, walkways,
              and outdoor seating areas.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                3. Wooden Terraces –
              </span>{" "}
              Beautifully crafted wooden terraces that expand your living space
              and blend seamlessly with nature.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                4. Gazebo Installation –
              </span>{" "}
              Elegant and sturdy gazebos for shade, relaxation, and outdoor
              gatherings.
            </li>
          </ul>

          <p className="text-gray-400 mb-4">
            With a specialized focus on garden and vegetable garden
            enhancements, we create spaces that are both functional and
            inviting. Let VGroup bring your outdoor vision to life with expert
            craftsmanship and attention to detail.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
