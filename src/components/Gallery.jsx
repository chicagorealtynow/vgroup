import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const Gallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
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
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "https://production-next-images-cdn.thumbtack.com/i/529675204387274760/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033395609894914/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033395720626191/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033395599106057/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033395402866696/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033394734276623/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033395811229698/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033395145482255/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033394722062349/width/1366.webp",
     "https://production-next-images-cdn.thumbtack.com/i/529033390183432200/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033394768306185/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033394504712200/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033392930545677/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033392928702464/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033387993038861/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/529033385903218696/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/528050058326589465/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/526521930826874885/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/526521930931298305/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/526186539181137927/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/526186539214700551/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/526186372590379015/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/526186372596613131/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/525447750241435660/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/525447543980490764/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/525447544064253957/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/525447544014061580/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/525448003708682247/width/1366.webp",
    "https://production-next-images-cdn.thumbtack.com/i/525448003649953799/width/1366.webp",
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Gallery;
