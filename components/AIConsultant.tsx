
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Send, Bot, Loader2 } from 'lucide-react';

const AIConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const prompt = `
        You are an AI consultant for "Hashmi Digitals". 
        A potential client is asking: "${query}".
        
        We have six main apps in our portfolio:
        1. TATM: AI-Powered Task Automation & Time Management. Best for individual power users or small teams needing smart scheduling.
        2. Hashmi Travels Books: Modern Travel & Booking Management System. Best for travel agencies and tour operators.
        3. ELC Smart Education: Intelligent LMS & Educational Platform. Best for schools, online courses, and corporate training.
        4. Prince Plastic: Industrial ERP & Inventory Management. Best for manufacturing companies, factories, and B2B industrial sales.
        5. FA Task Manager: Professional Agile Productivity Suite. Best for agencies, dev teams, and large organizations needing Kanban/Velocity tools.
        6. Asghar Builders: Luxury Real Estate CRM & Property Portal. Best for builders, realtors, and construction companies.

        Recommend the best app based on their query or explain how Hashmi Digitals can build a custom solution. 
        Keep your tone professional, premium, and concise. Format with bullet points if helpful.
      `;

      const result = await ai.models.generateContent({
        model,
        contents: prompt,
      });

      setResponse(result.text || "I apologize, I couldn't process that. Please contact our support team.");
    } catch (error) {
      console.error('AI error:', error);
      setResponse("Our AI advisor is currently offline. Please use our contact form for inquiries!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-brand-50/50 dark:to-brand-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-[32px] p-8 md:p-12 border border-brand-200 dark:border-brand-800 shadow-2xl shadow-brand-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Bot className="w-48 h-48" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-brand-600 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold">AI Project Consultant</h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
              Tell us about your business goals, and our AI will suggest the perfect application 
              or custom solution from the Hashmi Digitals portfolio.
            </p>

            <form onSubmit={handleConsult} className="relative mb-8">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. I need a tool for my travel agency to manage bookings..."
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all shadow-inner"
              />
              <button 
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition-all disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>

            <AnimatePresence>
              {response && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-brand-50 dark:bg-brand-900/20 rounded-2xl border border-brand-100 dark:border-brand-800 text-slate-800 dark:text-slate-200 prose prose-slate dark:prose-invert max-w-none"
                >
                  <p className="whitespace-pre-line text-sm leading-relaxed">{response}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
