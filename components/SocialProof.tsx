import React from 'react';

const SocialProof: React.FC = () => {
  const companies = ["Acme Corp", "Linear", "Vercel", "Raycast", "Ramp", "Mercury"];

  return (
    <section className="py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-wider">
          Operations teams designing the future at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-50">
          {companies.map((company) => (
            <span key={company} className="text-xl font-bold font-sans text-slate-800">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;