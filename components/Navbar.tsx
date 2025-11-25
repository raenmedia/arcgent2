import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b print:hidden ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-slate-200 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#waitlist"
            className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl">
          <a href="#waitlist" className="text-lg font-medium text-brand-600" onClick={() => setMobileMenuOpen(false)}>Join Waitlist</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;