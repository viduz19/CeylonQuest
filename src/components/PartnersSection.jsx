import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Automatically import all partner images
const imageModules = import.meta.glob('../assets/partners/*.webp', { eager: true });

// Sort files to maintain order (optional, based on filename like p1.png, p2.png)
const sortedImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, module]) => module.default);

// Define university names matching the image order
const partnerNames = [
  'Abertay University',
  'Middlesex University',
  'Ravensbourne University',
  'Southern Cross University',
  'Spartan Institute',
  'University of Sunderland',
  'Abertay University',
  'Middlesex University',
  'Ravensbourne University',
  'Southern Cross University',
  'Spartan Institute',
  'University of Sunderland',
  'University of Sunderland',
  'Abertay University',
  'Middlesex University',
  'Ravensbourne University',
  'Southern Cross University',
];

// Combine names and images
const partners = sortedImages.map((logo, index) => ({
  name: partnerNames[index] || `Partner ${index + 1}`,
  logo,
}));

// Slick carousel settings
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 6,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const PartnersSection = () => {
  return (
    <div className="py-10 px-4 md:px-12 bg-white text-primary text-center">
     <h2 className="text-4xl md:text-6xl font-Poppins mb-6">
     <span className="text-secondary">Excel</span>lence in Global
     <br className="block md:hidden" />
     Partnerships
    </h2>

      <div className="text-base md:text-lg space-y-4 max-w-5xl mx-auto mb-12">
        <p>
          VXL is partnered with a vast global network of prestigious educational institutes.
          Our network spans <span className="text-secondary">Australia, UK, Canada, USA, France, Germany, Spain, Malta, UAE, Singapore and Malaysia.</span>
        </p>
        <p>
          This extensive global network ensures that our clients get unparalleled access to the best universities and institutes,
          facilitating well-informed decisions for their academic and professional aspirations.
        </p>
        <p>
          Our commitment to excellence extends beyond guidance, providing you with the resources and expertise necessary to transform your educational aspirations into reality.
        </p>
        <p>
          We excel in helping you navigate the world of higher education.
          <span className="text-secondary"> You Excel with VXL.</span>
        </p>
      </div>

      <Slider {...sliderSettings}>
        {partners.map((partner, idx) => (
          <div key={idx} className="px-4">
            <div className="border border-[#e0e0e0] h-28 flex items-center justify-center bg-white p-2 rounded-md">
              <img src={partner.logo} alt={partner.name} className="h-full object-contain" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSection;
