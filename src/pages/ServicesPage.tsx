import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Briefcase,
  Target,
  Laptop,
  MessageSquare,
  Phone,
  BookOpen,
  Presentation,
  FileText,
  CheckCircle2,
  Clock,
  MapPin,
  Users,
  ArrowRight,
} from 'lucide-react';
import clsx from 'clsx';
import Button from '../components/Button';
import { SectionWrapper } from '../components/SectionWrapper';
import { FAQAccordion } from '../components/FAQAccordion';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ServiceCard {
  title: string;
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  description: string;
  bullets: string[];
  details: { duration: string; format: string; size: string };
}

const services: ServiceCard[] = [
  {
    title: 'Corporate Leadership AI Summit',
    icon: <Briefcase className="w-8 h-8" />,
    badge: 'EXECUTIVE',
    badgeColor: 'bg-gold/10 text-gold',
    description:
      'A high-impact session designed for C-suite leaders and senior executives who need to understand how AI transforms business strategy. We cut through the hype and focus on what matters: aligning leadership around a clear AI vision, identifying high-value opportunities, and building an actionable roadmap your organization can execute with confidence.',
    bullets: [
      'A prioritized AI opportunity map tailored to your industry and business model',
      'Executive alignment on where AI fits in your growth strategy',
      'A 90-day action plan with clear owners, milestones, and success metrics',
      'A shared vocabulary and framework for evaluating future AI investments',
    ],
    details: {
      duration: 'Half or Full Day',
      format: 'In-Person or Virtual',
      size: 'Up to 20 Executives',
    },
  },
  {
    title: 'AI Enablement for GTM Teams',
    icon: <Target className="w-8 h-8" />,
    badge: 'GTM TEAMS',
    badgeColor: 'bg-teal/10 text-teal',
    description:
      'A hands-on workshop built for marketing, sales, and revenue teams ready to integrate AI into their daily workflows. Participants don\'t just learn about AI -- they practice using it in real time to ideate campaigns, write content, segment audiences, and accelerate pipeline. Every exercise is drawn from real GTM scenarios so teams leave with skills they can apply immediately.',
    bullets: [
      'Hands-on experience with AI tools for content creation, prospecting, and campaign planning',
      'Custom prompt libraries and workflow templates built during the session',
      'A clear understanding of where AI adds leverage across your GTM motion',
      'Confidence to experiment and iterate with AI tools independently after the workshop',
    ],
    details: {
      duration: 'Full Day Workshop',
      format: 'In-Person or Virtual',
      size: 'Teams of 5-30',
    },
  },
  {
    title: 'AI for Everyday Work',
    icon: <Laptop className="w-8 h-8" />,
    badge: 'ALL TEAMS',
    badgeColor: 'bg-gray-100 text-gray-600',
    description:
      'A practical, approachable introduction to AI for any team in your organization. This session demystifies AI and shows employees how to use it for everyday tasks like writing, summarizing, brainstorming, and organizing information. Participants leave feeling empowered rather than overwhelmed, with tools and techniques they can start using the same day.',
    bullets: [
      'Practical fluency with AI assistants for writing, research, and problem-solving',
      'A personal AI toolkit with prompts and workflows customized to each role',
      'Strategies for using AI responsibly and effectively within company guidelines',
      'The confidence to explore new AI capabilities on their own going forward',
    ],
    details: {
      duration: 'Half Day',
      format: 'In-Person or Virtual',
      size: 'Any Team Size',
    },
  },
];

const processSteps = [
  {
    icon: <Phone className="w-7 h-7" />,
    title: 'Discovery Call',
    description:
      'We learn about your team, goals, and current AI maturity so we can design the right experience.',
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: 'Custom Curriculum',
    description:
      'Every session is built from scratch using your industry context, tools, and real-world scenarios.',
  },
  {
    icon: <Presentation className="w-7 h-7" />,
    title: 'Live Session',
    description:
      'Interactive, hands-on delivery where participants practice AI skills in real time -- not just watch slides.',
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: 'Playbook Delivery',
    description:
      'Your team receives a custom playbook with prompts, frameworks, and next steps they can use immediately.',
  },
];

const faqItems = [
  {
    question: 'How much do LoneStar Intelligence sessions cost?',
    answer:
      'Pricing varies based on session type, duration, group size, and whether the engagement is in-person or virtual. We provide a transparent quote after the discovery call so you know exactly what to expect. There are no hidden fees.',
  },
  {
    question: 'Can sessions be customized for our industry?',
    answer:
      'Absolutely. Every LoneStar Intelligence session is built around your specific industry, team structure, and business goals. We tailor examples, exercises, and deliverables so the content feels directly relevant to the work your team does every day.',
  },
  {
    question: 'How many people can attend a session?',
    answer:
      'Our Executive Summit supports up to 20 participants. The GTM Enablement workshop accommodates teams of 5 to 30. AI for Everyday Work scales to any team size. For larger groups, we design multi-session programs that maintain an intimate, interactive experience.',
  },
  {
    question: 'What kind of follow-up support do you provide?',
    answer:
      'Every engagement includes a custom playbook with prompts, frameworks, and action items. We also offer optional follow-up packages that include check-in calls, additional coaching sessions, and ongoing access to updated resources as AI tools evolve.',
  },
  {
    question: 'What is the difference between the Executive Summit and the GTM workshop?',
    answer:
      'The Corporate Leadership AI Summit focuses on strategy, vision, and organizational alignment for senior leaders. The GTM Enablement workshop is a hands-on, tool-driven experience designed for marketing, sales, and revenue teams who need to apply AI to daily workflows. Many organizations book both to align leadership and execution teams.',
  },
];

/* ------------------------------------------------------------------ */
/*  Structured Data                                                    */
/* ------------------------------------------------------------------ */

const serviceSchemaItems = services.map((s, i) => ({
  '@type': 'Service',
  position: i + 1,
  name: s.title,
  description: s.description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'LoneStar Intelligence',
    url: 'https://www.lonestarintelligence.com',
  },
  areaServed: ['Austin', 'Dallas', 'Houston', 'San Antonio'],
  serviceType: 'AI Consulting',
}));

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: serviceSchemaItems,
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
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Consulting Services | LoneStar Intelligence</title>
        <meta
          name="description"
          content="LoneStar Intelligence offers hands-on AI enablement sessions for executives, GTM teams, and entire organizations in Austin, Dallas, Houston, and San Antonio."
        />
        <link rel="canonical" href="https://www.lonestarintelligence.com/services" />
        <meta property="og:title" content="AI Consulting Services | LoneStar Intelligence" />
        <meta
          property="og:description"
          content="Hands-on AI enablement sessions built around how your team actually works. Executive summits, GTM workshops, and company-wide programs."
        />
        <meta property="og:url" content="https://www.lonestarintelligence.com/services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ============================================================ */}
      {/*  1. Page Hero                                                 */}
      {/* ============================================================ */}
      <section className="relative bg-navy min-h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <motion.h1
            className="text-hero-md md:text-hero text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI Services Built Around How Your Team Actually Works
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Live, hands-on sessions that give your people the confidence and skills to use AI
            effectively -- not another slide deck they forget by Friday.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button to="/contact" variant="primary">
              Book a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. Service Cards                                             */}
      {/* ============================================================ */}
      <SectionWrapper className="bg-white" id="offerings" ariaLabel="Service offerings">
        <div className="text-center mb-14">
          <h2 className="text-section text-navy">Choose the Session That Fits Your Team</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="text-navy">{service.icon}</div>
                <div>
                  <span
                    className={clsx(
                      'inline-block text-label uppercase px-3 py-1 rounded-full mb-2',
                      service.badgeColor,
                    )}
                  >
                    {service.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-navy">{service.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-muted leading-7 mb-6">{service.description}</p>

              {/* Bullets */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                  What You'll Walk Away With
                </h4>
                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details row */}
              <div className="flex flex-wrap gap-4 text-sm text-text-muted border-t border-gray-100 pt-5 mb-6">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {service.details.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {service.details.format}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  {service.details.size}
                </span>
              </div>

              {/* CTA */}
              <Button to="/contact" variant="primary">
                Book This Session <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}

          {/* Custom Engagement Card */}
          <motion.div
            className="border-2 border-dashed border-gray-300 rounded-2xl p-8 md:p-10 bg-gray-50/50 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <MessageSquare className="w-8 h-8 text-navy mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-navy mb-3">Need Something Custom?</h3>
            <p className="text-text-muted max-w-xl mx-auto leading-7 mb-6">
              We design multi-day and industry-specific programs for organizations with unique
              challenges. Whether you need a phased rollout across departments, a recurring
              enablement series, or a deep-dive into a specific AI use case, we will build it
              around your goals.
            </p>
            <Button to="/contact" variant="secondary">
              Let's Talk <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ============================================================ */}
      {/*  3. How Sessions Work                                         */}
      {/* ============================================================ */}
      <SectionWrapper className="bg-light-gray" id="process" ariaLabel="How sessions work">
        <div className="text-center mb-14">
          <h2 className="text-section text-navy">
            What to Expect From a LoneStar Intelligence Session
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4 text-navy">
                {step.icon}
              </div>
              <h3 className="text-card-title text-navy mb-2">{step.title}</h3>
              <p className="text-text-muted text-sm leading-6">{step.description}</p>
              {idx < processSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-gold mx-auto mt-4 hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ============================================================ */}
      {/*  4. AEO Definition Block                                      */}
      {/* ============================================================ */}
      <SectionWrapper className="bg-white" as="aside" ariaLabel="What is AI enablement">
        <div className="max-w-3xl mx-auto border-l-4 border-gold pl-8 py-2">
          <h2 className="text-2xl font-bold text-navy mb-4">What Is AI Enablement?</h2>
          <p className="text-gray-700 leading-7 mb-4">
            AI enablement is the practice of equipping teams with the knowledge, tools, and
            confidence they need to integrate artificial intelligence into their daily work. Unlike
            traditional training that focuses on theory or a single tool, AI enablement is built
            around real workflows, real business goals, and real-time practice so that participants
            leave ready to act -- not just aware of possibilities.
          </p>
          <p className="text-gray-700 leading-7">
            LoneStar Intelligence delivers AI enablement through live, instructor-led sessions
            customized for each organization. Sessions cover prompt engineering, tool selection,
            workflow automation, and responsible AI use. The goal is lasting behavior change: teams
            that habitually reach for AI to work faster, smarter, and more creatively across every
            function.
          </p>
        </div>
      </SectionWrapper>

      {/* ============================================================ */}
      {/*  5. Services FAQs                                             */}
      {/* ============================================================ */}
      <SectionWrapper className="bg-light-gray" id="faq" ariaLabel="Frequently asked questions">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-section text-navy text-center mb-10">Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>

      {/* ============================================================ */}
      {/*  6. CTA Banner                                                */}
      {/* ============================================================ */}
      <section className="bg-navy py-16 md:py-20">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to bring AI to your team?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Let's design a session that fits your goals, your people, and your timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button to="/contact" variant="primary">
              Book a Consultation
            </Button>
            <Button to="/how-it-works" variant="ghost">
              See How It Works
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ServicesPage;
