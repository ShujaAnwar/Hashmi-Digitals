
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { APPLICATIONS } from '../constants';
import { Category } from '../types';
import AppCard from './AppCard';

interface AppGalleryProps {
  onPurchase: (appName: string) => void;
}

const AppGallery: React.FC<AppGalleryProps> = ({ onPurchase }) => {
  const [filter, setFilter] = useState<Category>(Category.All);

  const filteredApps = filter === Category.All 
    ? APPLICATIONS 
    : APPLICATIONS.filter(app => app.category === filter);

  const categories = Object.values(Category);

  return (
    <section className="py-24 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 tracking-tight">Our Premium Showcase</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Explore our ready-to-deploy applications. Each product is built with performance, security, and scalability in mind.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} onPurchase={() => onPurchase(app.name)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AppGallery;
