import React from 'react';
import WaitlistForm from './WaitlistForm';

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

        <WaitlistForm />
      </div>
    </section>
  );
};

export default FinalCTA;