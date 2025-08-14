import React from 'react';
import Slider from 'react-slick';
import traveler1 from '../assets/traveler2.webp';
import traveler2 from '../assets/traveler1.webp';
import traveler3 from '../assets/traveler1.webp';
import traveler4 from '../assets/traveler2.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    image: traveler1,
    name: "Amila Perera",
    description:
      "CeylonQuest made our trip to Sri Lanka unforgettable! From cultural tours to scenic adventures, everything was perfectly organized. Highly recommend for an authentic island experience!",
  },
  {
    image: traveler2,
    name: "Nethmi Fernando",
    description:
      "The beach and safari tours arranged by CeylonQuest were fantastic. The guides were friendly and knowledgeable, and every detail was taken care of. A truly stress-free vacation.",
  },
  {
    image: traveler3,
    name: "Kasun Jayawardena",
    description:
      "I loved the cultural tours! Visiting ancient temples and heritage sites with CeylonQuest was informative and fun. The team’s passion for Sri Lanka really shines through.",
  },
  {
    image: traveler4,
    name: "Shanika Silva",
    description:
      "Our family trip was amazing thanks to CeylonQuest. From comfortable transportation to local insights, they made sure we had a smooth and memorable journey across Sri Lanka.",
  },
];

const TravelReview = () => {
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 bg-white px-5 font-Poppins">
      <h2 className="text-4xl md:text-6xl font-base text-center mb-10 text-primary">
        Our Travelers <span className="text-secondary">Loved</span> Their Journey
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
                <p className="text-base md:text-sm text-justify text-primary leading-relaxed">
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

export default TravelReview;
