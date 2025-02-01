import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// Manually import each image
import img1 from "../assets/images/1000011851.jpg";
import img2 from "../assets/images/1000011854.jpg";
import img3 from "../assets/images/1000011855.jpg";
import img4 from "../assets/images/1000011861.jpg";
import img5 from "../assets/images/1000011865.jpg";
import img6 from "../assets/images/1000011868.jpg";
import img7 from "../assets/images/1000011869.jpg";
import img8 from "../assets/images/1000011871.jpg";
import img9 from "../assets/images/1000011872.jpg";
import img10 from "../assets/images/1000011875.jpg";
import img11 from "../assets/images/1000011877.jpg";
import img12 from "../assets/images/1000011882.jpg";
import img13 from "../assets/images/1000011885.jpg";
import img14 from "../assets/images/1000011886.jpg";
import img15 from "../assets/images/1000011889.jpg";
import img16 from "../assets/images/1000011890.jpg";
import img17 from "../assets/images/1000011891.jpg";
import img18 from "../assets/images/1000011892.jpg";
import img19 from "../assets/images/1000011893.jpg";
import img20 from "../assets/images/1000011894.jpg";
import img21 from "../assets/images/1000011895.jpg";
import img22 from "../assets/images/1000011896.jpg";

const Gallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Gallery
      </h2>
      <Slider {...settings}>
        {images.map((image, index) =>
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
        )}
      </Slider>
    </motion.div>
  );
};

export default Gallery;
