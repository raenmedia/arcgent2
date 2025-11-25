import React from 'react';
import { List, ShieldAlert, GitMerge, ArrowRight } from 'lucide-react';

const FeatureHighlights: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The operating system for process design.
          </h2>
          <p className="text-slate-500">
            Everything you need to architect, document, and optimize your automated workforce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-slate-50 rounded-lg mb-6 overflow-hidden relative border border-slate-100 p-4">
               {/* UI Mockup: Process List */}
               <div className="space-y-2">
                  <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
                  <div className="p-3 bg-white border border-slate-200 rounded-md flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-brand-100 flex items-center justify-center text-brand-600 text-xs font-bold">1</div>
                      <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-md flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-brand-100 flex items-center justify-center text-brand-600 text-xs font-bold">2</div>
                      <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-md flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-brand-100 flex items-center justify-center text-brand-600 text-xs font-bold">3</div>
                      <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                  </div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <List className="w-5 h-5 text-brand-500" /> The Process Library
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              A centralized repository for your operational blueprints. Version controlled and accessible to your entire team.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-slate-50 rounded-lg mb-6 overflow-hidden relative border border-slate-100 p-4 flex items-center justify-center">
                {/* UI Mockup: Alert */}
                <div className="w-full bg-amber-50 border border-amber-100 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                            <div className="text-xs font-bold text-amber-800 mb-1">Logic Gap Detected</div>
                            <div className="h-2 w-full bg-amber-200/50 rounded mb-1.5"></div>
                            <div className="h-2 w-2/3 bg-amber-200/50 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-brand-500" /> Pre-Build Validation
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Simulate your workflow's logic path to catch dead-ends and loops before writing a single line of code.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-slate-50 rounded-lg mb-6 overflow-hidden relative border border-slate-100 p-4 flex items-center justify-center">
                {/* UI Mockup: Branching */}
                <div className="flex items-center gap-2 w-full justify-center">
                    <div className="w-12 h-12 rounded-lg bg-brand-100 border-2 border-brand-200 flex items-center justify-center">
                        <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                    <div className="flex flex-col gap-2">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 shadow-sm"></div>
                        <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-900 shadow-sm"></div>
                    </div>
                </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <GitMerge className="w-5 h-5 text-brand-500" /> Agent Hand-offs
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Visualize exactly where human intervention is required and define clear triggers for agent-to-human hand-offs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;