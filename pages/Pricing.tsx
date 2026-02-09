
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'shared' | 'vps' | 'dedicated'>('shared');

  const filteredPlans = PRICING_PLANS.filter(plan => plan.category === activeTab);

  return (
    <div className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Transparent Pricing</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your project. No hidden fees, no surprise costs. Just premium infrastructure.
          </p>

          <div className="flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl max-w-md mx-auto mt-12 border border-slate-200 dark:border-slate-800">
            {(['shared', 'vps', 'dedicated'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all capitalize ${
                  activeTab === cat 
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-white shadow-sm' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {filteredPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 transition-all hover:shadow-2xl flex flex-col ${
                plan.isPopular 
                  ? 'border-blue-500 shadow-xl scale-105 z-10' 
                  : 'border-slate-100 dark:border-slate-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500 dark:text-slate-400">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <Check size={18} className="text-blue-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/client-area"
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                  plan.isPopular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                }`}
              >
                Select Plan <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Helper */}
        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Need a Custom Configuration?</h3>
              <p className="text-blue-100">Contact our enterprise team for a tailor-made solution for your business.</p>
           </div>
           <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Talk to Sales
           </Link>
        </div>
      </div>
    </div>
  );
};
