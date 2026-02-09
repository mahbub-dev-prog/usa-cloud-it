import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { 
  Cloud, Menu, X, ArrowRight, Shield, Zap, Globe, 
  Server, Cpu, CheckCircle2, ChevronRight, Mail, Phone, MapPin, 
  Linkedin, Twitter, Facebook 
} from 'lucide-react';
import { SERVICES, PRICING_PLANS } from './constants';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-brand-500 p-2 rounded-xl shadow-lg shadow-brand-500/20">
            <Cloud className="text-white" size={24} />
          </div>
          <span className="text-xl font-black tracking-tight text-white">USA CLOUD <span className="text-brand-500">IT</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-semibold hover:text-brand-400 transition-colors ${location.pathname === link.path ? 'text-brand-400' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/client-area" className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-500 hover:text-white transition-all transform active:scale-95">
            Client Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="block text-lg font-medium text-slate-300" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/client-area" 
            className="block w-full bg-brand-500 text-white py-4 rounded-xl text-center font-bold"
            onClick={() => setIsOpen(false)}
          >
            Client Login
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-brand-500 p-2 rounded-xl">
            <Cloud className="text-white" size={20} />
          </div>
          <span className="text-lg font-black tracking-tight text-white uppercase">USA CLOUD IT</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          The global standard in enterprise cloud hosting. Powering tomorrow's digital transformation with reliable infrastructure.
        </p>
        <div className="flex gap-4">
          {[Twitter, Linkedin, Facebook].map((Icon, i) => (
            <a key={i} href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-500 hover:text-white transition-all text-slate-400">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Services</h4>
        <ul className="space-y-4 text-sm text-slate-400">
          <li><Link to="/services" className="hover:text-white transition-colors">Shared Hosting</Link></li>
          <li><Link to="/services" className="hover:text-white transition-colors">Cloud VPS</Link></li>
          <li><Link to="/services" className="hover:text-white transition-colors">Dedicated Servers</Link></li>
          <li><Link to="/services" className="hover:text-white transition-colors">Reseller Solutions</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Contact</h4>
        <ul className="space-y-4 text-sm text-slate-400">
          <li className="flex items-center gap-3"><Mail size={16} /> usacloudit@gmail.com</li>
          <li className="flex items-center gap-3"><Phone size={16} /> +880 1711-427975</li>
          <li className="flex items-center gap-3"><MapPin size={16} /> Dhaka, Bangladesh</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Support</h4>
        <ul className="space-y-4 text-sm text-slate-400">
          <li><Link to="/faq" className="hover:text-white transition-colors">Knowledge Base</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Submit Ticket</Link></li>
          <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-xs text-slate-500">
      <p>© 2026 USA CLOUD IT. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <span className="flex items-center gap-1"><Shield size={12} /> PCI DSS Compliant</span>
        <span className="flex items-center gap-1"><CheckCircle2 size={12} /> Tier 4 Data Center</span>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const Home = () => (
  <div className="relative overflow-hidden">
    {/* Hero Background */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.2]"></div>
    </div>

    {/* Hero Section */}
    <section className="relative pt-48 pb-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-in fade-in slide-in-from-bottom duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Next Gen Cloud Platform</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom duration-1000">
          Scale Beyond <br />
          <span className="text-gradient">Possibilities</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
          High-performance cloud infrastructure designed for modern businesses. Reliable, secure, and blazingly fast global servers.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
          <Link to="/pricing" className="group bg-brand-500 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-600 transition-all flex items-center gap-2 shadow-2xl shadow-brand-500/20">
            Start Deploying <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/services" className="px-10 py-5 rounded-2xl font-bold text-lg glass text-white hover:bg-white/5 transition-all">
            Explore Services
          </Link>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((item, i) => (
            <div key={i} className="group p-10 rounded-3xl glass hover:border-brand-500/50 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-8 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {item.description}
              </p>
              <ul className="space-y-3">
                {item.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-slate-500 font-medium italic">
                    <CheckCircle2 size={14} className="text-brand-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Section */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Built on Enterprise <br />
            <span className="text-brand-500 italic">Hardware.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We don't cut corners. Our infrastructure uses the latest NVMe SSDs, Xeon processors, and redundant network uplinks to ensure your business stays online 24/7.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <div className="text-3xl font-black text-brand-400 mb-1 tracking-tighter">99.9%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Uptime SLA</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <div className="text-3xl font-black text-brand-400 mb-1 tracking-tighter">10Gbps</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Network Speed</div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-brand-500/20 blur-[60px] rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800" 
            alt="Hardware" 
            className="relative rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  </div>
);

const Pricing = () => (
  <div className="pt-40 pb-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Transparent <span className="text-brand-500">Pricing</span></h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">No hidden fees. No complicated tiers. Just pure performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan, i) => (
          <div key={i} className={`relative p-10 rounded-[2.5rem] border ${plan.popular ? 'border-brand-500 bg-brand-500/5' : 'border-white/10 bg-white/5'} flex flex-col`}>
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full">Most Popular</span>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-white">{plan.price}</span>
              <span className="text-slate-500 text-sm">/{plan.period}</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-brand-500" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${plan.popular ? 'bg-brand-500 text-white hover:bg-brand-600' : 'bg-white/10 text-white hover:bg-white/20'}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="pt-40 pb-32 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">Connect with <span className="text-brand-500">us</span></h1>
        <p className="text-slate-400 text-lg">Our experts are standing by to help you scale.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-brand-500 transition-all" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-brand-500 transition-all" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-brand-500 transition-all" />
            <textarea rows={6} placeholder="Your Message" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-brand-500 transition-all resize-none"></textarea>
            <button className="w-full bg-brand-500 text-white font-black py-5 rounded-2xl hover:bg-brand-600 transition-all uppercase tracking-widest text-sm">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div className="p-8 rounded-3xl glass space-y-6">
            <h4 className="text-xl font-bold text-white">Direct Channels</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-500"><Mail size={20} /></div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-50">Email</p>
                  <p className="text-white font-medium">usacloudit@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-500"><Phone size={20} /></div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-50">WhatsApp</p>
                  <p className="text-white font-medium">+880 1711-427975</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/client-area" element={<Contact />} />
            {/* Added Navigate import and using it for fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;