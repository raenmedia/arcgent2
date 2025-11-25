import React from 'react';
import { Zap, ShieldCheck, Users, Layers } from 'lucide-react';

const KeyBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Crystal Clear SOPs",
      description: "Transform abstract ideas into rigorous, standardized documentation automatically.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Design Speed",
      description: "Architect complex multi-agent systems 10x faster than manual flowcharting.",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      bg: "bg-amber-50"
    },
    {
      title: "Logic Simulation",
      description: "Validate your workflow logic before investing time in implementation.",
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      bg: "bg-green-50"
    },
    {
      title: "Process Memory",
      description: "Build a searchable library of every automation your company owns.",
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className={`w-12 h-12 ${benefit.bg} rounded-lg flex items-center justify-center mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-500 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;