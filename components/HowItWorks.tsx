import React, { useState } from 'react';
import { MessageSquare, CheckCircle2, FileText, PlayCircle, Workflow, Send, GitBranch, ShieldCheck, FileJson } from 'lucide-react';

// Mock Component Visuals
const ChatVisual = () => (
  <div className="p-6 flex flex-col h-full">
    <div className="flex-1 space-y-4">
      <div className="bg-slate-100 self-start rounded-2xl rounded-tl-none p-4 max-w-[80%]">
        <p className="text-slate-700 text-sm">Describe the process you want to engineer.</p>
      </div>
      <div className="bg-brand-50 self-end ml-auto rounded-2xl rounded-tr-none p-4 max-w-[80%] border border-brand-100">
        <p className="text-brand-900 text-sm">I need an agent that monitors our support inbox, categorizes urgent tickets based on sentiment, and drafts a response in Linear.</p>
      </div>
       <div className="bg-slate-100 self-start rounded-2xl rounded-tl-none p-4 max-w-[80%]">
        <p className="text-slate-700 text-sm">Understood. Should the agent ask for human approval before posting to Linear, or only for high-priority tickets?</p>
      </div>
    </div>
    <div className="mt-4 relative">
      <input disabled type="text" placeholder="Refining logic..." className="w-full pl-4 pr-12 py-3 rounded-full border border-slate-200 bg-slate-50 text-sm" />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-600 rounded-full text-white">
        <Send className="w-3 h-3" />
      </div>
    </div>
  </div>
);

const DecisionVisual = () => (
  <div className="p-6 bg-slate-50 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-slate-500" />
          <span className="font-bold text-slate-700 text-sm">Logic Validation</span>
        </div>
        <span className="bg-slate-200 text-slate-600 text-[10px] px-1.5 py-0.5 rounded">Step 2</span>
      </div>
      <div className="p-5">
        <h4 className="text-brand-700 font-bold text-base mb-1">Decision Node: Sentiment Analysis</h4>
        <p className="text-xs text-slate-500 mb-4 font-mono bg-slate-50 p-1 rounded inline-block">if (sentiment === 'negative' && tier === 'enterprise')</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 rounded bg-green-50 border border-green-100">
            <div className="font-bold text-xs text-green-700 w-12 uppercase">True</div>
            <div className="text-xs text-slate-600">Route to #urgent-support Slack channel</div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded bg-slate-50 border border-slate-200">
            <div className="font-bold text-xs text-slate-500 w-12 uppercase">False</div>
            <div className="text-xs text-slate-600">Add to standard triage queue</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProcessVisual = () => (
  <div className="p-6 bg-slate-50 h-full overflow-y-auto">
    <div className="mb-3 flex justify-between items-center">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Generated SOP</h4>
        <span className="text-[10px] bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-medium">v1.0</span>
    </div>
    <div className="space-y-3">
      {[
        { id: 1, name: "Trigger: New Email", desc: "Listen for incoming support emails", type: "Input" },
        { id: 2, name: "Analysis Agent", desc: "Analyze sentiment and extract key entities", type: "LLM" },
        { id: 3, name: "Routing Logic", desc: "Determine priority based on SLA", type: "Logic" },
        { id: 4, name: "Action: Linear", desc: "Create ticket with drafted response", type: "Tool" },
        { id: 5, name: "Notification", desc: "Alert account manager if urgent", type: "Output" }
      ].map((step, i) => (
        <div key={step.id} className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-3 shadow-sm relative">
             {i < 4 && <div className="absolute left-6 top-full w-0.5 h-3 bg-slate-200 -z-10"></div>}
             <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold shrink-0">
               {step.id}
             </div>
             <div className="flex-1">
               <div className="flex justify-between items-center mb-1">
                 <h4 className="text-sm font-bold text-slate-800">{step.name}</h4>
                 <span className="text-[10px] font-medium px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded uppercase">{step.type}</span>
               </div>
               <p className="text-xs text-slate-500">{step.desc}</p>
             </div>
        </div>
      ))}
    </div>
  </div>
);

const EdgeCasesVisual = () => (
  <div className="p-6 bg-slate-50 h-full flex flex-col justify-center">
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-4 overflow-hidden">
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex justify-between items-center">
           <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
             <ShieldCheck className="w-4 h-4 text-brand-600" />
             Simulation Results
           </h4>
           <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold">Pass</span>
        </div>
        <div className="divide-y divide-slate-100">
           <div className="p-3">
              <div className="flex justify-between mb-1">
                  <div className="text-xs font-bold text-slate-700">Logic Gap Found</div>
                  <div className="text-[10px] text-amber-600 font-medium">Resolved</div>
              </div>
              <p className="text-[11px] text-slate-500">Added fallback handler for emails with no body text.</p>
           </div>
           <div className="p-3">
              <div className="flex justify-between mb-1">
                  <div className="text-xs font-bold text-slate-700">Infinite Loop Risk</div>
                  <div className="text-[10px] text-amber-600 font-medium">Resolved</div>
              </div>
              <p className="text-[11px] text-slate-500">Set max-retry limit on the LLM generation node.</p>
           </div>
        </div>
    </div>
  </div>
);

const ExportVisual = () => (
  <div className="p-6 bg-slate-50 h-full flex items-center justify-center">
     <div className="grid grid-cols-1 gap-4 w-full">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-brand-200 transition-colors cursor-pointer group">
           <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
               </div>
               <div>
                  <div className="font-bold text-slate-900 text-sm">Download SOP</div>
                  <div className="text-xs text-slate-500">PDF & Notion Format</div>
               </div>
           </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-brand-200 transition-colors cursor-pointer group">
           <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                  <FileJson className="w-5 h-5" />
               </div>
               <div>
                  <div className="font-bold text-slate-900 text-sm">Export Specs</div>
                  <div className="text-xs text-slate-500">Agent-ready JSON schema</div>
               </div>
           </div>
        </div>
     </div>
  </div>
);

const steps = [
  {
    id: 1,
    title: "Capture Intent",
    description: "Describe your process in plain English. Dump your messy notes, loom videos, or bullet points.",
    icon: <MessageSquare className="w-5 h-5" />,
    Visual: ChatVisual
  },
  {
    id: 2,
    title: "Refine Logic",
    description: "Our AI acts as a senior architect, asking clarifying questions to identify constraints and goals.",
    icon: <CheckCircle2 className="w-5 h-5" />,
    Visual: DecisionVisual
  },
  {
    id: 3,
    title: "Generate Blueprint",
    description: "Get a structured, business-friendly SOP that documents every step, decision, and tool.",
    icon: <FileText className="w-5 h-5" />,
    Visual: ProcessVisual
  },
  {
    id: 4,
    title: "Simulate & Validate",
    description: "Run logic simulations to catch edge cases and bottlenecks before you start building.",
    icon: <PlayCircle className="w-5 h-5" />,
    Visual: EdgeCasesVisual
  },
  {
    id: 5,
    title: "Export for Build",
    description: "Receive a clean technical spec and prompt that makes building in n8n or code trivial.",
    icon: <Workflow className="w-5 h-5" />,
    Visual: ExportVisual
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            From messy idea to <br />
            <span className="text-brand-600">AI SOP</span> in minutes.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Steps List */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`group cursor-pointer transition-all duration-300 pl-6 border-l-2 ${activeStep === index ? 'border-brand-600' : 'border-slate-100 hover:border-slate-300'}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`flex items-center gap-3 mb-2 ${activeStep === index ? 'text-brand-600' : 'text-slate-400'}`}>
                  {step.icon}
                  <span className="text-xs font-bold uppercase tracking-wider">Step 0{step.id}</span>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${activeStep === index ? 'text-slate-900' : 'text-slate-500'}`}>
                  {step.title}
                </h3>
                <p className={`text-slate-500 leading-relaxed ${activeStep === index ? 'block' : 'hidden md:block'}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Sticky Component Preview */}
          <div className="lg:sticky lg:top-32 h-[450px] w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xl transition-all duration-500 flex flex-col">
             {/* Simulated UI Window Header */}
             <div className="w-full h-8 bg-white border-b border-slate-200 flex items-center px-4 gap-2 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
             </div>
             <div className="relative w-full flex-1 bg-white">
               {/* Render the visual component for the active step */}
               <div className="h-full w-full">
                 {React.createElement(steps[activeStep].Visual)}
               </div>
               
               {/* Overlay Label */}
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-100 shadow-sm pointer-events-none">
                  <span className="text-sm font-bold text-slate-800">{steps[activeStep].title}</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;