
import React from 'react';
import { Mail, Phone, Send, MessageCircle, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Get In Touch</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Our team of specialists is ready to help you find the best solutions for your digital infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl space-y-8 border border-slate-100 dark:border-slate-800">
               <h3 className="text-xl font-bold text-slate-900 dark:text-white">Direct Channels</h3>
               
               <div className="flex gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600"><Mail size={24} /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Email Support</p>
                    <a href="mailto:usacloudit@gmail.com" className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">usacloudit@gmail.com</a>
                  </div>
               </div>

               <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-600"><MessageCircle size={24} /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">WhatsApp</p>
                    <a href="https://wa.me/17162003096" className="text-lg font-bold text-slate-900 dark:text-white hover:text-green-600 transition-colors">+1 716 200 3096</a>
                  </div>
               </div>

               <div className="flex gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-500"><Send size={24} /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Telegram</p>
                    <a href="https://t.me/usacloudit" className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors">@usacloudit</a>
                  </div>
               </div>

               <div className="flex gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-xl text-amber-600"><Clock size={24} /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Office Hours</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">Mon - Sat: 9AM - 8PM</p>
                  </div>
               </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-100 dark:bg-slate-800 h-64 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-700 relative">
               <img src="https://picsum.photos/seed/map/400/300" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" />
               <div className="relative z-10 text-center space-y-2">
                  <MapPin size={32} className="text-blue-600 mx-auto" />
                  <p className="font-bold dark:text-white">Buffalo, New York, USA</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
               <form className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                     <input type="text" placeholder="John Doe" className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                     <input type="email" placeholder="john@example.com" className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                     <input type="text" placeholder="Inquiry about VPS Hosting" className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                     <textarea rows={5} placeholder="How can we help you?" className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-1">
                        Send Message
                     </button>
                  </div>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
