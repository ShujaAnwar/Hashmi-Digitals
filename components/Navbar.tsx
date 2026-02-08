
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Layout, Zap, Users, Info, Mail } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Apps', href: '#apps', icon: <Layout className="w-4 h-4" /> },
    { name: 'Consultant', href: '#consultant', icon: <Zap className="w-4 h-4" /> },
    { name: 'Process', href: '#why-us', icon: <Users className="w-4 h-4" /> },
    { name: 'Pricing', href: '#pricing', icon: <Info className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
              <span className="text-white font-bold text-xl font-display">H</span>
            </div>
            <span className="text-xl font-bold font-display tracking-tight">
              Hashmi <span className="text-brand-600">Digitals</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="#contact"
              className="px-5 py-2.5 bg-brand-600 text-white rounded-full font-semibold text-sm hover:bg-brand-700 transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-brand-600/25"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden glass border-t border-slate-200 dark:border-slate-800"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="text-brand-600">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 bg-brand-600 text-white rounded-lg font-bold shadow-lg"
          >
            Start a Project
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
