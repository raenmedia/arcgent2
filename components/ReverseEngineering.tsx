import React from 'react';
import { FileJson, ArrowRightLeft, FileText } from 'lucide-react';

const ReverseEngineering: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-6">
              <ArrowRightLeft className="w-3 h-3" />
              <span>Blueprint Extraction</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Reverse-engineer your <br />
              <span className="text-indigo-400">existing AI Agents</span>.
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Arcgent doesn't just help you design new agents. It deciphers your old ones. Upload your n8n workflow JSON, and we'll extract the logic into a clear, readable SOP.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5">
                   <FileJson className="w-3 h-3 text-indigo-400" />
                </div>
                <div>
                    <strong className="block text-white">JSON to English</strong>
                    <span className="text-slate-500 text-sm">Instantly generate documentation for legacy workflows.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5">
                   <FileText className="w-3 h-3 text-indigo-400" />
                </div>
                <div>
                    <strong className="block text-white">Optimization Analysis</strong>
                    <span className="text-slate-500 text-sm">Identify bottlenecks and redundant logic in seconds.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 w-full">
             <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4">
                    <div className="flex gap-2">
                        <div className="text-xs text-slate-400 font-mono">workflow.json</div>
                    </div>
                    <ArrowRightLeft className="text-indigo-500 animate-pulse" />
                    <div className="flex gap-2">
                        <div className="text-xs text-slate-400 font-mono">Logic Blueprint</div>
                    </div>
                </div>
                
                {/* Code Simulation */}
                <div className="grid grid-cols-2 gap-4 font-mono text-xs h-64 overflow-hidden opacity-80">
                    <div className="text-green-400">
                        {`{
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "webhook"
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook"
    }
    ...`}
                    </div>
                    <div className="text-slate-300">
                        {`# New Customer Onboarding

1. Trigger: Webhook event received
2. Decision: Is email valid?
   - If NO: Log error and stop.
   - If YES: Proceed.
3. Enrichment: Fetch Clearbit data
4. CRM Update: Upsert HubSpot contact
5. Notification: Slack #sales channel`}
                    </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-800 to-transparent"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReverseEngineering;