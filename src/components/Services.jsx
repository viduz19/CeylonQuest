import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    key: "food",
    title: "Food & Culinary Tours",
    image: "src/assets/food.webp",
    description:
      "Taste Sri Lanka’s vibrant flavors with authentic food tours, cooking classes, and street food.",
  },
  {
    key: "hotels",
    title: "Hotels & Stays",
    image: "src/assets/hotel.webp",
    description:
      "From luxury resorts to cozy homestays, find your perfect stay anywhere in Sri Lanka.",
  },
  {
    key: "safari",
    title: "Wildlife & Safari Tours",
    image: "src/assets/safari.webp",
    description:
      "Experience Sri Lanka’s wild side with elephant safaris, leopard spotting, and birdwatching trips.",
  },
  {
    key: "beach",
    title: "Beach Activities",
    image: "src/assets/beach.webp",
    description:
      "Enjoy golden sands, surfing, snorkeling, and breathtaking sunsets along Sri Lanka’s coastlines.",
  },
  {
    key: "cultural",
    title: "Cultural & Heritage Tours",
    image: "src/assets/cultural.webp",
    description:
      "Explore ancient temples, UNESCO heritage sites, and the island’s timeless traditions.",
  },
  {
    key: "transport",
    title: "Transport & Guided Trips",
    image: "src/assets/transport.jpg",
    description:
      "Comfortable, safe, and scenic travel with professional guides to make your journey hassle-free.",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${"src/assets/service-bg1.png"})` }}
      aria-label="Our Services Section"
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, title, image, description }) => (
            <article
              key={key}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
              tabIndex={0}
              aria-label={title}
            >
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 flex-grow">{description}</p>
                <button
                  className="mt-6 px-5 py-2 rounded-lg text-white bg-gradient-to-r from-[#e76b37] to-[#003c3a] hover:opacity-90 hover:scale-105 transform transition duration-300 cursor-pointer"
                  onClick={() => navigate(`/services/${key}`)}
                  aria-label={`Learn more about ${title}`}
                >
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
