import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { ClientArea } from './pages/ClientArea';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { 
  Shield, 
  Target, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Server,
  Code,
  Globe
} from 'lucide-react';
import { SERVICES } from './constants';

const About = () => (
  <div className="bg-white dark:bg-slate-950 transition-colors">
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-100 dark:border-blue-800">
               Our Journey
             </div>
             <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">Empowering Innovation Through Cloud</h1>
             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Founded with a mission to bridge the gap between complex technology and growing businesses, USA Cloud IT has evolved into a leading provider of high-performance hosting.
             </p>
             <div className="grid grid-cols-2 gap-8">
                <div>
                   <h4 className="text-3xl font-bold text-blue-600">5000+</h4>
                   <p className="text-slate-500 font-medium">Clients Worldwide</p>
                </div>
                <div>
                   <h4 className="text-3xl font-bold text-blue-600">99.9%</h4>
                   <p className="text-slate-500 font-medium">Uptime Guarantee</p>
                </div>
             </div>
          </div>
          <div className="relative animate-float">
             <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl"></div>
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Our Team" className="relative rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800" />
          </div>
       </div>
    </section>
  </div>
);

const ServicesPage = () => (
  <div className="py-24 bg-white dark:bg-slate-950 transition-colors">
    <div className="max-w-7xl mx-auto px-4">
       <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Professional IT Services</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Experience the next generation of cloud infrastructure and digital solutions.
          </p>
       </div>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
             <div key={service.id} className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:border-blue-500/50 transition-all">
                <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                   <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <button className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:translate-x-2 transition-transform">
                   Get Started <ArrowRight size={18} />
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
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;