import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Lightbulb,
  Users,
  Briefcase,
  Settings,
  ArrowRight,
  BarChart3,
  MessageSquare,
  UserCheck,
  FileText,
} from 'lucide-react';
import clsx from 'clsx';
import Button from '../components/Button';
import { SectionWrapper } from '../components/SectionWrapper';
import { FAQAccordion } from '../components/FAQAccordion';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  '50+ Sessions Delivered',
  '3 Service Tiers',
  '4 Texas Markets',
  '100% Hands-On Training',
];

const steps = [
  {
    num: 1,
    title: 'Buy-In',
    description:
      'Align leadership around AI strategy, opportunities, and measurable outcomes before any session begins.',
  },
  {
    num: 2,
    title: 'Live Enablement',
    description:
      'Conduct a hands-on session showing teams how AI enhances real workflows they already use every day.',
  },
  {
    num: 3,
    title: 'Adopt & Scale',
    description:
      'Deliver a tailored playbook that embeds AI into daily execution so adoption sticks long after we leave.',
  },
];

const services = [
  {
    icon: Briefcase,
    title: 'Corporate Leadership AI Summit',
    description:
      'An executive-level session designed to inspire alignment, build strategic vision, and set the tone for company-wide AI adoption.',
    to: '/services',
  },
  {
    icon: Users,
    title: 'AI Enablement for GTM Teams',
    description:
      'A collaborative workshop for marketing, sales, and revenue teams to integrate AI into campaigns, messaging, and customer engagement.',
    to: '/services',
  },
  {
    icon: Lightbulb,
    title: 'AI for Everyday Work',
    description:
      'A practical session focused on productivity and workflow automation for immediate impact across your entire team.',
    to: '/services',
  },
  {
    icon: Settings,
    title: 'Custom Engagements',
    description:
      'Need something unique? We design bespoke AI enablement programs tailored to your industry, team size, and objectives.',
    to: '/contact',
    isCustom: true,
  },
];

const beforeAfterItems = [
  {
    icon: FileText,
    label: 'Marketing Content',
    before: 'Spending 4+ hours writing a single blog post or email campaign from scratch.',
    after: 'AI-assisted drafts in minutes, freeing your team to focus on strategy and creativity.',
  },
  {
    icon: MessageSquare,
    label: 'Sales Outreach',
    before: 'Generic templates sent to every prospect with low response rates.',
    after: 'Personalized, AI-crafted sequences that resonate with each prospect segment.',
  },
  {
    icon: UserCheck,
    label: 'Personalization at Scale',
    before: 'One-size-fits-all messaging that fails to connect with diverse audiences.',
    after: 'Dynamic content tailored to individual buyer personas in seconds.',
  },
  {
    icon: BarChart3,
    label: 'Insights & Reporting',
    before: 'Manual data pulls and hours spent building weekly reports.',
    after: 'AI-generated dashboards and instant summaries that surface actionable insights.',
  },
];

const faqItems = [
  {
    question: 'What is AI consulting, and how can it help my business?',
    answer:
      'AI consulting helps businesses identify practical opportunities to integrate artificial intelligence into their existing workflows. At LoneStar Intelligence, we focus on hands-on enablement — showing your team how to use AI tools right now, not theoretical roadmaps for the distant future.',
  },
  {
    question: 'Do we need technical expertise to benefit from your sessions?',
    answer:
      'Not at all. Our sessions are designed for business professionals, not engineers. Whether you are in sales, marketing, operations, or leadership, we meet your team where they are and show them tools and techniques they can use immediately.',
  },
  {
    question: 'How long does a typical engagement last?',
    answer:
      'Most of our sessions are half-day or full-day engagements, though we also offer multi-session programs for larger organizations. Every engagement ends with a tailored playbook your team can reference long after we leave.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work across industries — from SaaS and financial services to healthcare, real estate, and professional services. If your team uses email, documents, or data, AI can help you work smarter.',
  },
  {
    question: 'Are your services only available in Texas?',
    answer:
      'While we are headquartered in Austin and focus on Texas markets including Dallas, Houston, and San Antonio, we also serve clients nationwide through virtual sessions and on-site engagements.',
  },
];

const faqJsonLd = {
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

const orgWebsiteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.lonestarintelligence.com/#organization',
      name: 'LoneStar Intelligence',
      url: 'https://www.lonestarintelligence.com',
      description:
        'AI consulting and enablement firm helping Texas businesses integrate artificial intelligence into everyday workflows.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Austin' },
        { '@type': 'City', name: 'Dallas' },
        { '@type': 'City', name: 'Houston' },
        { '@type': 'City', name: 'San Antonio' },
      ],
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.lonestarintelligence.com/#website',
      url: 'https://www.lonestarintelligence.com',
      name: 'LoneStar Intelligence',
      publisher: {
        '@id': 'https://www.lonestarintelligence.com/#organization',
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45, ease: 'easeOut' },
  }),
};

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

const NeuralGrid: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="neural-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1.2" fill="rgba(255,255,255,0.12)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#neural-dots)" />
    {/* Faint connecting lines */}
    <line x1="5%" y1="15%" x2="25%" y2="35%" stroke="rgba(200,146,42,0.08)" strokeWidth="1" />
    <line x1="30%" y1="20%" x2="55%" y2="45%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
    <line x1="60%" y1="10%" x2="80%" y2="40%" stroke="rgba(200,146,42,0.06)" strokeWidth="1" />
    <line x1="75%" y1="50%" x2="95%" y2="75%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
  </svg>
);

const NodeIllustration: React.FC = () => (
  <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto" aria-hidden="true">
    {/* Connection lines */}
    <line x1="200" y1="80" x2="120" y2="200" stroke="#1a3a5c" strokeWidth="2" opacity="0.6" />
    <line x1="200" y1="80" x2="280" y2="200" stroke="#1a3a5c" strokeWidth="2" opacity="0.6" />
    <line x1="120" y1="200" x2="200" y2="320" stroke="#1a3a5c" strokeWidth="2" opacity="0.6" />
    <line x1="280" y1="200" x2="200" y2="320" stroke="#1a3a5c" strokeWidth="2" opacity="0.6" />
    <line x1="120" y1="200" x2="280" y2="200" stroke="#1a3a5c" strokeWidth="2" opacity="0.4" />
    <line x1="200" y1="80" x2="320" y2="120" stroke="#1a3a5c" strokeWidth="1.5" opacity="0.4" />
    <line x1="200" y1="320" x2="80" y2="280" stroke="#1a3a5c" strokeWidth="1.5" opacity="0.4" />
    <line x1="320" y1="120" x2="280" y2="200" stroke="#1a3a5c" strokeWidth="1.5" opacity="0.4" />
    <line x1="80" y1="280" x2="120" y2="200" stroke="#1a3a5c" strokeWidth="1.5" opacity="0.4" />
    {/* Outer nodes – navy */}
    <circle cx="120" cy="200" r="10" fill="#0B1F3A" stroke="#1a3a5c" strokeWidth="2" />
    <circle cx="280" cy="200" r="10" fill="#0B1F3A" stroke="#1a3a5c" strokeWidth="2" />
    <circle cx="200" cy="320" r="10" fill="#0B1F3A" stroke="#1a3a5c" strokeWidth="2" />
    <circle cx="320" cy="120" r="8" fill="#0B1F3A" stroke="#1a3a5c" strokeWidth="1.5" />
    <circle cx="80" cy="280" r="8" fill="#0B1F3A" stroke="#1a3a5c" strokeWidth="1.5" />
    {/* Central accent nodes – gold */}
    <circle cx="200" cy="80" r="14" fill="#C8922A" opacity="0.9" />
    <circle cx="200" cy="200" r="6" fill="#C8922A" opacity="0.7" />
    {/* Glow on gold nodes */}
    <circle cx="200" cy="80" r="22" fill="none" stroke="#C8922A" strokeWidth="1" opacity="0.25" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  HomePage                                                           */
/* ------------------------------------------------------------------ */

const HomePage: React.FC = () => {
  const beehiivUrl = import.meta.env.VITE_BEEHIIV_URL as string;

  return (
    <main>
      <Helmet>
        <title>AI Consulting for Texas Businesses | LoneStar Intelligence — Austin, TX</title>
        <meta
          name="description"
          content="LoneStar Intelligence delivers hands-on AI consulting and enablement sessions for businesses across Austin, Dallas, Houston, and San Antonio. Book a consultation today."
        />
        <link rel="canonical" href="https://www.lonestarintelligence.com/#/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AI Consulting for Texas Businesses | LoneStar Intelligence"
        />
        <meta
          property="og:description"
          content="Hands-on AI consulting and enablement for Texas businesses. We help teams integrate AI into real workflows — today."
        />
        <meta property="og:url" content="https://www.lonestarintelligence.com/#/" />
        <meta property="og:site_name" content="LoneStar Intelligence" />
        <script type="application/ld+json">{JSON.stringify(orgWebsiteJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      {/* ===== 1. HERO ===== */}
      <section className="grain relative min-h-[90vh] flex items-center bg-navy overflow-hidden pt-20">
        <NeuralGrid />
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-hero-md md:text-hero text-white leading-tight mb-6">
              Empowering Texas Teams to Use{' '}
              <span className="text-gold">AI</span> — Right Now.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
              LoneStar Intelligence is an Austin-based AI consulting firm that helps businesses
              across Texas integrate artificial intelligence into their go-to-market strategy.
              We deliver hands-on enablement sessions that empower leaders and teams to scale
              smarter, grow faster, and operate sharper — starting the same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary">
                Book a Consultation
              </Button>
              <Button to="/how-it-works" variant="ghost">
                See How It Works
              </Button>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <NodeIllustration />
          </motion.div>
        </div>
      </section>

      {/* ===== 2. QUICK FACTS BAR ===== */}
      <aside aria-label="LoneStar Intelligence quick statistics" className="bg-light-gray border-y border-gray-200/60 py-12 md:py-14">
        <div className="section-wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-gray-200">
            {[
              { value: '50+', label: 'Sessions Delivered' },
              { value: '3', label: 'Service Tiers' },
              { value: '4', label: 'Texas Markets' },
              { value: '100%', label: 'Hands-On Training' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center px-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">{stat.value}</p>
                <p className="mt-1.5 text-sm font-medium text-text-muted uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </aside>

      {/* ===== 3. TRUSTED BY ===== */}
      <SectionWrapper className="bg-white">
        <div className="text-center">
          <h2 className="text-section text-navy mb-10">
            Trusted by Forward-Thinking Texas Businesses
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 items-center text-gray-400">
            <div className="text-2xl font-bold tracking-wider">InnovateTX</div>
            <div className="text-3xl font-serif italic">GrowthCorp</div>
            <div className="flex items-center justify-center gap-2 text-2xl font-semibold">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Apex</span>
            </div>
            <div className="text-2xl font-light tracking-widest uppercase">Riverbend</div>
          </div>
          <p className="mt-8 text-sm italic text-text-muted">
            *Representative clients. Real results.
          </p>
        </div>
      </SectionWrapper>

      {/* ===== 4. HOW IT WORKS PREVIEW ===== */}
      <SectionWrapper id="how-it-works-preview" className="bg-light-gray">
        <div className="text-center mb-14">
          <p className="text-label uppercase tracking-widest text-gold mb-3">The Process</p>
          <h2 className="text-section text-navy heading-mark inline-block">From Vision to Execution in 3 Steps</h2>
        </div>
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2" />
          <div className="grid md:grid-cols-3 gap-10 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="text-center p-8 bg-white rounded-2xl shadow-sm border-t-2 border-gold/60 relative hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <div className="flex items-center justify-center mx-auto mb-5 w-14 h-14 rounded-full bg-navy text-white font-extrabold text-2xl shadow-md">
                  {step.num}
                </div>
                <h3 className="text-card-title text-navy mb-3">{step.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-text-muted leading-relaxed">
            <strong className="text-navy">AI Enablement</strong> is the process of equipping
            teams with the knowledge, tools, and confidence to use artificial intelligence in
            their day-to-day work — turning theoretical potential into practical, measurable
            results.
          </p>
        </div>
      </SectionWrapper>

      {/* ===== 5. SERVICES PREVIEW ===== */}
      <SectionWrapper id="services" className="bg-white">
        <div className="text-center mb-14">
          <p className="text-label uppercase tracking-widest text-gold mb-3">What We Offer</p>
          <h2 className="text-section text-navy heading-mark inline-block">Tailored AI Sessions for Every Team</h2>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
            Whether you are a CEO setting strategy or a team lead looking for quick wins — we have a format built for you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.article
                key={svc.title}
                className={clsx(
                  'group flex flex-col p-8 rounded-2xl transition-all duration-300',
                  svc.isCustom
                    ? 'border-2 border-dashed border-gold/50 bg-gold/5 hover:bg-gold/10'
                    : 'bg-white shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1'
                )}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-navy/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="text-card-title text-navy mb-2">{svc.title}</h3>
                <p className="text-text-muted mb-6 flex-grow leading-relaxed text-sm">{svc.description}</p>
                <Link
                  to={svc.to}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:gap-2.5 transition-all duration-200 self-start"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ===== 6. BEFORE & AFTER ===== */}
      <SectionWrapper className="bg-light-gray">
        <div className="text-center mb-14">
          <p className="text-label uppercase tracking-widest text-gold mb-3">The Difference</p>
          <h2 className="text-section text-navy heading-mark inline-block">Work Smarter, Not Harder</h2>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
            See how AI transforms the workflows your team already uses every day.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {beforeAfterItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <div className="px-6 py-4 bg-navy/3 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-navy">{item.label}</h3>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  <div className="p-6">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-red-400 bg-red-50 px-2 py-0.5 rounded mb-3">Before</span>
                    <p className="text-text-muted text-sm leading-relaxed">{item.before}</p>
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-teal bg-teal/10 px-2 py-0.5 rounded mb-3">After</span>
                    <p className="text-text-muted text-sm leading-relaxed">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ===== 7. SOCIAL PROOF ===== */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-14">
          <p className="text-label uppercase tracking-widest text-gold mb-3">In Their Words</p>
          <h2 className="text-section text-navy heading-mark inline-block">
            What Texas Business Leaders Are Saying
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.figure
            className="relative bg-navy rounded-2xl p-10 md:p-14 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            {/* Giant decorative quote mark */}
            <span
              className="absolute top-4 left-8 text-[10rem] leading-none text-gold/10 font-serif select-none pointer-events-none"
              aria-hidden="true"
            >"</span>
            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed italic">
                "LoneStar Intelligence made AI tangible for our team. Everyone left the session
                with new ideas — and actual tools we use daily."
              </p>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-lg">
                  M
                </div>
                <div>
                  <p className="font-bold text-white">Michael G.</p>
                  <p className="text-sm text-gray-400">Founder, GrowthCorp</p>
                </div>
              </figcaption>
            </blockquote>
          </motion.figure>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-text-muted text-sm">
              Want to share your results?{' '}
              <Link to="/contact" className="text-gold font-semibold hover:underline">
                Let us feature your story.
              </Link>
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ===== 8. NEWSLETTER CTA ===== */}
      <section className="grain relative bg-navy overflow-hidden py-20 md:py-28">
        <div className="relative z-10 section-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — brand copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-label uppercase tracking-widest text-gold/80 mb-4">Monthly AI Report</p>
              <h2 className="text-section text-white leading-snug mb-4">
                The Only AI News That Matters for Texas Businesses.
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                No hype. No noise. Just practical insights, tool breakdowns, and local case
                studies — delivered once a month to your inbox.
              </p>
            </motion.div>

            {/* Right — subscription card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:border-l lg:border-white/10 lg:pl-16"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
                <p className="text-white font-semibold text-lg mb-1">Subscribe Free</p>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Join forward-thinking Texas business leaders staying ahead of the AI curve.
                </p>
                <Button
                  href={beehiivUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Get the Monthly AI Report
                </Button>
                <p className="mt-4 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 9. FINAL CTA BANNER ===== */}
      <SectionWrapper className="bg-gold">
        <div className="text-center">
          <h2 className="text-section text-navy mb-3">Ready to See AI in Action?</h2>
          <p className="text-navy/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Book a consultation or explore our full range of AI enablement programs built for Texas teams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button to="/contact" variant="secondary">
              Book a Consultation
            </Button>
            <Button to="/services" variant="secondary" className="bg-navy text-white border-navy hover:bg-navy/90">
              Explore Services
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 10. FAQ ===== */}
      <SectionWrapper className="bg-light-gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-section text-navy text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>
    </main>
  );
};

export default HomePage;
