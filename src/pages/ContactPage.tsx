import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Linkedin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';
import Button from '../components/Button';
import { SectionWrapper } from '../components/SectionWrapper';
import { FAQAccordion } from '../components/FAQAccordion';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

const faqItems = [
  {
    question: 'How do I book an AI consulting session?',
    answer:
      'Simply fill out the contact form on this page or email us directly. We will respond within 24 business hours to schedule an introductory call and discuss your goals.',
  },
  {
    question: 'What is your typical response time?',
    answer:
      'We respond to all inquiries within 24 business hours. For urgent requests, feel free to mention that in your message and we will prioritize accordingly.',
  },
  {
    question: 'Do you offer a free initial consultation?',
    answer:
      'Yes. We offer a complimentary 30-minute discovery call to understand your needs, assess fit, and outline a potential engagement plan — no strings attached.',
  },
  {
    question: 'Can sessions be conducted virtually?',
    answer:
      'Absolutely. We offer both in-person sessions in the Austin, TX area and virtual sessions for teams anywhere in Texas or beyond. The format is tailored to your preference.',
  },
  {
    question: 'How should we prepare before our first session?',
    answer:
      'We will send you a short intake questionnaire after booking. It covers your current AI maturity, key pain points, and goals — so we can hit the ground running on day one.',
  },
];

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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LoneStar Intelligence',
  description:
    'AI consulting firm helping Texas businesses adopt artificial intelligence through leadership summits, team enablement sessions, and custom AI strategy.',
  url: 'https://www.lonestarintelligence.com',
  email: 'info@lonestarintelligence.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  areaServed: {
    '@type': 'State',
    name: 'Texas',
  },
  openingHours: 'Mo-Fr 09:00-17:00',
};

const ContactPage = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      service: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error('Submission failed. Please try again.');

      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const inputClasses =
    'w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors duration-200';
  const labelClasses = 'block text-sm font-semibold text-navy mb-1.5';
  const errorClasses = 'text-red-600 text-sm mt-1';

  return (
    <>
      <Helmet>
        <title>Contact LoneStar Intelligence | Book an AI Consulting Session — Austin, TX</title>
        <meta
          name="description"
          content="Get in touch with LoneStar Intelligence to book an AI consulting session for your business. Based in Austin, TX, serving all of Texas. We respond within 24 hours."
        />
        <link rel="canonical" href="https://www.lonestarintelligence.com/contact" />
        <meta property="og:title" content="Contact LoneStar Intelligence | Book an AI Consulting Session" />
        <meta
          property="og:description"
          content="Reach out to LoneStar Intelligence to explore AI strategy, enablement, and adoption for your business. Based in Austin, TX."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lonestarintelligence.com/contact" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-navy text-white min-h-[40vh] flex items-center pt-20">
        <div className="section-wrapper w-full text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Make AI Real for Your Business.
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Whether you're exploring AI strategy, team enablement, or full-scale adoption — we'd love
            to hear from you. We respond to every inquiry within 24 business hours.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Layout ── */}
      <SectionWrapper className="bg-white" id="contact-form" ariaLabel="Contact form and information">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column — Form */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-navy mb-8">Send Us a Message</h2>

            {submitStatus === 'success' ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center py-16 px-6 border-2 border-green-200 bg-green-50 rounded-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="w-14 h-14 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
                <p className="text-text-muted max-w-md">
                  Your message has been received. We'll be in touch within 24 business hours to
                  discuss how we can help your business harness AI.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className={clsx(inputClasses, errors.name && 'border-red-500 focus:ring-red-300')}
                    {...register('name', { required: 'Name is required.' })}
                  />
                  {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className={labelClasses}>
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className={clsx(inputClasses, errors.company && 'border-red-500 focus:ring-red-300')}
                    {...register('company', { required: 'Company is required.' })}
                  />
                  {errors.company && <p className={errorClasses}>{errors.company.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className={clsx(inputClasses, errors.email && 'border-red-500 focus:ring-red-300')}
                    {...register('email', {
                      required: 'Email is required.',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address.',
                      },
                    })}
                  />
                  {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="(512) 555-1234"
                    className={inputClasses}
                    {...register('phone')}
                  />
                </div>

                {/* Service Select */}
                <div>
                  <label htmlFor="service" className={labelClasses}>
                    Which service are you interested in?
                  </label>
                  <select
                    id="service"
                    className={clsx(inputClasses, 'appearance-none')}
                    {...register('service')}
                  >
                    <option value="">Select a service...</option>
                    <option value="Leadership Summit">Leadership Summit</option>
                    <option value="GTM Team Session">GTM Team Session</option>
                    <option value="Everyday AI">Everyday AI</option>
                    <option value="Custom">Custom</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your goals, challenges, or what you'd like to explore..."
                    className={clsx(inputClasses, 'resize-y', errors.message && 'border-red-500 focus:ring-red-300')}
                    {...register('message', {
                      required: 'Message is required.',
                      minLength: {
                        value: 20,
                        message: 'Please provide at least 20 characters.',
                      },
                    })}
                  />
                  {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
                </div>

                {/* Submit Error */}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{submitError}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message \u2192'}
                </Button>

                <p className="text-center text-sm text-text-muted">
                  We respond within 24 business hours.
                </p>
              </form>
            )}
          </div>

          {/* Right Column — Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-navy">Other Ways to Reach Us</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Email</p>
                  <a
                    href="mailto:info@lonestarintelligence.com"
                    className="text-teal hover:text-gold transition-colors"
                  >
                    info@lonestarintelligence.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Location</p>
                  <p className="text-text-muted">Austin, Texas (serving all of TX)</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/company/lonestar-intelligence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:text-gold transition-colors"
                  >
                    Connect with us on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Box */}
            <div className="border-2 border-gold/30 rounded-xl p-5 bg-gold/5">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-gold" />
                <p className="font-bold text-navy">Typical Response Time</p>
              </div>
              <p className="text-text-muted">Within 24 business hours</p>
            </div>

            {/* TODO: Replace with Calendly embed URL */}
            {/* <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="YOUR_CALENDLY_EMBED_URL"
                width="100%"
                height="400"
                frameBorder="0"
                title="Schedule a consultation"
              />
            </div> */}

            {/* Google Maps Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440899.2131983087!2d-98.0560418042469!3d30.30798223594094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1698261482811!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Austin, TX — LoneStar Intelligence service area"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── FAQ Section ── */}
      <SectionWrapper className="bg-light-gray" id="faq" ariaLabel="Frequently asked questions">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>

      {/* ── CTA Banner ── */}
      <SectionWrapper className="bg-navy text-white text-center" ariaLabel="Call to action">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's build an AI strategy that fits your business. Book a free discovery call today.
          </p>
          <Button variant="primary" to="/contact#contact-form">
            Book a Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ContactPage;
