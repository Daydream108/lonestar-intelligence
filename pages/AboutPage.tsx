
import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';

const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => {
    return (
        <div className="text-center p-6">
            <div className="flex items-center justify-center mx-auto mb-4 w-12 h-12 text-[#0B1C2E]">
                {icon}
            </div>
            <h4 className="text-xl font-bold text-[#0B1C2E]">{title}</h4>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
}

const AboutPage: React.FC = () => {
  return (
    <>
      <SectionWrapper className="bg-gray-50/70">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1C2E]">Built in Texas. Designed for Texas businesses.</h1>
        </div>
      </SectionWrapper>
      
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1C2E] mb-4 text-center">Our Mission</h2>
          <div className="space-y-4 text-lg text-gray-700 text-center">
            <p>
              LoneStar Intelligence was founded to bridge the gap between AI theory and real-world execution.
            </p>
            <p>
              Our mission is simple: to help Texas companies harness AI in ways that are practical, profitable, and scalable.
            </p>
            <p>
              We combine strategic insight with live, hands-on experiences that give teams confidence, clarity, and measurable outcomes.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50/70">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/3">
                <img src="/brett-pascall.jpg" alt="Brett Pascall, Founder & AI Strategist" className="rounded-lg shadow-xl mx-auto w-full max-w-xs object-cover" />
            </div>
            <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-[#0B1C2E] tracking-wide">Founder & AI Strategist</h3>
                <h2 className="text-3xl font-bold text-[#0B1C2E] mt-1">Brett Pascall</h2>
                <p className="mt-4 text-gray-700">
                    With a background in enterprise relationship management and customer success, Brett brings years of experience helping organizations scale through technology and strategy. He founded LoneStar Intelligence to help Texas businesses unlock the same level of intelligence and efficiency through AI.
                </p>
            </div>
        </div>
      </SectionWrapper>

       <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0B1C2E] mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              To make Texas the most AI-enabled business ecosystem in America — where every organization, from local startups to established enterprises, operates smarter, faster, and more intelligently through accessible, real-world AI adoption.
            </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50/70">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2E]">Our Values</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ValueCard 
                title="Grit"
                description="We value real progress over hype. We tackle complex challenges to drive results."
                icon={<GritIcon />}
            />
            <ValueCard 
                title="Clarity"
                description="We make AI simple and actionable, turning complex concepts into practical tools."
                icon={<ClarityIcon />}
            />
             <ValueCard 
                title="Intelligence"
                description="We use data and strategy to drive results and empower smarter decision-making."
                icon={<IntelligenceIcon />}
            />
        </div>
      </SectionWrapper>
      
      <div className="bg-[#0B1C2E] text-white py-8">
        <div className="container mx-auto px-6 text-center">
            <h3 className="font-semibold tracking-wider">Proudly serving businesses across Austin, Dallas, Houston, and San Antonio.</h3>
        </div>
      </div>
    </>
  );
};

const GritIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const ClarityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const IntelligenceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6m-4 0H4v6h4zM20 20v-6h-4v6h4zM12 2v2M4.93 4.93l1.41 1.41M17.66 6.34l1.41-1.41M22 12h-2M2 12H0m12 6a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z"/></svg>;

export default AboutPage;
