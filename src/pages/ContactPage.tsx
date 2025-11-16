import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import Button from '../components/Button';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    return (
        <div>
            <h4 className="font-bold text-brand-dark">{question}</h4>
            <p className="mt-1 text-gray-600">{answer}</p>
        </div>
    );
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do you offer remote or onsite sessions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer both. We can tailor the delivery format to best suit your team's needs, whether you're in one office or distributed across Texas."
            }
        },
        {
            "@type": "Question",
            "name": "Can the content be customized for my industry?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Every session is customized to address the unique challenges and opportunities within your industry and business."
            }
        },
        {
            "@type": "Question",
            "name": "How soon can we schedule a session?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typically, we can schedule a session within 2–3 weeks, depending on the level of customization required."
            }
        }
    ]
};


const ContactPage: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SectionWrapper className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark">Let's make AI real for your business.</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Reach out to discuss how we can tailor a session for your leadership team or department. Whether you’re exploring strategy, enablement, or adoption—we’ll show you what’s possible.
        </p>
      </SectionWrapper>

      <SectionWrapper className="!pt-0">
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 p-8 md:p-12">
                <form action="https://formspree.io/f/xanprbgq" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                        <input type="text" name="name" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-dark focus:border-brand-dark"/>
                    </div>
                     <div>
                        <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">Company</label>
                        <input type="text" name="company" id="company" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-dark focus:border-brand-dark"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                        <input type="email" name="email" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-dark focus:border-brand-dark"/>
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea name="message" id="message" rows={4} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-dark focus:border-brand-dark"></textarea>
                    </div>
                    <div>
                        <Button type="submit" variant="primary" className="w-full">Book a Consultation</Button>
                    </div>
                </form>
            </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-gray-50/70">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
                 <h3 className="text-2xl font-bold text-brand-dark mb-6">Frequently Asked Questions</h3>
                 <div className="space-y-6">
                    <FAQItem question="Do you offer remote or onsite sessions?" answer="Yes, we offer both. We can tailor the delivery format to best suit your team's needs, whether you're in one office or distributed across Texas." />
                    <FAQItem question="Can the content be customized for my industry?" answer="Absolutely. Every session is customized to address the unique challenges and opportunities within your industry and business." />
                    <FAQItem question="How soon can we schedule a session?" answer="Typically, we can schedule a session within 2–3 weeks, depending on the level of customization required." />
                 </div>
            </div>
            <div className="w-full h-80 md:h-full rounded-lg overflow-hidden shadow-xl">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440899.2131983087!2d-98.0560418042469!3d30.30798223594094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1698261482811!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of Austin, TX"
                ></iframe>
            </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ContactPage;
