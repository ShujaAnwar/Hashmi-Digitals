
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

interface ContactSectionProps {
  initialApp?: string | null;
}

const ContactSection: React.FC<ContactSectionProps> = ({ initialApp }) => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (initialApp) {
      setMessage(`I am interested in purchasing/customizing the ${initialApp} application. Please provide more details on next steps.`);
    }
  }, [initialApp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to an API
  };

  return (
    <section id="contact" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl font-display font-bold mb-6">Let's Build Something <span className="text-brand-600">Great</span></h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Ready to take your business to the next level with premium AI and web solutions? 
              Contact Hashmi Digitals today.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-md">
                  <Mail className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-widest">Email</span>
                  <span className="font-semibold">hello@hashmidigitals.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-md">
                  <Phone className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-widest">WhatsApp</span>
                  <span className="font-semibold">+1 (555) 000-HASHMI</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <span className="block text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Follow Us</span>
              <div className="flex space-x-4">
                {[Twitter, Linkedin, Instagram].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all shadow-sm">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-slate-800 rounded-[32px] p-8 md:p-10 shadow-2xl border border-slate-100 dark:border-slate-700">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400">We'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-brand-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Project Type</label>
                    <select 
                      defaultValue={initialApp ? "Buy Existing App" : "General Inquiry"}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    >
                      <option>Buy Existing App</option>
                      <option>Customize Existing App</option>
                      <option>Bespoke Enterprise Development</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project or which app you're interested in..."
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-600/25 transition-all flex items-center justify-center space-x-2 transform active:scale-[0.98]"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
