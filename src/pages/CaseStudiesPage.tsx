import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Clock, BarChart3 } from 'lucide-react';
import clsx from 'clsx';
import { SectionWrapper } from '../components/SectionWrapper';
import { FAQAccordion } from '../components/FAQAccordion';
import Button from '../components/Button';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type IndustryFilter = 'All' | 'B2B SaaS' | 'Financial Services' | 'Logistics';

interface CaseStudy {
  company: string;
  industry: IndustryFilter;
  challenge: string;
  solution: string;
  quote: string;
  quoteAuthor: string;
  serviceUsed: string;
  metrics: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    company: 'InnovateTX',
    industry: 'B2B SaaS',
    challenge:
      'Their marketing team was producing only 3-4 pieces of content per week with high agency costs and slow turnaround times. Campaigns consistently launched behind schedule, and the team struggled to maintain consistent messaging across channels.',
    solution:
      'We implemented AI-powered content workflows, built custom prompt libraries tailored to their brand voice, and introduced editorial automation that streamlined the review-to-publish pipeline.',
    quote:
      'The "aha" moment for our team was seeing how quickly we could generate high-quality, on-brand content. LoneStar didn\'t just show us tools; they showed us a new way to operate.',
    quoteAuthor: 'Sarah T., Marketing Director',
    serviceUsed: 'AI Enablement for GTM Teams',
    metrics: [
      { value: '50%', label: 'Reduction in Content Creation Time' },
      { value: '3x', label: 'Content Output' },
      { value: '40%', label: 'Lower Agency Spend' },
    ],
  },
  {
    company: 'GrowthCorp',
    industry: 'Financial Services',
    challenge:
      'The sales development team relied on generic outreach that yielded low response rates. Reps were spending too much time manually researching prospects and personalizing emails, leaving little time for actual selling.',
    solution:
      'We deployed AI-powered personalization at scale, creating custom prompt libraries for the sales team that automated prospect research, drafted hyper-relevant emails, and generated follow-up sequences based on engagement signals.',
    quote:
      'Our pipeline has never looked better. The team is now having meaningful conversations instead of just sending cold emails. It\'s been a complete game-changer for our outbound strategy.',
    quoteAuthor: 'Michael G., VP of Sales',
    serviceUsed: 'AI Enablement for GTM Teams',
    metrics: [
      { value: '2x', label: 'Meeting Bookings' },
      { value: '60%', label: 'Less Time on Outreach' },
      { value: '35%', label: 'Higher Response Rate' },
    ],
  },
  {
    company: 'Apex Logistics',
    industry: 'Logistics',
    challenge:
      'Manual reporting consumed 8+ hours per week. Operational data was scattered across spreadsheets and siloed systems, leaving leadership without real-time insights to make timely decisions.',
    solution:
      'We built AI-powered dashboards with automated data aggregation and natural language querying, enabling executives to ask questions in plain English and receive instant, visualized answers.',
    quote:
      'We went from reactive to proactive. Instead of waiting a week for a report, we can now ask critical questions and get answers instantly. Decision-making is faster and smarter across the board.',
    quoteAuthor: 'Daniel R., COO',
    serviceUsed: 'Corporate Leadership AI Summit',
    metrics: [
      { value: '90%', label: 'Faster Reporting' },
      { value: '8 hrs', label: 'Saved Per Week' },
      { value: '100%', label: 'Real-Time Decision Making' },
    ],
  },
];

const industryFilters: IndustryFilter[] = [
  'All',
  'B2B SaaS',
  'Financial Services',
  'Logistics',
];

const aggregateStats = [
  { value: '47%', label: 'Avg. Time Saved' },
  { value: '2.3x', label: 'Avg. Output Increase' },
  { value: '92%', label: 'Client Satisfaction' },
  { value: '< 4 wks', label: 'Time to First Result' },
];

const faqItems = [
  {
    question: 'Are these results typical?',
    answer:
      'While results vary based on team size, industry, and existing workflows, the case studies above represent the types of outcomes our clients commonly achieve. We set realistic expectations during our discovery call and tailor every engagement for maximum impact.',
  },
  {
    question: 'How quickly can we expect to see results?',
    answer:
      'Most clients see measurable improvements within the first 2-4 weeks of implementation. Quick wins like time savings on repetitive tasks are often visible immediately, while larger strategic outcomes typically materialize within 60-90 days.',
  },
  {
    question: 'Do you work with businesses outside of these industries?',
    answer:
      'Absolutely. While our case studies highlight B2B SaaS, financial services, and logistics, we work with businesses across a wide range of industries including healthcare, real estate, legal, and professional services. Our AI frameworks are adaptable to virtually any business workflow.',
  },
  {
    question: 'Can I speak to a reference client?',
    answer:
      'Yes. We are happy to connect you with a current client who can speak to their experience working with LoneStar Intelligence. Simply mention this during your discovery call, and we will coordinate an introduction.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We establish clear KPIs at the outset of every engagement, such as time saved, output volume, cost reduction, or conversion improvements. We track progress through regular check-ins and provide a final impact report at the conclusion of each project.',
  },
];

/* ------------------------------------------------------------------ */
/*  JSON-LD Schemas                                                    */
/* ------------------------------------------------------------------ */

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: caseStudies.map((cs, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Article',
      name: `${cs.company} Case Study`,
      description: cs.challenge,
      author: {
        '@type': 'Organization',
        name: 'LoneStar Intelligence',
      },
    },
  })),
};

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LoneStar Intelligence',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '27',
    bestRating: '5',
  },
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
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

const StatPill: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.3 }}
    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-sm font-semibold text-white"
  >
    {icon}
    {label}
  </motion.div>
);

const CaseStudyCard: React.FC<{ study: CaseStudy; index: number }> = ({
  study,
  index,
}) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-lg border border-gray-200/80 overflow-hidden"
  >
    {/* Header */}
    <div className="p-8 md:p-10">
      <p className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider">
        {study.industry}
      </p>
      <h3 className="text-3xl font-bold text-[#0B1F3A] mt-1">
        {study.company}
      </h3>
    </div>

    {/* Challenge vs Solution */}
    <div className="p-8 md:p-10 bg-[#F5F6F8] border-y border-gray-200/80">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-[#0B1F3A] mb-2">The Challenge</h4>
          <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0B1F3A] mb-2">The Solution</h4>
          <p className="text-gray-700 leading-relaxed">{study.solution}</p>
        </div>
      </div>
    </div>

    {/* Testimonial */}
    <div className="p-8 md:p-10">
      <blockquote className="border-l-4 border-[#C8922A] pl-6 italic text-gray-800">
        <p className="leading-relaxed">&ldquo;{study.quote}&rdquo;</p>
        <cite className="block mt-4 not-italic font-semibold text-[#0B1F3A]">
          &mdash; {study.quoteAuthor}
        </cite>
      </blockquote>
    </div>

    {/* Key Results */}
    <div className="p-8 md:p-10 bg-[#F5F6F8] border-t border-gray-200/80">
      <h4 className="text-center font-bold text-[#0B1F3A] mb-6">
        Key Results
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {study.metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-[#1A7A6E]">
              {m.value}
            </p>
            <p className="text-sm text-[#6B7280] mt-1">{m.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Service badge */}
    <div className="px-8 md:px-10 pb-8 md:pb-10 pt-4">
      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C8922A] hover:underline"
      >
        Service Used: {study.serviceUsed}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.article>
);

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

const CaseStudiesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<IndustryFilter>('All');

  const filteredStudies = useMemo(
    () =>
      activeFilter === 'All'
        ? caseStudies
        : caseStudies.filter((s) => s.industry === activeFilter),
    [activeFilter]
  );

  return (
    <>
      {/* ---- Helmet ---- */}
      <Helmet>
        <title>
          Case Studies | AI Results for Texas Businesses | LoneStar Intelligence
        </title>
        <meta
          name="description"
          content="Discover how Texas businesses use AI consulting from LoneStar Intelligence to save time, grow pipelines, and accelerate reporting. Real results from real engagements."
        />
        <link
          rel="canonical"
          href="https://www.lonestarintelligence.com/case-studies"
        />
        <meta
          property="og:title"
          content="Case Studies | LoneStar Intelligence"
        />
        <meta
          property="og:description"
          content="See how LoneStar Intelligence helps Texas businesses achieve measurable AI results - 50%+ time saved, 2x pipeline growth, and 90% faster reporting."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.lonestarintelligence.com/case-studies"
        />
        <meta
          property="og:image"
          content="https://www.lonestarintelligence.com/og-case-studies.jpg"
        />
      </Helmet>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ============================================================ */}
      {/* 1. Hero                                                       */}
      {/* ============================================================ */}
      <section className="relative bg-[#0B1F3A] text-white min-h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="container mx-auto px-6 py-16 md:py-24 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Real AI Results for Real Texas Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            These are not hypothetical projections. These are actual workflows,
            actual teams, and actual outcomes from businesses across Texas.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <StatPill
              icon={<Clock className="w-4 h-4" />}
              label="50%+ Time Saved"
            />
            <StatPill
              icon={<TrendingUp className="w-4 h-4" />}
              label="2x Pipeline Growth"
            />
            <StatPill
              icon={<BarChart3 className="w-4 h-4" />}
              label="90% Faster Reporting"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. Case Study Cards                                           */}
      {/* ============================================================ */}
      <SectionWrapper className="bg-white" id="case-studies" ariaLabel="Case studies">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <p className="text-sm text-[#6B7280] italic text-center mb-10 max-w-3xl mx-auto">
            The following case studies represent the types of results LoneStar
            Intelligence clients experience. Company names have been changed to
            protect client confidentiality. Results may vary.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={clsx(
                  'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1A7A6E]/40',
                  activeFilter === filter
                    ? 'bg-[#1A7A6E] text-white shadow-md'
                    : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="space-y-14">
            {filteredStudies.map((study, i) => (
              <CaseStudyCard key={study.company} study={study} index={i} />
            ))}

            {filteredStudies.length === 0 && (
              <p className="text-center text-[#6B7280] py-12">
                No case studies match this filter. Try selecting a different
                industry.
              </p>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* ============================================================ */}
      {/* 3. Aggregate Results                                          */}
      {/* ============================================================ */}
      <SectionWrapper className="bg-[#F5F6F8]" ariaLabel="Aggregate results">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A]">
            Results Across All Engagements
          </h2>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {aggregateStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-[#1A7A6E]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-[#6B7280]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            LoneStar Intelligence helps businesses in Austin, Dallas, Houston,
            and San Antonio unlock measurable gains through AI-powered workflows.
            From content creation and sales outreach to executive reporting, our
            clients consistently achieve faster execution, lower costs, and
            smarter decision-making.
          </p>
        </div>
      </SectionWrapper>

      {/* ============================================================ */}
      {/* 4. CTA                                                        */}
      {/* ============================================================ */}
      <SectionWrapper className="bg-white" ariaLabel="Call to action">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A]">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Book a free discovery call and find out how AI can transform your
            team's workflows in as little as two weeks.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="primary">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ============================================================ */}
      {/* 5. FAQs                                                       */}
      {/* ============================================================ */}
      <SectionWrapper className="bg-[#F5F6F8]" ariaLabel="Frequently asked questions">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>
    </>
  );
};

export default CaseStudiesPage;
