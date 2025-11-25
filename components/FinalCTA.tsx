import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="waitlist" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Ready to design your future?
        </h2>
        <p className="text-xl text-slate-500 mb-10">
          Join the waiting list for early access to the Arcgent platform.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-5 py-3.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-none"
          />
          <button type="submit" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            Join Waiting List
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default FinalCTA;