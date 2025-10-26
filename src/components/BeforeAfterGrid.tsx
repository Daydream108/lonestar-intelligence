import React from 'react';
import { SectionWrapper } from './SectionWrapper';

const cardContent = [
    {
        title: "Marketing Content",
        description: "Before: Your team is bogged down by slow content creation and endless approval cycles. After: Generate on-brand briefs, copy, and creative variants in minutes, freeing your team to focus on strategy."
    },
    {
        title: "Sales Outreach",
        description: "Before: Your sales team spends more time writing emails than selling, leading to missed follow-ups. After: Equip your reps to generate and track highly personalized outreach sequences in minutes, keeping their pipeline full."
    },
    {
        title: "Personalization at Scale",
        description: "Before: Your outreach feels generic, resulting in low engagement and even lower reply rates. After: Deliver context-aware messages at scale, making every prospect feel like you've done your homework."
    },
    {
        title: "Insights & Reporting",
        description: "Before: You're stuck in manual spreadsheets, making it impossible to get timely insights. After: Automate your reporting with AI-generated summaries and visuals, delivering clear briefs to leadership on schedule."
    }
];

const WorkSmarterCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
        <div 
          className="bg-white p-6 md:p-8 rounded-[14px] border border-[#E5E8EB] shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
        >
            <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
            <p className="text-gray-600 flex-grow">{description}</p>
        </div>
    );
};

export const BeforeAfterGrid: React.FC = () => {
    return (
        <SectionWrapper id="work-smarter" className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Work Smarter, Not Harder</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Four quick upgrades your team feels on day one.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {cardContent.map((item) => (
                    <WorkSmarterCard key={item.title} title={item.title} description={item.description} />
                ))}
            </div>
        </SectionWrapper>
    );
};
