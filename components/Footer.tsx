
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-lg font-bold font-display tracking-tight">
              Hashmi <span className="text-brand-600">Digitals</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#apps" className="hover:text-brand-600 transition-colors">Apps</a>
            <a href="#why-us" className="hover:text-brand-600 transition-colors">Process</a>
            <a href="#about" className="hover:text-brand-600 transition-colors">About</a>
            <a href="#pricing" className="hover:text-brand-600 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-brand-600 transition-colors">Contact</a>
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Hashmi Digitals. All rights reserved.
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          Built with React, Tailwind CSS, and Gemini AI. Hashmi Digitals is a registered trademark specializing 
          in high-performance web applications and artificial intelligence integrations.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
