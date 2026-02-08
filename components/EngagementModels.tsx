
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ENGAGEMENT_MODELS } from '../constants';

const EngagementModels: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Engagement Models</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Whether you want a turnkey product or a bespoke enterprise solution, we have a model that fits your growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ENGAGEMENT_MODELS.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border flex flex-col ${
                idx === 1 
                  ? 'bg-brand-50 dark:bg-brand-900/20 border-brand-300 dark:border-brand-700 shadow-2xl shadow-brand-500/10' 
                  : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700'
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{model.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{model.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold font-display">{model.price}</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {model.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start text-sm">
                    <Check className="w-5 h-5 text-brand-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-sm text-center transition-all ${
                  idx === 1 
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {model.ctaText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
