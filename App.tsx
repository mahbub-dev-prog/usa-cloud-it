import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

const Header = () => (
  <header className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold uppercase">USA CLOUD IT</Link>
    <nav className="flex gap-6 text-sm font-medium">
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/client-area">Client Area</Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="p-10 border-t border-slate-200 dark:border-slate-800 text-center mt-20">
    <h2 className="text-lg font-bold uppercase">USA CLOUD IT</h2>
    <p className="text-sm opacity-50 mt-2">© 2026 USA CLOUD IT</p>
  </footer>
);

const Page = ({ name }: { name: string }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-10">
    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">{name}</h1>
    <p className="mt-4 opacity-50">This page is ready for your new design.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Page name="USA CLOUD IT" />} />
            <Route path="/about" element={<Page name="About Us" />} />
            <Route path="/services" element={<Page name="Services" />} />
            <Route path="/pricing" element={<Page name="Pricing" />} />
            <Route path="/contact" element={<Page name="Contact" />} />
            <Route path="/client-area" element={<Page name="Client Login" />} />
            <Route path="/faq" element={<Page name="FAQ" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;