import React from 'react';
import Button from '../components/Button';
import { SectionWrapper } from '../components/SectionWrapper';
import { Link } from 'react-router-dom';
import { BeforeAfterGrid } from '../components/BeforeAfterGrid';


const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white relative flex items-center justify-center py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(#C0C7CF_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark leading-tight mb-4">
            Empowering Texas teams to see and use the power of AI in real time.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            We help businesses across <strong>Austin, Dallas, Houston, and San Antonio</strong> integrate AI into their go-to-market strategy, empowering leaders to scale smarter, grow faster, and operate sharper.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button to="/contact" variant="primary">Book a Consultation</Button>
            <Button to="/how-it-works" variant="secondary">See How It Works</Button>
          </div>
        </div>
      </div>
      
      {/* Hero Brand Lockup */}
      <div className="py-12 md:py-16" aria-hidden="true">
        <div className="max-w-[560px] mx-auto px-6 text-center">
            <div className="w-full h-px bg-[#E5E8EB]"></div>
            <div className="relative inline-flex items-center justify-center my-12">
                <div className="absolute inset-0 -m-12 bg-[radial-gradient(circle,rgba(192,199,207,0.14)_0%,rgba(255,255,255,0)_60%)]"></div>
                <div className="relative flex items-center justify-center gap-5">
                    <svg viewBox="0 0 60 60" className="w-10 h-10 md:w-12 md:h-12 text-brand-dark" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30,2.5 L38.5,19.5 L57.5,22 L43,35 L46.5,53.5 L30,44 L13.5,53.5 L17,35 L2.5,22 L21.5,19.5 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="miter" />
                    </svg>
                    <div className="text-left">
                        <p className="text-xl md:text-2xl font-bold text-brand-dark tracking-[.02em] uppercase">LONESTAR</p>
                        <p className="text-base md:text-lg font-semibold text-brand-dark tracking-[.02em] uppercase">INTELLIGENCE</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-px bg-[#E5E8EB]"></div>
        </div>
      </div>


      {/* Trusted By Section */}
      <SectionWrapper className="bg-white !pt-0">
        <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Trusted by forward-thinking Texas businesses</h3>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 items-center text-gray-500 opacity-75">
                <div className="text-2xl font-bold tracking-wider">InnovateTX</div>
                <div className="text-3xl font-serif italic">GrowthCorp</div>
                 <div className="flex items-center justify-center space-x-2 text-2xl font-semibold">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    <span>Apex</span>
                </div>
                <div className="text-2xl font-light tracking-widest uppercase">Riverbend</div>
            </div>
        </div>
      </SectionWrapper>
      
      {/* How It Works Overview */}
      <SectionWrapper id="how-it-works" className="bg-gray-50/70">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">From Vision to Execution in 3 Steps</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-3 gap-12 relative">
              <TimelineStep num="1" title="Buy-In" description="Align leadership around AI strategy and opportunity." />
              <TimelineStep num="2" title="Live Enablement" description="Conduct a hands-on session showing teams how AI enhances real workflows." />
              <TimelineStep num="3" title="Adopt & Scale" description="Deliver a tailored playbook that embeds AI into daily execution." />
          </div>
        </div>
      </SectionWrapper>

      {/* Service Highlights Section */}
      <SectionWrapper id="services" className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Tailored Sessions for Every Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We deliver clarity, collaboration, and action-oriented results.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="AI for Everyday Work"
              description="A practical session focused on productivity and workflow automation for immediate impact across your entire team."
              linkTo="/services"
            />
            <ServiceCard 
              title="AI Enablement for GTM Teams"
              description="A collaborative workshop for marketing, sales, and revenue teams to integrate AI into campaigns, messaging, and customer engagement."
              linkTo="/services"
            />
            <ServiceCard 
              title="Corporate Leadership AI Summit"
              description="An executive-level session designed to inspire alignment and strategic vision."
              linkTo="/services"
            />
        </div>
      </SectionWrapper>
      
      {/* Before & After Section */}
      <BeforeAfterGrid />

      {/* Testimonials */}
      <SectionWrapper className="bg-gray-50/70">
         <div className="max-w-3xl mx-auto text-center">
             <p className="text-xl md:text-2xl font-medium text-gray-800 italic">
                “LoneStar Intelligence made AI tangible for our team. Everyone left the session with new ideas—and actual tools we use daily.”
             </p>
             <p className="mt-6 font-bold text-brand-dark">Michael G.</p>
             <p className="text-sm text-gray-500">Founder, GrowthCorp</p>
         </div>
      </SectionWrapper>

      {/* Monthly AI Report CTA */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Stay updated with the only AI news that matters for Texas businesses.
            </h2>
            <div className="mt-8">
                <Button 
                    href="https://lonestar-ai-report.beehiiv.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="primary"
                >
                    Join the Monthly AI Report
                </Button>
            </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper>
          <div className="bg-brand-dark text-white rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold">Ready to see AI in action?</h2>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button to="/contact" variant="primary">Book a Consultation</Button>
                <Button to="/contact" variant="secondary">Contact Us</Button>
              </div>
          </div>
      </SectionWrapper>
    </>
  );
};


const TimelineStep: React.FC<{num: string; title: string; description: string}> = ({num, title, description}) => {
    return (
         <div className="text-center p-4">
            <div className="flex items-center justify-center mx-auto mb-4 w-12 h-12 bg-brand-dark text-white font-bold text-xl rounded-full">
                {num}
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

const ServiceCard: React.FC<{title: string; description: string; linkTo: string}> = ({title, description, linkTo}) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{description}</p>
            <Link to={linkTo} className="font-bold text-brand-dark hover:underline self-start">Learn More →</Link>
        </div>
    )
}

export default HomePage;