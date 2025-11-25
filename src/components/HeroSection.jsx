import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Array of background images
import img1 from '../assets/img3.jpg';
import img2 from '../assets/img5.jpg';
import img3 from '../assets/img1.jpeg';
import img4 from '../assets/img6.webp';


const images = [img1, img2, img3, img4];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-gray-900">
        {/* Background images with fade animation */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0'
              }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

        {/* Centered content */}
        <div className="relative z-20 flex items-center justify-center h-full px-6 text-center">
          <div className=" p-10 rounded-lg max-w-2xl font-Poppins">
            <p className="text-white font-bold md:text-xl text-sm mb-2">
              Discover Sri Lanka Like Never Before
            </p>
            <h1 className="text-5xl md:text-6xl leading-tight text-white font-bold">
              CeylonQuest
            </h1>
            <p className="text-base text-white mt-6">
              From golden beaches to misty hills,
              <br /> embark on a timeless journey across the island of Ceylon.
            </p>
            <button className="mt-8 inline-flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-full hover:bg-[#2a7520] transition">
              Contact

            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
