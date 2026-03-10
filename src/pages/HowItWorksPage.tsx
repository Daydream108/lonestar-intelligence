import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Users,
  Presentation,
  Rocket,
  Phone,
  BookOpen,
  Mic,
  Video,
  FileText,
  CalendarCheck,
  CheckCircle,
} from 'lucide-react';
import clsx from 'clsx';
import { SectionWrapper } from '../components/SectionWrapper';
import Button from '../components/Button';
import { FAQAccordion } from '../components/FAQAccordion';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const steps = [
  {
    number: '1',
    title: 'Buy-In',
    icon: Users,
    description:
      'The journey starts at the top. We lead a focused session with leadership to build alignment around AI strategy, dispel myths, and create genuine executive sponsorship for what comes next.',
    duration: 'Typical Duration: 1\u20132 hours',
    outcomes: [
      'Executive alignment on AI priorities and opportunities',
      'Shared vocabulary and realistic expectations across leadership',
      'Clear mandate and enthusiasm to move forward with enablement',
    ],
  },
  {
    number: '2',
    title: 'Live Enablement',
    icon: Presentation,
    description:
      'Theory meets practice. We facilitate an interactive, hands-on workshop where your team applies AI to their actual workflows\u2014building confidence, sparking ideas, and demonstrating immediate value.',
    duration: 'Half or Full Day',
    outcomes: [
      'Participants use AI tools on real tasks during the session',
      'Team-specific use cases documented and prioritized',
      'Confidence and momentum to continue experimenting independently',
    ],
  },
  {
    number: '3',
    title: 'Adopt & Scale',
    icon: Rocket,
    description:
      'We package everything into a custom AI Playbook so the momentum continues long after our session. Your team receives clear guidance, prompt libraries, and a roadmap for scaling AI across the organization.',
    duration: 'Delivered within 1 week',
    outcomes: [
      'Custom AI Playbook tailored to your workflows and goals',
      'Prompt libraries and best-practice templates for every department',
      'Adoption metrics and a 30-day check-in to sustain progress',
    ],
  },
];

const includedItems = [
  { icon: Phone, label: 'Pre-session discovery call' },
  { icon: BookOpen, label: 'Custom session curriculum' },
  { icon: Mic, label: 'Live facilitation by Brett Pascall' },
  { icon: Video, label: 'Session recording (virtual)' },
  { icon: FileText, label: 'AI Playbook document' },
  { icon: CalendarCheck, label: '30-day follow-up check-in' },
];

const faqItems = [
  {
    question: 'How long does the entire engagement take from start to finish?',
    answer:
      'Most engagements wrap up within two to three weeks. The Buy-In session is typically scheduled within the first week, the Live Enablement workshop follows shortly after, and the custom AI Playbook is delivered within one week of the workshop.',
  },
  {
    question: 'What happens after the session is over?',
    answer:
      'Every engagement includes a custom AI Playbook, prompt libraries, and a 30-day follow-up check-in. We stay connected to answer questions, review progress, and help your team maintain momentum as they integrate AI into daily work.',
  },
  {
    question: 'Do participants need technical knowledge or coding experience?',
    answer:
      'Not at all. Our sessions are designed for business professionals, not engineers. We focus on practical, no-code AI tools and workflows that anyone can pick up and start using right away.',
  },
  {
    question: 'Can you work with remote or distributed teams?',
    answer:
      'Absolutely. We offer both in-person and virtual engagements. Virtual sessions are fully interactive with breakout rooms, live exercises, and screen sharing\u2014so remote teams get the same hands-on experience.',
  },
  {
    question: 'How is LoneStar Intelligence different from other AI consultants?',
    answer:
      'We don\u2019t deliver slide decks and walk away. Our model is built around live, hands-on enablement that gives your team real skills they can use immediately. Every engagement is customized to your industry and workflows, and we stay involved through a 30-day follow-up to ensure lasting adoption.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How LoneStar Intelligence Helps You Adopt AI',
  description:
    'A proven 3-step engagement model that takes organizations from AI curiosity to confident, scaled adoption.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Buy-In',
      text: 'A focused leadership session to align executives around AI strategy, build sponsorship, and set realistic expectations.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Live Enablement',
      text: 'An interactive, hands-on workshop where your team applies AI tools to their real-world workflows and tasks.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Adopt & Scale',
      text: 'Delivery of a custom AI Playbook with prompt libraries, best-practice templates, and a 30-day follow-up check-in.',
    },
  ],
};

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
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const HowItWorksPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our AI Consulting Process | LoneStar Intelligence — How It Works</title>
        <meta
          name="description"
          content="Discover our proven 3-step AI consulting process: executive buy-in, live hands-on enablement, and scaled adoption. LoneStar Intelligence helps Austin and Texas businesses integrate AI fast."
        />
        <link rel="canonical" href="https://www.lonestarintelligence.com/how-it-works" />
        <meta property="og:title" content="Our AI Consulting Process | LoneStar Intelligence" />
        <meta
          property="og:description"
          content="From AI skeptic to AI-powered in 3 steps. See how our engagement model drives real adoption for Texas businesses."
        />
        <meta property="og:url" content="https://www.lonestarintelligence.com/how-it-works" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.lonestarintelligence.com/og-how-it-works.jpg" />
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ------------------------------------------------------------ */}
      {/*  1. Page Hero                                                 */}
      {/* ------------------------------------------------------------ */}
      <section
        className="relative flex items-center justify-center bg-navy text-white pt-20"
        style={{ minHeight: '50vh' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        <div className="container mx-auto px-6 py-16 md:py-24 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Process: From AI&nbsp;Skeptic to AI&#8209;Powered&nbsp;in&nbsp;3&nbsp;Steps
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            A proven engagement model that aligns leadership, empowers your team with hands-on
            skills, and delivers a custom playbook so AI adoption sticks.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button to="/services" variant="primary">
              See Our Services
            </Button>
            <Button to="/contact" variant="ghost">
              Book a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/*  2. Process Timeline                                          */}
      {/* ------------------------------------------------------------ */}
      <SectionWrapper className="bg-white" id="process" ariaLabel="Engagement process timeline">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            The LoneStar Intelligence Engagement Model
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Three focused steps that take your organization from curiosity to confident, scaled AI
            adoption.
          </p>
        </div>

        {/* Desktop horizontal timeline connector */}
        <div className="hidden lg:block relative max-w-5xl mx-auto mb-4">
          <div className="absolute top-1/2 left-[16.67%] right-[16.67%] h-0.5 bg-gold/30 -translate-y-1/2" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Mobile vertical connector */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="relative pl-20 lg:pl-0"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={cardVariants}
                >
                  {/* Number badge */}
                  <div
                    className={clsx(
                      'absolute lg:relative left-0 lg:left-auto lg:mx-auto',
                      'flex items-center justify-center w-16 h-16 rounded-full',
                      'bg-gold text-white text-2xl font-extrabold shadow-lg z-10 mb-6'
                    )}
                  >
                    {step.number}
                  </div>

                  <div className="bg-light-gray rounded-xl p-6 lg:p-8 border border-gray-200/60 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-teal flex-shrink-0" />
                      <h3 className="text-2xl font-bold text-navy">{step.title}</h3>
                    </div>
                    <p className="text-text-muted mb-4 leading-relaxed">{step.description}</p>
                    <p className="text-sm font-semibold text-gold mb-4">{step.duration}</p>
                    <ul className="space-y-2">
                      {step.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm text-navy">
                          <CheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ------------------------------------------------------------ */}
      {/*  3. What's Included                                           */}
      {/* ------------------------------------------------------------ */}
      <SectionWrapper className="bg-light-gray" ariaLabel="What is included in every engagement">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Every Engagement Includes
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            No hidden fees, no fluff. Here is exactly what you get when you work with LoneStar
            Intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {includedItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="flex items-center gap-4 bg-white rounded-lg p-5 shadow-sm border border-gray-200/60"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardVariants}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy/5">
                  <Icon className="w-6 h-6 text-teal" />
                </div>
                <span className="font-semibold text-navy">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ------------------------------------------------------------ */}
      {/*  4. Differentiator Block                                      */}
      {/* ------------------------------------------------------------ */}
      <SectionWrapper className="bg-white" ariaLabel="Why this approach works">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Why This Approach Works
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: pull quote */}
          <motion.blockquote
            className="border-l-4 border-gold pl-6 text-2xl md:text-3xl font-bold text-navy leading-snug"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            &ldquo;Most AI initiatives fail because they skip alignment and jump straight to
            tools. We fix that.&rdquo;
          </motion.blockquote>

          {/* Right: proof points */}
          <motion.ul
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {[
              'Executive buy-in is secured before any workshop begins, ensuring organizational commitment.',
              'Hands-on practice with real workflows means skills transfer immediately to daily work.',
              'A custom AI Playbook gives your team a reference guide long after the session ends.',
              '30-day follow-up keeps momentum alive and catches adoption gaps early.',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-text-muted leading-relaxed">
                <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* AEO paragraph */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-text-muted leading-relaxed">
            AI enablement consulting is the practice of helping organizations adopt artificial
            intelligence through leadership alignment, hands-on training, and scalable adoption
            frameworks. LoneStar Intelligence delivers this through a proven 3-step engagement
            model\u2014Buy-In, Live Enablement, and Adopt &amp; Scale\u2014designed specifically
            for businesses in Austin and across Texas that want measurable results without the
            complexity of a traditional consulting engagement.
          </p>
        </div>
      </SectionWrapper>

      {/* ------------------------------------------------------------ */}
      {/*  5. FAQs                                                      */}
      {/* ------------------------------------------------------------ */}
      <SectionWrapper className="bg-light-gray" id="faq" ariaLabel="Frequently asked questions">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>

      {/* ------------------------------------------------------------ */}
      {/*  6. CTA Banner                                                */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-gold py-16 md:py-20">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to start your AI journey?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Book a free consultation to see how our 3-step process can transform the way your
            team works.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button to="/contact" variant="secondary" className="border-white text-white hover:bg-white hover:text-navy">
              Book a Consultation
            </Button>
            <Button to="/services" variant="ghost" className="border-white text-white hover:bg-white hover:text-navy">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HowItWorksPage;
