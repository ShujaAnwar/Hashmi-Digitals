
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 border border-brand-500/20"
        >
          <Sparkles className="w-4 h-4 text-brand-500 mr-2" />
          <span className="text-xs font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300">
            Premium AI & Web Solutions for Modern Businesses
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-8"
        >
          Building Smart <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-500 to-blue-600 animate-gradient-x">
            Digital Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Where AI meets high-end web design. We showcase and build cutting-edge applications 
          tailored for startups, agencies, and real estate enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a 
            href="#apps"
            className="group w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold shadow-xl shadow-brand-600/20 transition-all flex items-center justify-center"
          >
            Explore Apps
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 dark:hover:bg-black/20 text-slate-900 dark:text-white rounded-full font-bold border border-slate-200 dark:border-slate-800 transition-all flex items-center justify-center"
          >
            Hire Hashmi Digitals
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative rounded-2xl overflow-hidden glass p-4 max-w-5xl mx-auto"
        >
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-brand-600/10 to-transparent pointer-events-none"></div>
           <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
            alt="Hashmi Digitals Premium Showcase" 
            className="rounded-xl w-full shadow-2xl border border-slate-200/50 dark:border-white/5"
           />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
