import {
  faWhatsapp,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap-icons/font/bootstrap-icons.css';

import logo from '../assets/logo_c.png';
import footerBg from '../assets/footer.png'; // 👈 Add your footer background image here

const socialLinks = [
  { name: "WhatsApp", url: "https://wa.me/94729726689", icon: faWhatsapp },
  { name: "Facebook", url: "https://www.facebook.com/vxleducationlk", icon: faFacebookSquare },
  { name: "Instagram", url: "https://www.instagram.com/vxledulk/", icon: faInstagramSquare },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/vxl-education-sri-lanka/", icon: faLinkedin },
  { name: "TikTok", url: "https://www.tiktok.com/@vxleducationsrilanka", icon: faTiktok },
];

export default function Footer() {
  return (
    <>
      {/* Background wrapper with image and overlay */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-bottom opacity-30 z-0"
          style={{ backgroundImage: `url(${footerBg})` }}
        ></div>

        {/* Dark overlay for shadow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 z-0"></div>

        {/* Actual Footer Content */}
        <footer className="relative  text-white px-4 md:px-10 pt-12 pb-6 z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-y-10 md:gap-x-10">

            {/* Our Services */}
            <div className="w-full md:flex-1">
              <h3 className="text-2xl font-semibold border-b border-white pb-1 mb-4 font-Poppins">Our Services</h3>
              <ul className="list-disc list-inside space-y-1 text-primary text-sm">
                <li><a href="#visa-services" className="hover:text-secondary">Courses and Career Counselling</a></li>
                <li><a href="#visa-services" className="hover:text-secondary">University Applications</a></li>
                <li><a href="#visa-services" className="hover:text-secondary">Visa Applications</a></li>
                <li><a href="#visa-services" className="hover:text-secondary">IELTS/PTE courses/registration</a></li>
                <li><a href="#study-abroad" className="hover:text-secondary">OSHC/Insurance</a></li>
                <li><a href="#study-abroad" className="hover:text-secondary">Onshore Accommodation</a></li>
              </ul>
            </div>

            {/* Global Destinations */}
            <div className="w-full md:flex-1">
              <h3 className="text-2xl font-semibold border-b border-primary pb-1 mb-4 font-Poppins">Global Destinations</h3>
              <ul className="list-disc list-inside grid grid-cols-2 gap-x-4 text-sm">
                {["Australia", "UK", "USA", "Canada", "Germany", "France", "Spain", "UAE", "Malta", "Malaysia"].map((dest) => (
                  <li key={dest}>{dest}</li>
                ))}
              </ul>
            </div>

            {/* Contact and Maps */}
            <div className="w-full md:flex-1">
              <h3 className="text-2xl font-semibold border-b border-primary pb-1 mb-4">
                Reach out to us: <br className="md:hidden" />0117 699 749
              </h3>

              <div className="flex flex-col sm:flex-row gap-6">
               

                {/* Social Icons */}
                <div className="flex sm:flex-col sm:items-center sm:justify-start gap-4 self-center sm:self-auto pt-4 sm:pt-0">
                  {socialLinks.map((link) => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
                      <FontAwesomeIcon icon={link.icon} className="w-5 h-5 text-white hover:text-gray-200" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Brand Area */}
          <div className=" mt-10 text-center text-primary py-6 text-sm font-Poppins">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img src={logo} alt="VXL Logo" className="h-[70px]" />
              <p>
                Copyright © 2024 VXL Education Sri Lanka<br />
                <span className="text-xs">Developed by MAD Marketing</span>
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/94729726689"
        className="fixed bottom-[70px] right-4 md:right-30 bg-[#25D366] text-white w-8 h-8 md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center z-50"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-base md:text-xl" />
      </a>

      {/* Back to Top */}
      <a
        href="#"
        title="Back to top"
        className="fixed bottom-5 right-4 md:right-30 bg-primary text-white w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full z-50"
      >
        <i className="bi bi-arrow-up text-sm md:text-lg"></i>
      </a>
    </>
  );
}
