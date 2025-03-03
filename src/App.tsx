import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ArrowUp, Paperclip } from 'lucide-react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <CursorEffect />
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      
      <div className="paperclip">
        <Paperclip size={40} color="#0ea5e9" />
      </div>
      
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;