
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { ClientArea } from './pages/ClientArea';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { SERVICES } from './constants';
import { Shield, Target, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => (
  <div className="bg-white dark:bg-slate-950 transition-colors">
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-100 dark:border-blue-800">
               Our Journey
             </div>
             <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">About USA Cloud IT</h1>
             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Founded with a mission to bridge the gap between complex technology and growing businesses, USA Cloud IT has evolved into a leading provider of high-performance hosting and comprehensive IT solutions. We believe in empowering creators with the tools they need to succeed in the digital era.
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
                <div>
                   <h4 className="text-3xl font-bold text-blue-600">24/7</h4>
                   <p className="text-slate-500 font-medium">Expert Support</p>
                </div>
                <div>
                   <h4 className="text-3xl font-bold text-blue-600">10+</h4>
                   <p className="text-slate-500 font-medium">Data Centers</p>
                </div>
             </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl"></div>
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Our Team" className="relative rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800" />
          </div>
       </div>
    </section>

    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Mission & Values</h2>
             <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">We are driven by a commitment to excellence, security, and the success of our partners.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {[
                { icon: <Target className="text-blue-600" />, title: "Mission", desc: "To provide scalable and secure cloud infrastructure that empowers businesses of all sizes to reach their full potential." },
                { icon: <Shield className="text-green-600" />, title: "Security First", desc: "We implement enterprise-grade security protocols to ensure your data and applications are always protected." },
                { icon: <Award className="text-amber-600" />, title: "Excellence", desc: "Continuously innovating our infrastructure to provide the latest performance breakthroughs in the industry." }
             ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                   <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
                   <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                   <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
             ))}
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
            Experience the next generation of cloud infrastructure and digital solutions tailored for your growth.
          </p>
       </div>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
             <div key={service.id} id={service.id} className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:border-blue-500/50 transition-all">
                <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                   <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                   {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                         {feat}
                      </li>
                   ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:translate-x-2 transition-transform">
                   Get Started <ArrowRight size={18} />
                </Link>
             </div>
          ))}
       </div>
    </div>
  </div>
);

const Terms = () => (
  <div className="py-24 max-w-4xl mx-auto px-4 prose prose-slate dark:prose-invert">
    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8">Terms & Conditions</h1>
    <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
      <p>Welcome to USA Cloud IT. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions of use.</p>
      
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8">1. Service Agreement</h2>
      <p>All services provided by USA Cloud IT may be used for lawful purposes only. Transmission, storage, or presentation of any information, data, or material in violation of any United States Federal, State, or City law is prohibited.</p>
      
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8">2. Account Security</h2>
      <p>Users are responsible for maintaining the confidentiality of their account credentials. USA Cloud IT will not be liable for any loss that you may incur as a result of someone else using your password or account.</p>
      
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8">3. Payment & Billing</h2>
      <p>Billing is recurring. If a payment is not received on the due date, services may be suspended. Re-activation fees may apply.</p>
    </div>
  </div>
);

const Privacy = () => (
  <div className="py-24 max-w-4xl mx-auto px-4 prose prose-slate dark:prose-invert">
    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>
    <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
      <p>USA Cloud IT values your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
      
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8">1. Information Collection</h2>
      <p>We collect information when you register on our site, place an order, or subscribe to our newsletter. This includes your name, email address, and billing information.</p>
      
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8">2. Data Security</h2>
      <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
      
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8">3. Cookie Usage</h2>
      <p>We use cookies to help us remember and process the items in your shopping cart and understand and save your preferences for future visits.</p>
    </div>
  </div>
);

const Refund = () => (
  <div className="py-24 max-w-4xl mx-auto px-4 prose prose-slate dark:prose-invert">
    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8">Refund Policy</h1>
    <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
      <p>We strive to provide the best service possible. However, if you are not satisfied, here is our refund policy.</p>
      
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8">1. Money-Back Guarantee</h2>
      <p>We offer a 30-day money-back guarantee on all Shared and Reseller hosting plans. If you cancel within 30 days of registration, you will receive a full refund.</p>
      
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8">2. Non-Refundable Items</h2>
      <p>Domain registration fees, dedicated server fees, and setup fees for custom configurations are generally non-refundable as they represent hard costs incurred by USA Cloud IT.</p>
      
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-8">3. Requesting a Refund</h2>
      <p>To request a refund, please open a billing ticket through our Client Area. Refunds are processed within 5-10 business days.</p>
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
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
