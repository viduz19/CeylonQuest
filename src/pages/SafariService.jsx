import React from "react";
import servicesData from "../data/servicesData.json";

// Import all images used in Safari service
import safariHero from "../assets/safari.webp";
import yalaImg from "../assets/safari.webp";
import udawalaweImg from "../assets/safari.webp";
import wilpattuImg from "../assets/safari.webp";
import minneriyaImg from "../assets/safari.webp";

// Map JSON paths to imported images
const imageMap = {
  "src/assets/safari.webp": safariHero,
  "src/assets/yala.jpg": yalaImg,
  "src/assets/udawalawe.jpg": udawalaweImg,
  "src/assets/wilpattu.jpg": wilpattuImg,
  "src/assets/minneriya.jpg": minneriyaImg,
};

const SafariService = () => {
  const service = servicesData.find((item) => item.key === "safari");

  if (!service) return <p>Service not found</p>;

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${imageMap[service.hero]})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg md:text-2xl">{service.subtitle}</p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg md:text-xl text-primary">{service.intro}</p>
      </section>

      {/* Experiences */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-secondary mb-4 text-center">
          What You’ll Experience
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          {service.experiences.map((exp, idx) => (
            <li key={idx}>{exp}</li>
          ))}
        </ul>
      </section>

      {/* Locations */}
      <section className="py-10 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
          Best Locations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {service.locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={imageMap[loc.img]}
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

      {/* Why Choose */}
      <section className="py-10 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Why Choose Us?</h2>
        <p className="text-gray-700">{service.whyChoose}</p>
      </section>

      {/* CTA */}
      <div className="text-center py-12">
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg text-lg font-medium transition">
          Book Safari
        </button>
      </div>
    </div>
  );
};

export default SafariService;
