import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

import PathNavigation from '../components/PathNavigation';
import StickyNote from '../components/StickyNote';

const Home: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    'Email Management',
    1000,
    'Calendar Organization',
    1000,
    'Document Handling',
    1000,
    'Travel Arrangements',
    1000,
    'Client Communication',
    1000,
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-50 to-neutral-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-10"
            poster="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          >
            <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47b5e33cd8c592d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('home.hero.title')}
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-neutral-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('home.hero.subtitle')}
            </motion.h2>
            
            <motion.div
              className="text-lg md:text-xl text-primary-700 font-medium mb-10 h-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={services}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                to="/services" 
                className="btn btn-primary inline-flex items-center gap-2"
              >
                {t('home.hero.cta')}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Path Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <PathNavigation />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary-500"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <line x1="2" x2="22" y1="7" y2="7" />
                  <line x1="12" x2="12" y1="14" y2="14" />
                  <line x1="8" x2="8" y1="14" y2="14" />
                  <line x1="16" x2="16" y1="14" y2="14" />
                  <line x1="8" x2="8" y1="10" y2="10" />
                  <line x1="16" x2="16" y1="10" y2="10" />
                  <line x1="12" x2="12" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Management</h3>
              <p className="text-neutral-600 mb-4">
                We organize, filter, and respond to emails according to your preferences, ensuring your inbox stays manageable.
              </p>
              <Link to="/services#email-management" className="text-primary-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary-500"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calendar Management</h3>
              <p className="text-neutral-600 mb-4">
                We schedule meetings, set reminders, and ensure you never miss an important appointment.
              </p>
              <Link to="/services#calendar-management" className="text-primary-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary-500"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Document Handling</h3>
              <p className="text-neutral-600 mb-4">
                We create, edit, and organize documents to keep your business running smoothly and professionally.
              </p>
              <Link to="/services#document-handling" className="text-primary-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-outline">
              {t('home.services.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Sticky Notes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                {t('home.about.title')}
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                {t('home.about.subtitle')}
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{t('home.about.point1')}</h3>
                    <p className="text-neutral-600">Our team has years of experience in administrative support across various industries.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{t('home.about.point2')}</h3>
                    <p className="text-neutral-600">We customize our services to meet your specific business needs and preferences.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{t('home.about.point3')}</h3>
                    <p className="text-neutral-600">Our efficient processes free up your time to focus on growing your business.</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/team" className="btn btn-primary">
                {t('home.about.cta')}
              </Link>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <StickyNote 
                title="Email Management" 
                content="Reduce inbox overwhelm and ensure timely responses to important messages."
                rotation={2}
              />
              <StickyNote 
                title="Calendar Organization" 
                content="Never double-book or miss an important meeting again."
                rotation={-1}
                color="bg-primary-100"
              />
              <StickyNote 
                title="Document Handling" 
                content="Professional document creation, editing, and organization."
                rotation={-2}
                color="bg-primary-100"
              />
              <StickyNote 
                title="Client Communication" 
                content="Maintain consistent, professional communication with your clients."
                rotation={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              {t('home.testimonials.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-1 mb-4 text-accent-500">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-neutral-700 mb-4 italic">
                "{t('home.testimonials.testimonial1.text')}"
              </p>
              <p className="font-semibold">
                {t('home.testimonials.testimonial1.author')}
              </p>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-1 mb-4 text-accent-500">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-neutral-700 mb-4 italic">
                "{t('home.testimonials.testimonial2.text')}"
              </p>
              <p className="font-semibold">
                {t('home.testimonials.testimonial2.author')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;