
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, UserPlus, Github, Chrome, Cloud } from 'lucide-react';

export const ClientArea = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 mb-6 group">
             <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
               <Cloud size={24} />
             </div>
             <span className="text-2xl font-bold text-slate-900 dark:text-white">
               USA CLOUD <span className="text-blue-600">IT</span>
             </span>
          </Link>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {mode === 'login' ? 'Welcome Back' : 'Join Our Cloud'}
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Manage your servers and services securely.
          </p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
           <button 
             onClick={() => setMode('login')}
             className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${mode === 'login' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500'}`}
           >
             Login
           </button>
           <button 
             onClick={() => setMode('register')}
             className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${mode === 'register' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500'}`}
           >
             Register
           </button>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            {mode === 'register' && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <UserPlus size={18} />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="block w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            )}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Mail size={18} />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address"
                className="block w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Lock size={18} />
              </div>
              <input
                type="password"
                required
                placeholder="Password"
                className="block w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {mode === 'login' && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400">
                <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                Remember me
              </label>
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
            </div>
          )}

          <button
            type="submit"
            className="group relative w-full flex justify-center py-4 px-4 border border-transparent font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-lg shadow-blue-500/25"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {mode === 'login' ? <LogIn size={20} /> : <UserPlus size={20} />}
            </span>
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-900 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <Chrome size={18} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <Github size={18} /> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
