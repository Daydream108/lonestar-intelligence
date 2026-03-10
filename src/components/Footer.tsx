import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="section-wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo + Tagline */}
          <div className="space-y-4">
            <Logo className="h-10 w-auto text-white" />
            <p className="text-sm text-gray-400 max-w-xs leading-6">
              Helping Texas companies integrate AI into their go-to-market strategy and daily operations.
            </p>
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} LoneStar Intelligence. All Rights Reserved.</p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-label uppercase text-gold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li>
                <a
                  href={import.meta.env.VITE_BEEHIIV_URL || 'https://lonestar-ai-report.beehiiv.com/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Monthly AI Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-label uppercase text-gold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@lonestarintelligence.com" className="hover:text-white transition-colors">
                  info@lonestarintelligence.com
                </a>
              </li>
              <li>Austin, Texas</li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h3 className="text-label uppercase text-gold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/brett-pascall/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Brett Pascall on LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              {/* TODO: Replace with actual X/Twitter URL */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
              {/* TODO: Replace with actual YouTube URL */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip — AEO local entity reinforcement */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500 tracking-wider uppercase">
            Serving Austin &middot; Dallas &middot; Houston &middot; San Antonio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
