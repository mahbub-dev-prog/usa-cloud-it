
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Zap, 
  Headphones, 
  CheckCircle2,
  Server,
  Database,
  Cloud,
  Lock,
  Search,
  Cpu
} from 'lucide-react';
import { SERVICES } from '../constants';

const Hero = () => (
  <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-40 bg-white dark:bg-slate-950 transition-colors">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-10">
       <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[140px]"></div>
       <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[140px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-100 dark:border-blue-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Premium Global Hosting Infrastructure
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
            Secure • Scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart Cloud Solutions</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            USA Cloud IT provides high-performance servers and intelligent cloud architecture built to scale your business globally with zero compromise on security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-2xl shadow-blue-600/30"
            >
              Get Started Now <ArrowRight size={20} />
            </Link>
            <Link
              to="/pricing"
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 px-10 py-5 rounded-2xl font-bold transition-all"
            >
              View Plans
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 opacity-70 font-semibold text-slate-500 dark:text-slate-400">
             <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> NVMe SSD Storage</div>
             <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> 24/7 Priority Support</div>
             <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> 99.99% Uptime SLA</div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative z-10 p-4 bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=1200" 
              alt="Data Center" 
              className="rounded-[2.5rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
               <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Our Network</div>
               <div className="text-3xl font-extrabold">20+ Global Locations</div>
            </div>
          </div>
          
          {/* Floating stats cards */}
          <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 animate-bounce duration-[3000ms]">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl"><Zap size={24} /></div>
                <div>
                   <div className="text-xs text-slate-500 font-bold">Latency</div>
                   <div className="text-xl font-bold text-slate-900 dark:text-white">&lt; 10ms</div>
                </div>
             </div>
          </div>
          <div className="absolute top-1/2 -left-12 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 animate-pulse">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl"><Lock size={24} /></div>
                <div>
                   <div className="text-xs text-slate-500 font-bold">SSL Status</div>
                   <div className="text-xl font-bold text-slate-900 dark:text-white">Active & Secure</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DomainSearch = () => (
  <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-4 text-center">
       <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Find Your Perfect Domain Name</h2>
       <div className="max-w-3xl mx-auto relative group">
          <input 
            type="text" 
            placeholder="Search for your business name (e.g. mybrand.com)..." 
            className="w-full pl-6 pr-40 py-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500 transition-all text-lg dark:text-white"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl font-bold flex items-center gap-2 transition-colors">
             <Search size={20} /> Search
          </button>
       </div>
       <div className="flex justify-center gap-8 mt-6 text-sm font-bold text-slate-500">
          <span>.com <span className="text-blue-600">$9.99</span></span>
          <span>.net <span className="text-blue-600">$12.99</span></span>
          <span>.org <span className="text-blue-600">$11.99</span></span>
          <span>.cloud <span className="text-blue-600">$4.99</span></span>
       </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Enterprise Standards</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Why Businesses Trust USA Cloud IT</h3>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We combine cutting-edge technology with human-centric support to deliver the best IT infrastructure in the industry.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {[
          {
            icon: <Zap className="text-amber-500" />,
            title: "Performance First",
            desc: "Powered by pure NVMe SSDs and AMD EPYC processors for the fastest load times in the market."
          },
          {
            icon: <Shield className="text-blue-500" />,
            title: "Advanced Security",
            desc: "Dedicated hardware firewalls, real-time DDoS protection, and automated daily backups come standard."
          },
          {
            icon: <Headphones className="text-indigo-500" />,
            title: "Human Support",
            desc: "No bots. Real certified system administrators are available 24/7/365 to assist with any challenge."
          },
          {
            icon: <Cloud className="text-sky-500" />,
            title: "Cloud Scalability",
            desc: "Scale your resources up or down on the fly as your traffic grows. Pay only for what you need."
          },
          {
            icon: <Cpu className="text-rose-500" />,
            title: "Dedicated Hardware",
            desc: "No noisy neighbors. Our infrastructure ensures you get the full power of your allocated resources."
          },
          {
            icon: <Globe className="text-emerald-500" />,
            title: "Global CDN",
            desc: "Deliver content at lightning speeds to users worldwide with our integrated Global Edge Network."
          }
        ].map((f, i) => (
          <div key={i} className="group p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all">
            <div className="mb-8 bg-white dark:bg-slate-800 p-4 rounded-2xl inline-block shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {React.cloneElement(f.icon as React.ReactElement<any>, { size: 36 })}
            </div>
            <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{f.title}</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomeServices = () => (
  <section className="py-32 bg-slate-900 text-white transition-colors overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
       <div className="absolute inset-0 bg-blue-600 blur-[150px]"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="space-y-4 max-w-2xl text-center md:text-left">
          <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Our Core Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">Everything You Need To Grow Online</h3>
        </div>
        <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all group">
          Explore All Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.slice(0, 6).map((service) => (
          <Link to={`/services#${service.id}`} key={service.id} className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-blue-600 transition-all">
             <div className="bg-white/10 p-4 rounded-2xl inline-block mb-8 group-hover:bg-white group-hover:text-blue-600 transition-all">
                 <Cloud size={32} />
             </div>
             <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
             <p className="text-slate-400 group-hover:text-blue-50 text-lg line-clamp-2 leading-relaxed">
               {service.description}
             </p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const SocialProof = () => (
   <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 text-center">
         <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">Trusted by disruptive brands globally</p>
         <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-3xl font-black text-slate-800 dark:text-white">NETCORE</span>
            <span className="text-3xl font-black text-slate-800 dark:text-white">SYNX</span>
            <span className="text-3xl font-black text-slate-800 dark:text-white">DATAFLOW</span>
            <span className="text-3xl font-black text-slate-800 dark:text-white">MODERNITY</span>
            <span className="text-3xl font-black text-slate-800 dark:text-white">QUANTUM</span>
         </div>
      </div>
   </section>
);

export const Home = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <SocialProof />
      <DomainSearch />
      <Features />
      <HomeServices />
      
      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-blue-600"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
         
         <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">Ready to take your business <br /> to the next level?</h2>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto font-medium">Join 5,000+ businesses who trust USA Cloud IT for their mission-critical infrastructure. Get started today and see the difference speed makes.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
               <Link to="/pricing" className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-black/20 text-lg">View Our Plans</Link>
               <Link to="/contact" className="bg-blue-700 hover:bg-blue-800 text-white border border-blue-500/50 px-12 py-5 rounded-2xl font-black transition-all text-lg">Talk to an Expert</Link>
            </div>
         </div>
      </section>
    </div>
  );
};
