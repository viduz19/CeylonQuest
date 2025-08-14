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
import footerBg from '../assets/footer.png'; // Your travel footer background

const socialLinks = [
  { name: "WhatsApp", url: "https://wa.me/94774708984", icon: faWhatsapp },
  { name: "Facebook", url: "https://www.facebook.com/CeylonQuest", icon: faFacebookSquare },
  { name: "Instagram", url: "https://www.instagram.com/ceylonquest/", icon: faInstagramSquare },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/ceylonquest/", icon: faLinkedin },
  { name: "TikTok", url: "https://www.tiktok.com/@ceylonquest", icon: faTiktok },
];

export default function Footer() {
  return (
    <>
      {/* Background wrapper with image and overlay */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-bottom opacity-30 z-0"
          style={{ backgroundImage: `url(${footerBg})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 z-0"></div>

        {/* Footer Content */}
        <footer className="relative text-white px-4 md:px-10 pt-12 pb-6 z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-y-10 md:gap-x-10">

            {/* Travel Services */}
            <div className="w-full md:flex-1">
              <h3 className="text-2xl text-secondary font-bold border-b border-primary pb-1 mb-4 font-Poppins">
                Our Travel Services
              </h3>
              <ul className="list-disc list-inside space-y-1 text-primary text-sm">
                <li><a href="#food" className="hover:text-secondary">Food & Culinary Tours</a></li>
                <li><a href="#hotels" className="hover:text-secondary">Hotels & Stays</a></li>
                <li><a href="#safari" className="hover:text-secondary">Wildlife & Safari Tours</a></li>
                <li><a href="#beach" className="hover:text-secondary">Beach Activities</a></li>
                <li><a href="#cultural" className="hover:text-secondary">Cultural & Heritage Tours</a></li>
                <li><a href="#transport" className="hover:text-secondary">Transport & Guided Trips</a></li>
              </ul>
            </div>

            {/* Popular Destinations */}
            <div className="w-full md:flex-1">
              <h3 className="text-2xl text-secondary font-bold border-b border-primary pb-1 mb-4 font-Poppins">
                Popular Destinations
              </h3>
              <ul className="list-disc text-primary list-inside grid grid-cols-2 border-primary gap-x-4 text-sm">
                {["Colombo", "Kandy", "Galle", "Sigiriya", "Nuwara Eliya", "Ella", "Trincomalee", "Jaffna", "Mirissa", "Haputale"].map((dest) => (
                  <li key={dest}>{dest}</li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="w-full md:flex-1">
              <h3 className="text-2xl text-secondary font-semibold border-b border-primary pb-1 mb-4">
                Reach Us: <br className="md:hidden" />+94 77 500 8554
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 text-primary">
                <div className="flex sm:flex-col sm:items-center sm:justify-start gap-4 self-center sm:self-auto pt-4 sm:pt-0">
                  {socialLinks.map((link) => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
                      <FontAwesomeIcon icon={link.icon} className="w-5 h-5 text-primary hover:text-secondary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Brand Area */}
          <div className="mt-10 text-center text-primary py-6 text-sm font-Poppins">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img src={logo} alt="CeylonQuest Logo" className="h-[70px]" />
              <p>
                Copyright © 2025 CeylonQuest Sri Lanka<br />
                <span className="text-xs">Developed by Your Company</span>
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/94774708984"
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
