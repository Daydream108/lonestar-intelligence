import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import Button from '../components/Button';

interface ServiceDetailProps {
  title: string;
  description: string;
  outcome: string;
  icon: React.ReactNode;
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "name": "AI for Everyday Work",
      "description": "A practical introduction to AI adoption for all employees. We focus on how AI can simplify communication, organization, and creative problem-solving. The result is a more efficient, confident, and empowered workforce.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "LoneStar Intelligence"
      },
      "areaServed": ["Austin", "Dallas", "Houston", "San Antonio"]
    },
    {
      "@type": "Service",
      "name": "AI Enablement for GTM Teams",
      "description": "A hands-on experience designed for marketing, sales, and revenue teams to learn how to integrate AI into their workflows. Participants see—and practice—how to use AI to ideate campaigns, write content, segment audiences, and accelerate execution.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "LoneStar Intelligence"
      },
      "areaServed": ["Austin", "Dallas", "Houston", "San Antonio"]
    },
    {
      "@type": "Service",
      "name": "Corporate Leadership AI Summit",
      "description": "A high-impact session that helps executive teams understand how AI transforms business strategy. We explore how leadership can align on priorities, identify areas of opportunity, and create an actionable AI roadmap that supports long-term growth.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "LoneStar Intelligence"
      },
      "areaServed": ["Austin", "Dallas", "Houston", "San Antonio"]
    }
  ]
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, outcome, icon }) => {
    return (
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200/80">
            <div className="flex items-start gap-6">
                <div className="flex-shrink-0 text-brand-dark">{icon}</div>
                <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-3">{title}</h3>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <p className="font-semibold text-brand-dark">
                        <span className="font-bold text-gray-500">Outcome:</span> {outcome}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SectionWrapper className="text-center bg-gray-50/70">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark">AI isn’t the future—it’s your competitive edge today.</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          LoneStar Intelligence delivers tailored sessions for businesses in <strong>Austin, Dallas, Houston, and San Antonio</strong>. We help you understand, adopt, and execute AI strategies that drive measurable results. Our programs are built around clarity, collaboration, and action—so every participant leaves with confidence and capability.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto space-y-12">
            <ServiceDetail 
                title="AI for Everyday Work"
                description="A practical introduction to AI adoption for all employees. We focus on how AI can simplify communication, organization, and creative problem-solving. The result is a more efficient, confident, and empowered workforce."
                outcome="Teams adopt AI into their daily routines with ease, improving productivity and reducing friction across departments."
                icon={<WorkflowIcon />}
            />

            <ServiceDetail 
                title="AI Enablement for GTM Teams"
                description="A hands-on experience designed for marketing, sales, and revenue teams to learn how to integrate AI into their workflows. Participants see—and practice—how to use AI to ideate campaigns, write content, segment audiences, and accelerate execution."
                outcome="Teams leave equipped with practical skills, new efficiencies, and the momentum to drive faster go-to-market results."
                icon={<GTMIcon />}
            />

            <ServiceDetail 
                title="Corporate Leadership AI Summit"
                description="A high-impact session that helps executive teams understand how AI transforms business strategy. We explore how leadership can align on priorities, identify areas of opportunity, and create an actionable AI roadmap that supports long-term growth."
                outcome="Clear executive buy-in, a shared understanding of AI’s role, and an inspired vision for what’s possible across the organization."
                icon={<LeadershipIcon />}
            />
        </div>
      </SectionWrapper>
      
      <SectionWrapper>
        <div className="bg-brand-dark text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold">Discover how AI can elevate your business.</h2>
            <div className="mt-8">
              <Button to="/contact" variant="primary">Book a Consultation</Button>
            </div>
        </div>
      </SectionWrapper>
    </>
  );
};


const LeadershipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>;
const GTMIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9.09 9.91 11.02 2.94-2.94 11.02-11.02-2.94z"/><path d="M14 12c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"/></svg>;
const WorkflowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22a9 9 0 0 0 9-9"/><path d="M3 13a9 9 0 0 0 9 9"/><path d="M3 3l18 18"/></svg>;

export default ServicesPage;