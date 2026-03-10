import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Mail, BarChart3, Lightbulb, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { SectionWrapper } from '../components/SectionWrapper';

const perks = [
  {
    icon: Lightbulb,
    title: 'Practical AI Breakdowns',
    description:
      'No theory. Every issue covers real tools and techniques your team can put to work immediately.',
  },
  {
    icon: BarChart3,
    title: 'Texas Business Lens',
    description:
      'Local case studies, market context, and insights relevant to businesses operating in Texas — not Silicon Valley.',
  },
  {
    icon: MapPin,
    title: 'Local Market Intelligence',
    description:
      'What is working in Austin, Dallas, Houston, and San Antonio right now — from real engagements.',
  },
  {
    icon: Mail,
    title: 'Once a Month, No Noise',
    description:
      'We respect your inbox. One focused issue per month. No spam, no daily blasts, no affiliate garbage.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
  }),
};

const NewsletterPage: React.FC = () => {
  const beehiivUrl =
    (import.meta.env.VITE_BEEHIIV_URL as string) || 'https://lonestar-ai-report.beehiiv.com/';

  return (
    <main>
      <Helmet>
        <title>Monthly AI Report | LoneStar Intelligence Newsletter</title>
        <meta
          name="description"
          content="Subscribe to the Monthly AI Report by LoneStar Intelligence — practical AI insights for Texas business leaders. No hype, no spam, delivered once a month."
        />
        <link rel="canonical" href="https://www.lonestarintelligence.com/#/newsletter" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Monthly AI Report | LoneStar Intelligence" />
        <meta
          property="og:description"
          content="Practical AI insights for Texas business leaders. No hype, no spam — delivered monthly."
        />
        <meta property="og:url" content="https://www.lonestarintelligence.com/#/newsletter" />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="grain relative bg-navy overflow-hidden pt-32 pb-24">
        <div className="relative z-10 section-wrapper text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-8">
              <Mail className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold tracking-wide">Free Newsletter</span>
            </div>

            <h1 className="text-hero-md md:text-hero text-white leading-tight mb-6">
              The Monthly <span className="text-gold">AI Report</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Practical AI insights for Texas business leaders. No hype, no noise — just what you
              actually need to know about AI, once a month, straight to your inbox.
            </p>

            <Button
              href={beehiivUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="text-base px-8 py-4"
            >
              Subscribe Free — Join the Report
            </Button>
            <p className="mt-4 text-sm text-gray-500">No spam. No credit card. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-14">
          <p className="text-label uppercase tracking-widest text-gold mb-3">What's Inside</p>
          <h2 className="text-section text-navy heading-mark inline-block">
            Built for Business, Not Buzzwords
          </h2>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
            Every issue is written for people who run businesses — not engineers chasing the latest model release.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                className="flex gap-5 p-7 bg-light-gray rounded-2xl border border-gray-100"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">{perk.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{perk.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ===== WHAT YOU WON'T GET ===== */}
      <SectionWrapper className="bg-light-gray">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-label uppercase tracking-widest text-gold mb-3">Our Promise</p>
            <h2 className="text-section text-navy heading-mark inline-block">No Nonsense. Ever.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'No AI hype without substance',
              'No daily email blasts',
              'No vendor-sponsored fluff',
              'No jargon that excludes non-engineers',
              'No paywalls or premium tiers',
              'No selling your email address',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ===== CTA ===== */}
      <section className="grain relative bg-navy overflow-hidden py-20 md:py-28">
        <div className="relative z-10 section-wrapper text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-section text-white leading-snug mb-4">
              Ready to Stay Ahead?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Join Texas business leaders who get the Monthly AI Report delivered to their inbox — practical, focused, and free.
            </p>
            <Button
              href={beehiivUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="text-base px-10 py-4"
            >
              Subscribe to the Monthly AI Report
            </Button>
            <p className="mt-4 text-xs text-gray-600">Free forever. No spam. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default NewsletterPage;
