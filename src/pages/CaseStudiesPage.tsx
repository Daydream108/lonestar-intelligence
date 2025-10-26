import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
// FIX: Changed named import for Button to default import
import Button from '../components/Button';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SectionWrapper className="text-center bg-gray-50/70">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark">Real-World AI Success Stories</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          See how we've helped Texas businesses like yours leverage AI to drive growth, efficiency, and innovation. Our case studies are coming soon.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Check Back Soon!</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We're currently compiling our success stories to share with you. In the meantime, discover how our process works or get in touch for a consultation.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button to="/how-it-works" variant="primary">Our Process</Button>
            <Button to="/contact" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CaseStudiesPage;