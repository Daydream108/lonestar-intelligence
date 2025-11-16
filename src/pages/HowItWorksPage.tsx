import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import Button from '../components/Button';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  reverse?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, icon, reverse = false }) => {
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
            <div className="md:w-1/2 flex justify-center p-8">
                <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark">
                    {icon}
                </div>
            </div>
            <div className="md:w-1/2">
                <p className="text-brand-dark font-bold tracking-wider mb-2">{step}</p>
                <h3 className="text-3xl font-bold text-brand-dark mb-4">{title}</h3>
                <p className="text-gray-700 text-lg">{description}</p>
            </div>
        </div>
    );
};


const HowItWorksPage: React.FC = () => {
  return (
    <>
      <SectionWrapper className="text-center bg-gray-50/70">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark">From vision to execution—our process makes AI adoption real.</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Our 3-step approach ensures every engagement creates lasting impact. We start with leadership alignment, then move into hands-on enablement, and conclude with adoption tools that embed AI into everyday work.
        </p>
      </SectionWrapper>
      
      <SectionWrapper>
        <div className="space-y-24">
            <ProcessStep 
                step="STEP 01"
                title="Buy-In"
                description="The journey begins with a strategic session for leadership. We inspire and align decision-makers around what AI can unlock for the business, ensuring everyone is invested in a shared vision for success."
                icon={<BuyInIcon />}
            />
             <ProcessStep 
                step="STEP 02"
                title="Live Enablement"
                description="This is where theory becomes practice. We lead interactive, hands-on workshops where your teams apply AI directly to their real-world tasks, building confidence and demonstrating immediate value."
                icon={<EnablementIcon />}
                reverse={true}
            />
             <ProcessStep 
                step="STEP 03"
                title="Adopt & Scale"
                description="To ensure momentum continues long after our session, we provide custom playbooks and systems. These tools help sustain adoption, scale best practices, and embed AI into your company’s DNA."
                icon={<AdoptIcon />}
            />
        </div>
      </SectionWrapper>
      
      <SectionWrapper>
        <div className="bg-brand-dark text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold">Ready to take the first step?</h2>
            <div className="mt-8">
              <Button to="/contact" variant="primary">Book a Consultation</Button>
            </div>
        </div>
      </SectionWrapper>
    </>
  );
};


const BuyInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const EnablementIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>;
const AdoptIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8a5 5 0 0 1-1.3 8.7 5 5 0 0 1-8.7-1.3 5 5 0 0 1 1.3-8.7 5 5 0 0 1 8.7 1.3z"/></svg>;

export default HowItWorksPage;
