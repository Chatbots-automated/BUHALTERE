import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar, FileText, Plane, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const emailRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<HTMLDivElement>(null);
  const travelRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  const timelineSteps = [
    {
      id: 'step1',
      title: t('services.timeline.step1.title'),
      description: t('services.timeline.step1.description'),
    },
    {
      id: 'step2',
      title: t('services.timeline.step2.title'),
      description: t('services.timeline.step2.description'),
      ref: emailRef,
      hash: 'email-management'
    },
    {
      id: 'step3',
      title: t('services.timeline.step3.title'),
      description: t('services.timeline.step3.description'),
      ref: calendarRef,
      hash: 'calendar-management'
    },
    {
      id: 'step4',
      title: t('services.timeline.step4.title'),
      description: t('services.timeline.step4.description'),
      ref: documentRef,
      hash: 'document-handling'
    },
    {
      id: 'step5',
      title: t('services.timeline.step5.title'),
      description: t('services.timeline.step5.description'),
      ref: travelRef,
      hash: 'travel-arrangements'
    },
    {
      id: 'step6',
      title: t('services.timeline.step6.title'),
      description: t('services.timeline.step6.description'),
      ref: clientRef,
      hash: 'client-communication'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('services.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-neutral-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Our Service Process
          </h2>
          
          <div className="timeline-container">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                id={step.hash}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Management */}
      <section id="email-management" ref={emailRef} className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                Email Management
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our email management service helps you regain control of your inbox and ensures that important messages are handled promptly and professionally.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Mail size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Inbox Organization</h3>
                    <p className="text-neutral-600">We create a logical folder structure and filtering system to keep your inbox organized.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Filtering</h3>
                    <p className="text-neutral-600">We prioritize important messages and filter out spam to ensure you see what matters most.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Response Management</h3>
                    <p className="text-neutral-600">We draft and send responses on your behalf, following your guidelines and communication style.</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Email Management" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Management */}
      <section id="calendar-management" ref={calendarRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                Calendar Management
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our calendar management service ensures that your schedule is optimized and you never miss an important appointment or meeting.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Calendar size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Appointment Scheduling</h3>
                    <p className="text-neutral-600">We coordinate with clients and partners to schedule meetings at times that work for everyone.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Reminder Setup</h3>
                    <p className="text-neutral-600">We set up reminders for important events, deadlines, and follow-ups.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Schedule Optimization</h3>
                    <p className="text-neutral-600">We organize your calendar to maximize productivity and minimize travel time between meetings.</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Calendar Management" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Document Handling */}
      <section id="document-handling" ref={documentRef} className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                Document Handling
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our document handling service ensures that all your business documents are created, edited, and organized professionally.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <FileText size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Document Creation</h3>
                    <p className="text-neutral-600">We create professional documents, including letters, reports, presentations, and more.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Document Editing</h3>
                    <p className="text-neutral-600">We review and edit documents for grammar, spelling, formatting, and clarity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Document Organization</h3>
                    <p className="text-neutral-600">We implement a logical filing system to ensure documents are easy to find and access.</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Document Handling" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Arrangements */}
      <section id="travel-arrangements" ref={travelRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                Travel Arrangements
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our travel arrangement service takes care of all the details for your business trips, ensuring a smooth and stress-free experience.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Plane size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Flight Booking</h3>
                    <p className="text-neutral-600">We research and book flights that fit your schedule and preferences.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Plane size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Accommodation</h3>
                    <p className="text-neutral-600">We find and reserve hotels or other accommodations that meet your requirements.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Plane size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Transportation</h3>
                    <p className="text-neutral-600">We arrange for transportation at your destination, including car rentals or car services.</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Travel Arrangements" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Communication */}
      <section id="client-communication" ref={clientRef} className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                Client Communication
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our client communication service ensures that your clients receive timely and professional responses, maintaining strong business relationships.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Users size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Client Correspondence</h3>
                    <p className="text-neutral-600">We handle email and written communication with clients on your behalf.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Follow-up Management</h3>
                    <p className="text-neutral-600">We ensure timely follow-ups with clients to maintain engagement and address their needs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Client Relationship Building</h3>
                    <p className="text-neutral-600">We help maintain and strengthen client relationships through consistent and professional communication.</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn-primary inline-flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Client Communication" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to streamline your business operations?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Get in touch with us today to discuss how our services can help you focus on what matters most.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            {t('services.cta')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;