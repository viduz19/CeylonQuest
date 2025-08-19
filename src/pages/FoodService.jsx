import React from "react";
import serviceBg from "../assets/food.webp"; // Hero bg
import colomboImg from "../assets/colombo-market.webp";
import galleImg from "../assets/Galle-food.jpg";
import ellaImg from "../assets/Elle-tea.webp";
import jaffnaImg from "../assets/Jaffna-food.webp";

const FoodService = () => {
  const locations = [
    {
      name: "Pettah Market, Colombo",
      img: colomboImg,
    },
    {
      name: "Galle Fort Food Trails",
      img: galleImg,
    },
    {
      name: "Ella & Nuwara Eliya Tea Country",
      img: ellaImg,
    },
    {
      name: "Jaffna Spicy Cuisine Experiences",
      img: jaffnaImg,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${serviceBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Food & Culinary Tours
          </h1>
          <p className="text-lg md:text-2xl">Taste the Island’s Flavors</p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg md:text-xl text-primary">
          Sri Lankan food is bold, colorful, and unforgettable. From spicy curries to
          coconut-infused sambols, every dish carries centuries of tradition. At CeylonQuest,
          we take you beyond restaurants and into real food journeys.
        </p>
      </section>

      {/* What You’ll Experience */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-secondary mb-4 text-center">
          What You’ll Experience
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          <li>Guided market tours in Colombo, Kandy, or Galle</li>
          <li>Learn to cook hoppers, kottu roti, and seafood curries with local chefs</li>
          <li>Visit tea estates in Nuwara Eliya & sip Ceylon’s world-famous tea</li>
          <li>Try authentic street food adventures (isso wade, kottu, achcharu)</li>
        </ul>
      </section>

      {/* Best Locations */}
      <section className="py-10 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
          Best Locations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={loc.img}
                alt={loc.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-gray-700 font-medium">{loc.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Why Choose Us?</h2>
        <p className="text-gray-700">
          Small group tours | Local hosts | Vegetarian-friendly options
        </p>
      </section>

      {/* CTA */}
      <div className="text-center py-12">
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full shadow-lg text-lg font-medium transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FoodService;
