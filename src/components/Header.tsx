import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-wrapper h-20 flex items-center">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center" aria-label="Go to Homepage">
            <Logo className={`h-10 w-auto transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`} />
          </Link>
        </div>

        {/* Center: Nav */}
        <nav className="hidden lg:flex items-center justify-center space-x-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                  scrolled
                    ? isActive
                      ? 'text-navy border-b-2 border-gold pb-0.5'
                      : 'text-text-muted hover:text-navy'
                    : isActive
                      ? 'text-white border-b-2 border-gold pb-0.5'
                      : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/newsletter"
            className={({ isActive }) =>
              `text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                scrolled
                  ? isActive
                    ? 'text-navy border-b-2 border-gold pb-0.5'
                    : 'text-text-muted hover:text-navy'
                  : isActive
                    ? 'text-white border-b-2 border-gold pb-0.5'
                    : 'text-gray-300 hover:text-white'
              }`
            }
          >
            AI Newsletter
          </NavLink>
        </nav>

        {/* Right: CTA + Hamburger */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden lg:block">
            <Button to="/contact" variant="primary">
              Book a Consultation
            </Button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              scrolled ? 'text-navy' : 'text-white'
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-20 bg-navy z-40 animate-in slide-in-from-right"
        >
          <nav className="flex flex-col items-center justify-center gap-6 pt-12" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-semibold transition-colors ${
                    isActive ? 'text-gold' : 'text-white hover:text-gold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/newsletter"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-semibold transition-colors ${
                  isActive ? 'text-gold' : 'text-white hover:text-gold'
                }`
              }
            >
              AI Newsletter
            </NavLink>
            <Button to="/contact" variant="primary" className="mt-4" onClick={() => setIsOpen(false)}>
              Book a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
