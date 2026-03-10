import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Linkedin, MapPin, Zap, Eye, Brain } from 'lucide-react';
import clsx from 'clsx';
import Button from '../components/Button';
import { SectionWrapper } from '../components/SectionWrapper';
import { FAQAccordion } from '../components/FAQAccordion';

/* ------------------------------------------------------------------ */
/*  Structured Data                                                    */
/* ------------------------------------------------------------------ */

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Brett Pascall',
  jobTitle: 'Founder & AI Strategist',
  image: 'https://www.lonestarintelligence.com/brett-pascall.jpg',
  url: 'https://www.lonestarintelligence.com/about',
  sameAs: ['https://www.linkedin.com/in/brett-pascall/'],
  worksFor: {
    '@type': 'Organization',
    name: 'LoneStar Intelligence',
    url: 'https://www.lonestarintelligence.com',
  },
  description:
    'With a background in enterprise relationship management and customer success, Brett Pascall founded LoneStar Intelligence to help Texas businesses unlock practical, measurable AI adoption.',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LoneStar Intelligence',
  url: 'https://www.lonestarintelligence.com',
  logo: 'https://www.lonestarintelligence.com/logo.png',
  founder: {
    '@type': 'Person',
    name: 'Brett Pascall',
  },
  description:
    'LoneStar Intelligence is an AI consulting firm based in Austin, TX that helps Texas businesses adopt practical, real-world AI strategies.',
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Houston' },
    { '@type': 'City', name: 'San Antonio' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
};

const faqItems = [
  {
    question: 'Who founded LoneStar Intelligence?',
    answer:
      'LoneStar Intelligence was founded by Brett Pascall, an enterprise relationship management and customer success professional who saw firsthand how AI could transform the way Texas businesses operate.',
  },
  {
    question: 'Where is LoneStar Intelligence located?',
    answer:
      'LoneStar Intelligence is headquartered in Austin, Texas. We proudly serve businesses across Austin, Dallas, Houston, and San Antonio with in-person and virtual AI consulting engagements.',
  },
  {
    question: 'Do you work with businesses outside of Texas?',
    answer:
      'Our primary focus is on Texas-based businesses, but we do work with organizations outside of Texas on a case-by-case basis. Virtual engagements make it easy for us to support teams anywhere, though our deepest expertise is in the Texas market.',
  },
  {
    question: "What is Brett Pascall's professional background?",
    answer:
      'Brett has spent years in enterprise relationship management and customer success, helping organizations scale through technology and strategic partnerships. He brings that same hands-on, results-driven approach to AI consulting at LoneStar Intelligence.',
  },
  {
    question: 'How large is the LoneStar Intelligence team?',
    answer:
      'LoneStar Intelligence is a founder-led consultancy. Brett works directly with every client to ensure a personalized, high-touch experience. This lean model means you get senior-level strategy and execution without the overhead of a large firm.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

/* ------------------------------------------------------------------ */
/*  Value Card                                                         */
/* ------------------------------------------------------------------ */

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => (
  <motion.div
    className="bg-white rounded-2xl p-8 shadow-sm text-center"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex items-center justify-center mx-auto mb-5 w-14 h-14 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A]">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">{title}</h3>
    <p className="text-[#6B7280] leading-relaxed">{description}</p>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  City Card                                                          */
/* ------------------------------------------------------------------ */

const CityCard: React.FC<{ city: string }> = ({ city }) => (
  <motion.div
    className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <MapPin className="w-8 h-8 text-[#C8922A]" />
    <span className="text-lg font-semibold text-white">{city}</span>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Credential Pill                                                    */
/* ------------------------------------------------------------------ */

const Pill: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-block px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 text-sm font-medium text-[#0B1F3A]">
    {label}
  </span>
);

/* ------------------------------------------------------------------ */
/*  About Page                                                         */
/* ------------------------------------------------------------------ */

const AboutPage: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <Helmet>
        <title>About LoneStar Intelligence | Brett Pascall — AI Consulting Austin, TX</title>
        <meta
          name="description"
          content="Meet Brett Pascall, founder of LoneStar Intelligence. Learn about our mission to make AI practical for Texas businesses across Austin, Dallas, Houston, and San Antonio."
        />
        <link rel="canonical" href="https://www.lonestarintelligence.com/about" />
        <meta property="og:title" content="About LoneStar Intelligence | Brett Pascall — AI Consulting Austin, TX" />
        <meta
          property="og:description"
          content="Meet Brett Pascall, founder of LoneStar Intelligence. Learn about our mission to make AI practical for Texas businesses across Austin, Dallas, Houston, and San Antonio."
        />
        <meta property="og:url" content="https://www.lonestarintelligence.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.lonestarintelligence.com/brett-pascall.jpg" />
        <meta property="og:site_name" content="LoneStar Intelligence" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ==================== 1. Hero ==================== */}
      <section className="relative bg-[#0B1F3A] flex items-center justify-center min-h-[50vh] pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        <div className="container mx-auto px-6 text-center relative z-10 py-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Built in Texas. Designed for Texas Businesses.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            AI isn't a science project — it's a competitive advantage. We help real companies in real
            industries put AI to work, starting today.
          </motion.p>
        </div>
      </section>

      {/* ==================== 2. Founder ==================== */}
      <SectionWrapper ariaLabel="Meet the Founder">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">Meet the Founder</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Photo */}
          <div className="md:w-2/5 flex-shrink-0">
            {/* TODO: Replace with professional headshot of Brett Pascall */}
            {!imgError ? (
              <img
                src="/brett-pascall.jpg"
                alt="Brett Pascall, Founder & AI Strategist at LoneStar Intelligence"
                className="w-[400px] h-[500px] rounded-2xl shadow-xl mx-auto object-cover"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-[400px] h-[500px] rounded-2xl shadow-xl mx-auto bg-[#0B1F3A] flex items-center justify-center">
                <span className="text-6xl font-bold text-[#C8922A]">BP</span>
              </div>
            )}
          </div>

          {/* Bio */}
          <div className="md:w-3/5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C8922A] mb-2">
              Founder &amp; AI Strategist
            </p>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mb-3">Brett Pascall</h3>
            <a
              href="https://www.linkedin.com/in/brett-pascall/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1A7A6E] hover:underline mb-6"
              aria-label="Brett Pascall on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                Brett Pascall spent years in enterprise relationship management and customer success,
                helping organizations scale through strategic partnerships and technology adoption. He
                has worked alongside sales, marketing, and leadership teams at companies of all sizes
                to align people, processes, and tools around measurable growth.
              </p>
              <p>
                After seeing how many Texas businesses struggled to move from AI curiosity to actual
                execution, Brett founded LoneStar Intelligence to close that gap. His approach is
                grounded in hands-on enablement rather than theoretical frameworks — because a strategy
                that never gets implemented is just a slide deck.
              </p>
              <p>
                Today, Brett works directly with founders, executives, and go-to-market teams across
                Austin, Dallas, Houston, and San Antonio to embed practical AI into their daily
                workflows. His focus is simple: help Texas businesses operate smarter, grow faster, and
                compete at a higher level through real-world AI adoption.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <Pill label="Enterprise Strategy" />
              <Pill label="AI Enablement" />
              <Pill label="Go-To-Market" />
              <Pill label="Austin, TX" />
            </div>

            <div className="mt-6">
              <a
                href="https://www.linkedin.com/in/brett-pascall/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1A7A6E] font-semibold hover:underline"
              >
                Connect on LinkedIn
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ==================== 3. Mission ==================== */}
      <SectionWrapper className="bg-[#F5F6F8]" ariaLabel="Our Mission">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-8">Our Mission</h2>
          <p className="text-xl md:text-2xl font-semibold text-[#0B1F3A] leading-relaxed mb-10">
            To bridge the gap between AI theory and real-world execution — so that every Texas
            business can harness artificial intelligence in ways that are practical, profitable, and
            built to scale.
          </p>
          <div className="space-y-5 text-lg text-[#6B7280] leading-relaxed text-left md:text-center">
            <p>
              Too many companies hear about AI's potential but never see it in action inside their own
              workflows. LoneStar Intelligence exists to change that. We bring live, hands-on AI
              enablement directly to the teams that need it most — from marketing and sales to
              leadership and operations.
            </p>
            <p>
              Our engagements are designed around outcomes, not buzzwords. Every session, workshop, and
              strategy we deliver is tied to measurable business results: faster execution, smarter
              decision-making, and more efficient teams.
            </p>
            <p>
              We believe AI adoption should be accessible to every organization in Texas — whether
              you're a ten-person startup in Austin or a multi-location enterprise in Houston. That
              belief drives everything we do.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ==================== 4. Vision ==================== */}
      <SectionWrapper ariaLabel="Our Vision">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-8">Our Vision</h2>
          <p className="text-xl md:text-2xl font-bold text-[#0B1F3A] leading-relaxed mb-6">
            To make Texas the most AI-enabled business ecosystem in America.
          </p>
          <p className="text-lg text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
            We envision a future where every organization in Texas — from local startups to
            established enterprises — operates smarter, faster, and more intelligently through
            accessible, real-world AI adoption. LoneStar Intelligence is here to lead that
            transformation, one team at a time.
          </p>
        </div>
      </SectionWrapper>

      {/* ==================== 5. Values ==================== */}
      <SectionWrapper className="bg-[#F5F6F8]" ariaLabel="What We Stand For">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">What We Stand For</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ValueCard
            title="Grit"
            description="We value real progress over hype. Every engagement is designed to tackle complex challenges head-on and deliver results that matter to your bottom line."
            icon={<Zap className="w-7 h-7" />}
          />
          <ValueCard
            title="Clarity"
            description="We make AI simple and actionable. Our job is to strip away the jargon and give your team a clear path from curiosity to confident execution."
            icon={<Eye className="w-7 h-7" />}
          />
          <ValueCard
            title="Intelligence"
            description="We use data and strategy to drive results. Every recommendation we make is grounded in evidence and tailored to your market, your team, and your goals."
            icon={<Brain className="w-7 h-7" />}
          />
        </div>
      </SectionWrapper>

      {/* ==================== 6. Service Area ==================== */}
      <SectionWrapper className="bg-[#0B1F3A]" ariaLabel="Proudly Serving Texas">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proudly Serving Texas</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <CityCard city="Austin" />
          <CityCard city="Dallas" />
          <CityCard city="Houston" />
          <CityCard city="San Antonio" />
        </div>
        <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          LoneStar Intelligence is an AI consulting firm headquartered in Austin, Texas, proudly
          serving businesses across the state's major metro areas. Whether you're in Austin, Dallas,
          Houston, or San Antonio, we bring hands-on AI enablement and strategic consulting directly
          to your team — in person or virtually.
        </p>
      </SectionWrapper>

      {/* ==================== 7. FAQs ==================== */}
      <SectionWrapper className="bg-[#F5F6F8]" ariaLabel="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>

      {/* ==================== 8. CTA Banner ==================== */}
      <section className="bg-[#C8922A] py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to work with Brett directly?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Book a free consultation to discuss how AI can transform your team's workflows and drive
              measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button to="/contact" variant="primary" className="bg-[#0B1F3A] hover:brightness-110">
                Book a Consultation
              </Button>
              <Button to="/services" variant="ghost">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
