
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, MousePointer2 } from 'lucide-react';

const features = [
  {
    title: 'High Performance',
    description: 'We optimize every line of code for blazing fast load times and sub-second interactions.',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-amber-500/10 text-amber-500'
  },
  {
    title: 'Clean UI/UX',
    description: 'Pixel-perfect designs that prioritize user experience and conversion above all else.',
    icon: <MousePointer2 className="w-6 h-6" />,
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    title: 'AI Integration',
    description: 'Specializing in Gemini AI and LLM implementation to give your business a modern edge.',
    icon: <Cpu className="w-6 h-6" />,
    color: 'bg-brand-500/10 text-brand-500'
  },
  {
    title: 'Scalable & Secure',
    description: 'Built on industry-standard stacks like Next.js and Supabase to grow with your user base.',
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-emerald-500/10 text-emerald-500'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6 tracking-tight">
              Why Forward-Thinking <br />
              Businesses Choose <span className="text-brand-600">Hashmi Digitals</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              We don't just build websites; we engineer revenue-generating digital assets. 
              Our focus is on the intersection of AI, automation, and world-class design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="group">
                  <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full"></div>
            <div className="glass rounded-[40px] p-8 border border-white/10 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/tech/800/1000" 
                alt="Tech Stack" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-12 right-12 glass px-6 py-4 rounded-2xl border-white/20">
                <span className="block text-3xl font-bold text-brand-500">99%</span>
                <span className="text-xs uppercase tracking-widest font-bold">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
