import React, { useEffect, useState, useRef } from 'react';
import { AgentNodeProfile } from '../../lib/types';
import {
    X, Terminal, HardDrive, Cpu, Activity,
    Database, ExternalLink, ShieldCheck
} from 'lucide-react';

interface AgentCockpitProps {
    agent: AgentNodeProfile;
    onClose: () => void;
}

export const AgentCockpit: React.FC<AgentCockpitProps> = ({ agent, onClose }) => {
    const [logs, setLogs] = useState<string[]>([
        '> Initializing Neural Link...',
        '> Syncing with Gemini 3.0 Pro Enterprise...',
        '> Context Window: LOADED',
    ]);
    const logEndRef = useRef<HTMLDivElement>(null);

    // SIMULATE LIVE THOUGHT PROCESS
    useEffect(() => {
        const thoughts = [
            `Analyzing sentiment for ${agent.human.department} report...`,
            `Querying NotebookLM "${agent.synthetic.notebookLmId}"...`,
            `Optimizing context window usage(${Math.floor(Math.random() * 20) + 70} %)...`,
            `Detected update in monorepo - activa - sl...`,
            `Running rigorous self - correction...`,
            `Generating embedding for new knowledge asset...`,
            `Syncing Workspace calendar events...`,
            `Verifying compliance with ISO - 27001...`,
        ];

        const interval = setInterval(() => {
            const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
            const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
            setLogs(prev => [...prev.slice(-15), `[${timestamp}] ${randomThought} `]); // Keep last 15
        }, 2500);

        return () => clearInterval(interval);
    }, [agent]);

    // Auto-scroll logs
    useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">

            {/* MAIN COCKPIT CONTAINER */}
            <div className="w-full max-w-6xl h-[85vh] bg-slate-950/90 border border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-blue-900/10 backdrop-blur-xl">

                {/* HEADER */}
                <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white border-2 border-slate-800">
                            {agent.human.fullName.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                                {agent.human.fullName}
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 font-mono">
                                    {agent.id.toUpperCase()}
                                </span>
                            </h2>
                            <p className="text-xs text-slate-400 font-mono flex items-center gap-2">
                                {agent.human.role} • <span className="text-emerald-400">ONLINE</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/10 text-blue-400 text-xs font-bold border border-blue-500/20 hover:bg-blue-600/20 transition-colors">
                            <ExternalLink size={14} /> Open Human Profile
                        </button>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* CONTENT GRID */}
                <div className="flex-1 grid grid-cols-12 overflow-hidden">

                    {/* LEFT: STATUS & METRICS (3 cols) */}
                    <div className="col-span-3 border-r border-slate-800 bg-slate-900/30 p-6 overflow-y-auto">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Cpu size={14} /> Core Metrics
                        </h3>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xs text-slate-400">Agent Efficiency</span>
                                    <span className="text-xl font-bold text-emerald-400">{agent.metrics.agentEfficiency}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500" style={{ width: `${agent.metrics.agentEfficiency}% ` }} />
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xs text-slate-400">Context Usage</span>
                                    <span className="text-xl font-bold text-blue-400">1.4M</span>
                                </div>
                                <p className="text-[10px] text-slate-500 mb-2">Total Capacity: {agent.synthetic.contextWindow.toLocaleString()}</p>
                                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: '65%' }} />
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xs text-slate-400">Knowledge Contribution</span>
                                    <span className="text-xl font-bold text-purple-400">{agent.metrics.knowledgeGraphContribution}</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500" style={{ width: `${agent.metrics.knowledgeGraphContribution}% ` }} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <ShieldCheck size={14} /> Active Protocols
                            </h3>
                            <ul className="space-y-2">
                                {agent.synthetic.mcpTools.map(tool => (
                                    <li key={tool} className="flex items-center justify-between text-xs p-2 rounded bg-slate-950 border border-slate-800/50 text-slate-300">
                                        <span className="font-mono">{tool}_protocol</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CENTER: LIVE TERMINAL (6 cols) */}
                    <div className="col-span-6 flex flex-col bg-black">
                        <div className="h-10 border-b border-slate-800 flex items-center px-4 gap-2 bg-slate-950">
                            <Terminal size={14} className="text-slate-500" />
                            <span className="text-xs font-mono text-slate-400">gemini-3-pro-streaming-interface --live</span>
                        </div>
                        <div className="flex-1 p-6 font-mono text-sm overflow-y-auto">
                            {logs.map((log, i) => (
                                <div key={i} className="mb-1.5 text-slate-300 break-words opacity-90">
                                    <span className="text-emerald-500 mr-2">$</span>
                                    {log}
                                </div>
                            ))}
                            <div ref={logEndRef} />
                            <div className="animate-pulse text-emerald-500 mt-2">_</div>
                        </div>
                    </div>

                    {/* RIGHT: MEMORY BANK (3 cols) */}
                    <div className="col-span-3 border-l border-slate-800 bg-slate-900/30 p-6 flex flex-col">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <HardDrive size={14} /> Memory Bank
                        </h3>

                        {/* MEMORY GRID VISUALIZATION */}
                        <div className="grid grid-cols-4 gap-1 mb-4 opacity-50">
                            {Array.from({ length: 48 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`aspect - square rounded - sm border border - black / 20 ${Math.random() > 0.7 ? 'bg-blue-500/40' : 'bg-slate-800/40'} `}
                                />
                            ))}
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Database size={14} /> NotebookLM Sources
                            </h3>
                            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 mb-2">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-slate-900 rounded border border-slate-800">
                                        <Activity size={16} className="text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-white mb-0.5">Clinical_Protocol_v4.pdf</h4>
                                        <p className="text-[10px] text-slate-500">Indexed 2h ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-slate-900 rounded border border-slate-800">
                                        <Activity size={16} className="text-slate-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-white mb-0.5">Corporate_Strategy_2026.docx</h4>
                                        <p className="text-[10px] text-slate-500">Indexed 1d ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
