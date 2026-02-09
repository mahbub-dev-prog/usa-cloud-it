
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Cloud, 
  Mail, 
  Phone, 
  MessageCircle, 
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Moon,
  Sun
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
                <Cloud size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                USA CLOUD <span className="text-blue-600">IT</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-600'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/client-area"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/25"
            >
              Client Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-slate-700 dark:text-slate-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/client-area"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-600 text-white px-4 py-3 rounded-xl text-center font-bold"
          >
            Client Area
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Cloud size={24} className="text-blue-500" />
              <span className="text-xl font-bold text-white tracking-tight">
                USA CLOUD <span className="text-blue-500">IT</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering businesses worldwide with premium cloud infrastructure, secure hosting, and innovative IT solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Knowledge Base</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Shared Hosting</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">VPS Hosting</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Dedicated Servers</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">App Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500" />
                <a href="mailto:usacloudit@gmail.com" className="hover:text-white">usacloudit@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500" />
                <a href="tel:+17162003096" className="hover:text-white">+1 716 200 3096</a>
              </li>
              <li className="flex items-center gap-3">
                <Send size={16} className="text-blue-500" />
                <a href="https://t.me/usacloudit" target="_blank" className="hover:text-white">@usacloudit</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-blue-500" />
                <a href="https://wa.me/17162003096" target="_blank" className="hover:text-white">WhatsApp Chat</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 USA Cloud IT. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/refund" className="hover:text-white">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col transition-colors dark:bg-slate-950">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
