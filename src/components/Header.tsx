
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center" aria-label="Go to Homepage">
            <Logo className="w-44 h-auto text-brand-dark" />
          </Link>
        </div>

        {/* Center: Nav */}
        <nav className="hidden lg:flex items-center justify-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-dark rounded-sm ${
                  isActive ? 'text-brand-dark underline underline-offset-4' : 'text-gray-600 hover:text-brand-dark hover:underline underline-offset-4'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Button & Hamburger */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden lg:block">
            <Button to="/contact" variant="primary" className="!px-5 !py-2.5">
              Book a Consultation
            </Button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark focus:outline-none p-2 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-dark"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white pb-4 shadow-md rounded-b-lg">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-brand-dark ${
                    isActive ? 'text-brand-dark' : 'text-gray-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-500 hover:text-brand-dark">Contact</NavLink>
             <Button to="/contact" onClick={() => setIsOpen(false)} variant="primary" className="mt-4">
                Book a Consultation
             </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
