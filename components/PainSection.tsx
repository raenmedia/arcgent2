import React from 'react';
import { FileQuestion, BrainCircuit, Network, AlertTriangle } from 'lucide-react';

const PainSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Stop building in the dark.
          </h2>
          <p className="text-slate-500 text-lg">
            The gap between "I have an idea" and "I built a workflow" is where automation fails.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PainCard 
            icon={<FileQuestion />}
            title="Implicit Knowledge"
            description="Critical process logic lives in people's heads, not in documentation. Scaling is impossible."
          />
          <PainCard 
            icon={<BrainCircuit />}
            title="The 'Black Box' Problem"
            description="You have 50 workflows running in n8n, but no one actually knows what they do anymore."
          />
          <PainCard 
            icon={<Network />}
            title="Spaghetti Automations"
            description="Building without a blueprint leads to fragile, tangled workflows that break constantly."
          />
          <PainCard 
            icon={<AlertTriangle />}
            title="Costly Iterations"
            description="Fixing logic errors after you've built the automation is 10x more expensive than planning first."
          />
        </div>
      </div>
    </section>
  );
};

const PainCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
  </div>
);

export default PainSection;