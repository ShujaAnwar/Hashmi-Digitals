
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-brand-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 border-2 border-brand-500/50 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-2 border-indigo-500/30 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full p-4">
                <img 
                  src="https://picsum.photos/seed/hashmi/600/600" 
                  alt="Hashmi Digitals Founder" 
                  className="w-full h-full object-cover rounded-full filter brightness-75 contrast-125"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h4 className="text-brand-400 font-bold tracking-widest uppercase mb-4 text-sm">Our Story</h4>
            <h2 className="text-4xl font-display font-bold mb-8 leading-tight">
              Driven by Innovation, <br />
              Defined by Results.
            </h2>
            <p className="text-lg text-brand-100/70 mb-8 leading-relaxed">
              Hashmi Digitals was founded with a singular mission: to bridge the gap between complex 
              artificial intelligence and elegant, accessible user interfaces. We believe that 
              technology should empower businesses without overwhelming them.
            </p>
            <p className="text-brand-100/70 mb-10 leading-relaxed">
              Based at the intersection of modern web development and data science, our studio 
              specializes in building tools that automate the mundane and elevate the strategic. 
              From real estate CRM solutions to AI-driven productivity suites, we deliver excellence.
            </p>
            <div className="flex space-x-12">
              <div>
                <span className="block text-4xl font-bold mb-1">50+</span>
                <span className="text-brand-400 text-sm font-semibold uppercase tracking-wider">Projects Delivered</span>
              </div>
              <div>
                <span className="block text-4xl font-bold mb-1">15+</span>
                <span className="text-brand-400 text-sm font-semibold uppercase tracking-wider">AI Models Built</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
