import React, { useState } from 'react';
import logo from '../assets/logo_c.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll offset for fixed navbar (adjust 80px as needed)
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About us', href: 'study-abroad' },
    { name: 'Our Services', href: 'visa-services' },
    { name: 'Travel life', href: 'global-partners' },
    { name: 'Explore', href: 'global-presence' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="w-full shadow-md  fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="Logo" className="h-20 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <HashLink
                key={idx}
                to={`/#${link.href}`}
                scroll={scrollWithOffset}
                className="text-white md:text-base font-medium hover:text-white"
              >
                {link.name}
              </HashLink>
            ))}

            <a
              href="https://wa.me/94774708984"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              Contact
            </a>

         
         
            
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
         <a
         href="#"
         aria-label={isOpen ? 'Close menu' : 'Open menu'}
         onClick={(e) => {
         e.preventDefault();
         toggleMenu();
         }}
         className="text-primary text-2xl hover:text-secondary transition"
         >
         {isOpen ? <FaTimes /> : <FaBars />}
        </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start bg-white py-4 space-y-3">
            {navLinks.map((link, idx) => (
              <HashLink
                key={idx}
                to={`/#${link.href}`}
                scroll={scrollWithOffset}
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-primary hover:bg-blue-50"
              >
                {link.name}
              </HashLink>
            ))}
            <a
              href="https://wa.me/94774708984"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 border-t text-primary border-blue-600"
            >
              Contact
            </a>
            
          </div>
        )}
      </div>
    </nav>
  );
}
