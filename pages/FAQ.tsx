
import React, { useState } from 'react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <HelpCircle size={48} className="text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Common Questions</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Find quick answers to your questions about our services and hosting environment.
          </p>
        </div>

        <div className="relative mb-12">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search for answers..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all shadow-sm"
          />
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="font-bold text-slate-900 dark:text-white text-lg">{faq.question}</span>
                {openIndex === idx ? <Minus className="text-blue-600" /> : <Plus className="text-blue-600" />}
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 animate-in slide-in-from-top-4 duration-300">
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No results found for "{searchTerm}". Please try a different term or contact us.
            </div>
          )}
        </div>

        <div className="mt-20 text-center p-12 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/30">
           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Still have questions?</h3>
           <p className="text-slate-600 dark:text-slate-400 mb-8">We're here to help you 24/7. Reach out through any of our support channels.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:usacloudit@gmail.com" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all">Email Support</a>
              <a href="https://wa.me/8801711427975" className="bg-white dark:bg-slate-800 text-blue-600 dark:text-white font-bold px-8 py-4 rounded-xl border border-blue-200 dark:border-slate-700 hover:bg-slate-50 transition-all">Live Chat</a>
           </div>
        </div>
      </div>
    </div>
  );
};
