import React from 'react';

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Who uses Arcgent?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Founders</h3>
            <p className="text-sm text-slate-500">Operationalize your vision. Turn your mental models into scalable systems your team can execute.</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Operations Leaders</h3>
            <p className="text-sm text-slate-500">Document standard operating procedures (SOPs) 10x faster and ensure process compliance.</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Automation Consultants</h3>
            <p className="text-sm text-slate-500">Deliver clear, professional specs to clients. Scope projects accurately before building.</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Engineers</h3>
            <p className="text-sm text-slate-500">Stop guessing requirements. Get a validated technical spec to build from immediately.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCases;