import React from 'react';
import { ArrowRight, Sparkles, LayoutGrid, FileText, Activity, Bot, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-200/30 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wide mb-8 animate-fade-in-up">
          <Sparkles className="w-3 h-3" />
          <span>Public Beta Waitlist Open</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1] max-w-5xl">
          The bridge between your people and your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">
            AI Agents.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed">
          Arcgent turns messy operations into clear, structured specifications. Design, validate, and optimize your AI agents before you build them.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto group">
            <input 
                type="email" 
                placeholder="work@email.com" 
                className="w-full sm:w-80 px-5 py-3.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-900/20">
            Join Waitlist
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
        
        <p className="mt-4 text-xs text-slate-400">No credit card required. Request early access.</p>

        {/* Hero Dashboard Mockup */}
        <div className="mt-16 md:mt-24 w-full max-w-5xl relative">
           <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-xl opacity-20 blur-lg"></div>
           
           {/* Dashboard UI Container */}
           <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-50 text-left">
                {/* Header */}
                <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">Process Library</h2>
                        <p className="text-xs text-slate-500">Your centralized operational blueprints</p>
                    </div>
                    <div className="h-8 w-8 bg-slate-100 rounded-full"></div>
                </div>

                <div className="p-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3">
                                <LayoutGrid className="w-4 h-4" />
                            </div>
                            <div className="text-2xl font-bold text-slate-900">12</div>
                            <div className="text-xs text-slate-500 font-medium">Total Blueprints</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="w-8 h-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-3">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div className="text-2xl font-bold text-slate-900">8</div>
                            <div className="text-xs text-slate-500 font-medium">Ready for Build</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-3">
                                <Activity className="w-4 h-4" />
                            </div>
                            <div className="text-2xl font-bold text-slate-900">3</div>
                            <div className="text-xs text-slate-500 font-medium">Draft Specs</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-3">
                                <Bot className="w-4 h-4" />
                            </div>
                            <div className="text-2xl font-bold text-slate-900">5</div>
                            <div className="text-xs text-slate-500 font-medium">Reverse Engineered</div>
                        </div>
                    </div>

                    {/* Recent Processes */}
                    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-50 flex justify-between items-center">
                            <h3 className="font-bold text-slate-900">Recent Specifications</h3>
                            <span className="text-brand-600 text-xs font-medium cursor-pointer hover:underline">View all →</span>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 group hover:border-brand-200 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white rounded border border-slate-200 text-slate-400">
                                        <Bot className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">Meeting Summary Distribution Agent</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Clock className="w-3 h-3 text-slate-400" />
                                            <span className="text-xs text-slate-500">Edited today • Validated</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-md">Build Ready</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 group hover:border-brand-200 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white rounded border border-slate-200 text-slate-400">
                                        <Bot className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">Lead Enrichment Workflow</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Clock className="w-3 h-3 text-slate-400" />
                                            <span className="text-xs text-slate-500">Edited 2h ago • 90% complete</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-md">Drafting</span>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;