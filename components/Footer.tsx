import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 print:hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          <div className="max-w-xs">
            <div className="flex items-center gap-2 font-bold text-xl text-slate-900 mb-4">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-brand-600"
              >
                {/* Outer Bars */}
                <path d="M22 82 L46 25" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M54 25 L78 82" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M25 88 L75 88" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                
                {/* Connecting Lines */}
                <path d="M50 45 L50 25" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                <path d="M38 68 L25 88" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                <path d="M62 68 L75 88" stroke="currentColor" strokeWidth="2" opacity="0.5" />

                {/* Inner Triangle */}
                <path d="M50 45 L62 68 H38 Z" fill="currentColor" />
              </svg>
              <span>Arcgent</span>
            </div>
            <p className="text-slate-500 text-sm">
              The operating system for intelligent process design.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-brand-600">Process Design</a></li>
                <li><a href="#" className="hover:text-brand-600">Reverse Engineering</a></li>
                <li><a href="#" className="hover:text-brand-600">Library</a></li>
                <li><a href="#" className="hover:text-brand-600">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-brand-600">About</a></li>
                <li><a href="#" className="hover:text-brand-600">Blog</a></li>
                <li><a href="#" className="hover:text-brand-600">Careers</a></li>
                <li><a href="#" className="hover:text-brand-600">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Arcgent. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-slate-400">
            <a href="#" className="hover:text-brand-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-600 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;