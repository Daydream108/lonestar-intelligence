import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-4">
                <Logo className="h-10 w-auto text-white" />
                <p className="text-sm text-brand-light max-w-xs">
                    Helping Texas companies integrate AI into their go-to-market strategy and daily operations.
                </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold tracking-wider uppercase text-white">Navigation</h3>
                    <ul className="mt-4 space-y-2">
                        <li><Link to="/services" className="text-sm text-brand-light hover:text-white transition-colors">Services</Link></li>
                        <li><Link to="/how-it-works" className="text-sm text-brand-light hover:text-white transition-colors">How It Works</Link></li>
                        <li><Link to="/case-studies" className="text-sm text-brand-light hover:text-white transition-colors">Case Studies</Link></li>
                        <li><Link to="/about" className="text-sm text-brand-light hover:text-white transition-colors">About</Link></li>
                        <li><Link to="/contact" className="text-sm text-brand-light hover:text-white transition-colors">Contact</Link></li>
                        <li>
                            <a href="https://lonestar-ai-report.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-light hover:text-white transition-colors">
                                Monthly AI Newsletter
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold tracking-wider uppercase text-white">Serving Texas</h3>
                    <ul className="mt-4 space-y-2 text-sm text-brand-light mb-6">
                        <li>Austin & Central Texas</li>
                        <li>Dallas / Fort Worth</li>
                        <li>Houston Metro</li>
                        <li>San Antonio</li>
                    </ul>

                    <h3 className="font-semibold tracking-wider uppercase text-white">Contact</h3>
                    <ul className="mt-4 space-y-2 text-sm text-brand-light">
                        <li>
                            <a href="mailto:info@lonestarintelligence.com" className="hover:text-white transition-colors break-all">
                                info@lonestarintelligence.com
                            </a>
                        </li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold tracking-wider uppercase text-white">Connect</h3>
                    <div className="mt-4 flex space-x-4">
                        <a href="https://linkedin.com/company/lonestar-intelligence" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-white transition-colors" aria-label="LinkedIn">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-brand-light">
          <p>&copy; {new Date().getFullYear()} LoneStar Intelligence. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;