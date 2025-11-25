import React from 'react';

const FutureVision: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm mb-4 block">The Vision</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          CAD for business operations.
        </h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          Engineers have CAD. Designers have Figma. Operations needs a home. <br className="hidden md:block" />
          We are building the standard for designing, documenting, and simulating your AI Agent workflows.
        </p>
        <div className="h-1 w-24 bg-brand-500 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default FutureVision;