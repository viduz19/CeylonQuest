import React, { useState, useEffect } from 'react';
import logo from '../assets/logo_c.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll offset for fixed navbar
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About us', href: 'about' },
    { name: 'Our Services', href: 'services' },
    { name: 'Travel life', href: 'global-partners' },
    { name: 'Explore', href: 'global-presence' },
    { name: 'Contact', href: 'contact' },
  ];

  // Detect scroll past hero section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <HashLink
                key={idx}
                smooth
                to={`/#${link.href}`}
                scroll={scrollWithOffset}
                className={`md:text-base font-medium transition-colors ${
                  scrolled
                    ? 'text-primary hover:text-secondary'
                    : 'text-white hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </HashLink>
            ))}

            <a
              href="https://wa.me/94774708984"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg transition border ${
                scrolled
                  ? 'border-primary text-primary hover:bg-blue-50'
                  : 'border-white text-white hover:bg-white hover:text-primary'
              }`}
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
              className={`text-2xl transition ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start bg-white py-4 space-y-3">
            {navLinks.map((link, idx) => (
              <HashLink
                key={idx}
                smooth
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
              onClick={() => setIsOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
