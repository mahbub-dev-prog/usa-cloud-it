import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { ClientArea } from './pages/ClientArea';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { CheckCircle, ArrowRight, Shield, Globe, Award, Server } from 'lucide-react';
import { SERVICES } from './constants';

const About = () => (
  <div className="bg-white dark:bg-slate-950 transition-colors">
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
             <div className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-100 dark:border-blue-800">
               Premium IT Solutions Since 2018
             </div>
             <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
               World-Class Infrastructure <br/> 
               <span className="text-blue-600">Built for Growth</span>
             </h1>
             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                USA Cloud IT is more than just a hosting provider. We are your technology partners, offering mission-critical infrastructure that powers thousands of businesses across the globe. Our focus is speed, security, and human-to-human support.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="space-y-1">
                   <h4 className="text-3xl font-bold text-blue-600">5k+</h4>
                   <p className="text-slate-500 text-sm font-medium">Happy Clients</p>
                </div>
                <div className="space-y-1">
                   <h4 className="text-3xl font-bold text-blue-600">99.9%</h4>
                   <p className="text-slate-500 text-sm font-medium">Uptime SLA</p>
                </div>
                <div className="space-y-1">
                   <h4 className="text-3xl font-bold text-blue-600">20+</h4>
                   <p className="text-slate-500 text-sm font-medium">Data Centers</p>
                </div>
             </div>
          </div>
          <div className="relative animate-float">
             <div className="absolute -inset-6 bg-blue-600/10 rounded-[4rem] blur-3xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
               alt="Our Corporate Team" 
               className="relative rounded-[3rem] shadow-2xl border border-white dark:border-slate-800 object-cover aspect-[4/3]" 
             />
          </div>
       </div>
    </section>

    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
             <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 mx-auto">
                <Shield size={32} />
             </div>
             <h3 className="text-xl font-bold">Secure by Design</h3>
             <p className="text-slate-500 text-sm">Every plan includes enterprise-grade security and DDoS protection at no extra cost.</p>
          </div>
          <div className="text-center space-y-4">
             <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 mx-auto">
                <Globe size={32} />
             </div>
             <h3 className="text-xl font-bold">Global Presence</h3>
             <p className="text-slate-500 text-sm">Deploy your applications closer to your users with our globally distributed edge network.</p>
          </div>
          <div className="text-center space-y-4">
             <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 mx-auto">
                <Award size={32} />
             </div>
             <h3 className="text-xl font-bold">Certified Support</h3>
             <p className="text-slate-500 text-sm">Our 24/7 technical support team consists of certified engineers, not just basic level agents.</p>
          </div>
       </div>
    </section>
  </div>
);

const ServicesPage = () => (
  <div className="py-24 bg-white dark:bg-slate-950 transition-colors">
    <div className="max-w-7xl mx-auto px-4">
       <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">Professional IT Ecosystem</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Reliable, high-performance services designed for the demands of modern digital businesses.
          </p>
       </div>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
             <div key={service.id} id={service.id} className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                   <Server size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 h-20 overflow-hidden line-clamp-3">
                   {service.description}
                </p>
                <div className="space-y-3 mb-8">
                   {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                         <CheckCircle size={16} className="text-green-500" /> {f}
                      </div>
                   ))}
                </div>
                <button className="w-full inline-flex items-center justify-center gap-2 font-bold text-white bg-blue-600 py-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-all shadow-lg shadow-blue-500/30">
                   Learn More <ArrowRight size={18} />
                </button>
             </div>
          ))}
       </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/client-area" element={<ClientArea />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Universal Fallback: Redirect any unknown path to home. 
              Crucial for GitHub Pages to handle root navigation correctly. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;