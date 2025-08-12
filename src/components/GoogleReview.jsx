import React from 'react';
import Slider from 'react-slick';
import boy from '../assets/boy.webp';
import girl from '../assets/girl.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    image: boy,
    name: "Nipuna Liyanage",
    description:
      "I had a frustrating experience with CityPak. Although my tracking showed 'unable to contact,' I never received a call despite having the correct number. After several days without updates, I had to visit their Yakkala branch to collect the package myself. Their lack of professionalism and poor communication were disappointing. I wouldn’t recommend CityPak if you value reliability and good service.",
  },
  {
    image: boy,
    name: "Nethangi Piyasena",
    description:
      "I am truly grateful to VXL Education, especially Mr. Ayodya, for his excellent support throughout my visa application. The process was entirely online, with regular Zoom meetings and quick responses whenever I needed help. Mr. Ayodya’s professionalism and friendly approach made the experience stress-free. I would confidently recommend VXL Education to anyone seeking reliable assistance.",
  },
  {
    image: girl,
    name: "Udayantha Giragama",
    description:
      "Applying for my Australian visitor visa with VXL Education was a smooth and pleasant experience. Their team showed great attention to detail, provided clear guidance, and communicated promptly. Special thanks to Ayodhya Kodagoda for the personal support and professionalism. Thanks to them, my visa was approved without any issues. I strongly recommend VXL Education to others.",
  },
  {
    image: boy,
    name: "Asitha Kottachchi",
    description:
      "VXL Education Sri Lanka stands out for their outstanding guidance, especially for student visas and subsequent entrant visas. They offer clear, step-by-step instructions that make the entire process easy. Special appreciation to Ms. Surani and Ms. Hasintha for their dedicated support and expertise. For anyone needing trustworthy educational consultancy, I highly recommend VXL Education.",
  },
];

const GoogleReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="py-10 bg-white px-5 font-Poppins">
      <h2 className="text-4xl md:text-6xl font-base text-center mb-10 text-primary">
        They <span className="text-secondary">Excelled</span> with VXL
      </h2>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#f1f6fc] border border-primary p-6 rounded-2xl shadow-sm h-full">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full bg-white border"
                  />
                  <h3 className="font-semibold text-base text-primary">
                    {review.name}
                  </h3>
                </div>
                <p className="text-xl md:text-base text-justify  text-primary leading-relaxed">
                  "{review.description}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GoogleReview;
