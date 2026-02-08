
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Application } from '../types';

interface AppCardProps {
  app: Application;
  onPurchase: () => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onPurchase }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col h-full"
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={app.imageUrl} 
          alt={app.name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brand-600/90 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg">
            {app.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
           <a 
            href={app.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white text-slate-900 font-bold rounded-full flex items-center shadow-2xl hover:bg-brand-50 transition-all transform hover:scale-105 active:scale-95"
           >
             Launch Live App <ExternalLink className="ml-2 w-4 h-4 text-brand-600" />
           </a>
        </div>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold font-display group-hover:text-brand-600 transition-colors">{app.name}</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
          {app.description}
        </p>

        <div className="space-y-3 mb-6">
          {app.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center text-xs font-medium text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-brand-500 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {app.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-[10px] font-bold uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
          <button 
            onClick={onPurchase}
            className="w-full px-6 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-2xl text-center text-sm shadow-md hover:bg-brand-600 dark:hover:bg-brand-600 hover:text-white dark:hover:text-white transition-all flex items-center justify-center transform active:scale-[0.98]"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Purchase / Customize
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AppCard;
