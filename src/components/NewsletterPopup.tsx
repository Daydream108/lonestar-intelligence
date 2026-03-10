import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();
  const beehiivUrl = (import.meta.env.VITE_BEEHIIV_URL as string) || 'https://lonestar-ai-report.beehiiv.com/';

  // Only show on the homepage
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isDismissed || !isHomePage) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total > 0.35) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed, isHomePage]);

  const dismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-[90] backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            aria-hidden="true"
          />

          {/* Popup card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Subscribe to the Monthly AI Report"
            className="fixed bottom-8 right-8 z-[91] w-full max-w-md bg-navy rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
          >
            {/* Gold accent strip */}
            <div className="h-1.5 w-full bg-gold" />

            <div className="relative p-10">
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                aria-label="Close newsletter popup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon badge */}
              <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-gold" />
              </div>

              <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-3">
                Monthly AI Report
              </p>
              <h3 className="text-2xl font-bold text-white leading-snug mb-3">
                Stay Ahead of the AI Curve.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Practical insights for Texas business leaders. No hype, no noise — just what you need to know about AI, delivered once a month to your inbox.
              </p>

              <Button
                href={beehiivUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full justify-center text-base py-3.5"
              >
                Subscribe Free
              </Button>

              <button
                onClick={dismiss}
                className="mt-4 w-full text-center text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                No thanks, I'll pass
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
