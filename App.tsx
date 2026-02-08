
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppGallery from './components/AppGallery';
import WhyUs from './components/WhyUs';
import About from './components/About';
import EngagementModels from './components/EngagementModels';
import AIConsultant from './components/AIConsultant';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handlePurchase = (appName: string) => {
    setSelectedApp(appName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero />
        
        <section id="apps">
          <AppGallery onPurchase={handlePurchase} />
        </section>

        <section id="consultant">
          <AIConsultant />
        </section>

        <section id="why-us">
          <WhyUs />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="pricing">
          <EngagementModels />
        </section>

        <ContactSection initialApp={selectedApp} />
      </main>

      <Footer />
      
      {/* Decorative Blobs */}
      <div className="fixed top-0 left-0 -z-10 w-full h-full overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-500 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500 blur-[150px] animate-pulse"></div>
      </div>
    </div>
  );
};

export default App;
