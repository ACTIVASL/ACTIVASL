import React from 'react';
import { AgentNodeProfile } from '../../lib/types';
import { OnyxCard } from './OnyxCard';
import { Cpu, Zap, Database } from 'lucide-react';

interface AgentNodeCardProps {
    node: AgentNodeProfile;
    onClick?: () => void;
}

export const AgentNodeCard: React.FC<AgentNodeCardProps> = ({ node, onClick }) => {
    const { human, synthetic, metrics } = node;

    return (
        <div onClick={onClick} className="cursor-pointer group">
            <OnyxCard className="h-full hover:border-blue-500/40 relative overflow-hidden">

                {/* HEADER: HUMAN PROFILE */}
                <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden border border-slate-700 grayscale group-hover:grayscale-0 transition-all duration-500">
                            {human.avatarUrl ? (
                                <img src={human.avatarUrl} alt={human.fullName} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-xs font-bold text-slate-500">{human.fullName.charAt(0)}</div>
                            )}
                        </div>
                        {/* STATUS DOT */}
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-[#0a0a0a] ${human.status === 'DEEP_WORK' ? 'bg-purple-500' :
                            human.status === 'AVAILABLE' ? 'bg-emerald-500' :
                                human.status === 'MEETING' ? 'bg-amber-500' : 'bg-slate-500'
                            }`} />
                    </div>

                    <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">{human.fullName}</h4>
                        <p className="text-[10px] text-blue-400 font-mono truncate uppercase tracking-wider">{human.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-[9px] px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-400">{human.department}</span>
                        </div>
                    </div>
                </div>

                {/* SYNTHETIC LAYER (GEMINI) */}
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-800 group-hover:bg-blue-900/5 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                            <Cpu size={10} /> GEMINI 3.0 PRO
                        </span>
                        <span className="text-[9px] font-mono text-emerald-400">{synthetic.uptime}% UPTIME</span>
                    </div>

                    {/* CONTEXT WINDOW BAR */}
                    <div className="space-y-1">
                        <div className="flex justify-between text-[9px] text-slate-500">
                            <span>Context Load</span>
                            <span>1.2M / 1.5M</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[80%]" />
                        </div>
                    </div>

                    {/* INTEGRATIONS & METRICS */}
                    <div className="flex gap-2 mt-3 pt-2 border-t border-slate-800/50 justify-between items-center">
                        <div className="flex gap-2">
                            {synthetic.workspaceSync && (
                                <div className="flex items-center gap-1 text-[9px] text-slate-400" title="Google Workspace Connected">
                                    <Database size={10} className="text-blue-400" /> G-SUITE
                                </div>
                            )}
                            {synthetic.notebookLmId && (
                                <div className="flex items-center gap-1 text-[9px] text-slate-400" title="NotebookLM Active">
                                    <Zap size={10} className="text-amber-400" /> NB-LM
                                </div>
                            )}
                        </div>
                        <div className="text-[9px] font-mono text-slate-500" title="Agent Efficiency">
                            EFF: {metrics.agentEfficiency}%
                        </div>
                    </div>
                </div>

            </OnyxCard>
        </div>
    );
};
