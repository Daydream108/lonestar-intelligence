import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Button } from '../components/Button';

const caseStudiesData = [
    {
        company: "InnovateTX",
        industry: "B2B SaaS",
        challenge: "Their marketing team was spending over 20 hours per week on manual content creation, leading to slow campaign launches and inconsistent messaging across channels.",
        solution: "We conducted an 'AI for GTM Teams' workshop, introducing them to AI-powered tools for content ideation, copywriting, and on-brand creative generation. We also delivered a custom playbook for integrating these tools into their existing Asana workflows.",
        quote: "The 'aha' moment for our team was seeing how quickly we could generate high-quality, on-brand content. LoneStar didn't just show us tools; they showed us a new way to operate.",
        quoteAuthor: "Marketing Director, InnovateTX",
        metrics: [
            { value: "50%", label: "Reduction in Content Creation Time" },
            { value: "30%", label: "Increase in Campaign Output" },
            { value: "25%", label: "Higher Email Engagement" },
        ]
    },
    {
        company: "GrowthCorp",
        industry: "Financial Services",
        challenge: "The sales development team struggled with personalization at scale. Their generic outreach emails were yielding low reply rates, and reps were spending too much time on research.",
        solution: "Our 'AI Enablement' session focused on personalizing sales outreach. We trained the team on AI tools to research prospects, draft hyper-relevant emails, and automate follow-up sequences based on engagement.",
        quote: "Our pipeline has never looked better. The team is now having meaningful conversations instead of just sending cold emails. It's been a complete game-changer for our outbound strategy.",
        quoteAuthor: "VP of Sales, GrowthCorp",
        metrics: [
            { value: "2x", label: "Increase in Meeting Bookings" },
            { value: "40%", label: "Higher Reply Rates" },
            { value: "8", label: "Hours Saved Per Rep, Per Week" },
        ]
    },
    {
        company: "Apex Logistics",
        industry: "Supply Chain & Logistics",
        challenge: "Leadership needed clearer, more timely insights from operational data but was bogged down in complex spreadsheets and manual reporting that took days to compile.",
        solution: "We implemented an AI-powered data analysis workflow in a 'Corporate Leadership AI Summit.' We showed executives how to use natural language to query their data, generate automated summaries, and visualize key performance indicators in real-time.",
        quote: "We went from reactive to proactive. Instead of waiting a week for a report, we can now ask critical questions and get answers instantly. Decision-making is faster and smarter across the board.",
        quoteAuthor: "COO, Apex Logistics",
        metrics: [
            { value: "90%", label: "Reduction in Reporting Time" },
            { value: "15%", label: "Improvement in Operational Efficiency" },
            { value: "100%", label: "Adoption by Leadership Team" },
        ]
    }
];

interface CaseStudy {
    company: string;
    industry: string;
    challenge: string;
    solution: string;
    quote: string;
    quoteAuthor: string;
    metrics: { value: string; label: string }[];
}

const Metric: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-3xl md:text-4xl font-extrabold text-brand-dark">{value}</p>
        <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
);

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 overflow-hidden">
        <div className="p-8 md:p-10">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{study.industry}</p>
            <h2 className="text-3xl font-bold text-brand-dark mt-1">{study.company}</h2>
        </div>
        <div className="p-8 md:p-10 bg-gray-50/70 border-y border-gray-200/80">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold text-brand-dark mb-2">The Challenge</h3>
                    <p className="text-gray-700">{study.challenge}</p>
                </div>
                 <div>
                    <h3 className="font-bold text-brand-dark mb-2">The Solution</h3>
                    <p className="text-gray-700">{study.solution}</p>
                </div>
            </div>
        </div>
        <div className="p-8 md:p-10">
            <blockquote className="border-l-4 border-brand-dark pl-6 italic text-gray-800">
                <p>"{study.quote}"</p>
                 <cite className="block mt-4 not-italic font-semibold text-brand-dark">{study.quoteAuthor}</cite>
            </blockquote>
        </div>
        <div className="p-8 md:p-10 bg-gray-50/70 border-t border-gray-200/80">
             <h3 className="text-center font-bold text-brand-dark mb-6">Key Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {study.metrics.map(metric => <Metric key={metric.label} {...metric} />)}
            </div>
        </div>
    </div>
);


const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SectionWrapper className="text-center bg-gray-50/70">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark">Real-World AI Success Stories</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          See how we've helped Texas businesses like yours leverage AI to drive growth, efficiency, and innovation.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto space-y-16">
            {caseStudiesData.map(study => <CaseStudyCard key={study.company} study={study} />)}
        </div>
      </SectionWrapper>
      
      <SectionWrapper>
        <div className="bg-brand-dark text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold">Ready to write your own success story?</h2>
            <div className="mt-8">
              <Button to="/contact" variant="primary">Book a Consultation</Button>
            </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CaseStudiesPage;
