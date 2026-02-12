import React, { useState } from 'react';
import { DepartmentSection } from '../../components/layouts/DepartmentSection';
import { OnyxCard } from '../../components/ui/OnyxCard';
import {
    Library, Search, FileText, Bot,
    Sparkles, BookOpen, Hash, ArrowRight
} from 'lucide-react';

export const LibrarySection: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <DepartmentSection
            id="library"
            title="The Library"
            subtitle="Corporate Knowledge Core & Neural Memory"
            icon={Library}
            color="amber"
            status="OPTIMAL"
        >
            {/* SEARCH INTERFACE */}
            <div className="mb-8 relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="text-slate-500" size={20} />
                </div>
                <input
                    type="text"
                    placeholder="Ask Gemini 3.0 Pro Enterprise or search Knowledge Graph..."
                    className="w-full h-14 bg-slate-900/50 border border-slate-700 rounded-xl pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-mono text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-4 flex items-center gap-2">
                    <span className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400 border border-slate-700 font-mono">CTRL+K</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* 1. NOTEBOOKLM PORTAL */}
                <OnyxCard title="NotebookLM Integration" icon={Bot} className="md:col-span-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Sparkles size={120} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-2 relative z-10">
                        <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-colors group cursor-pointer">
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
                                    <BookOpen size={18} />
                                </div>
                                <ArrowRight size={14} className="text-slate-600 group-hover:text-amber-500 transition-colors" />
                            </div>
                            <h4 className="text-sm font-bold text-slate-200">Clinical Protocols</h4>
                            <p className="text-xs text-slate-500 mt-1">12 Sources • Updated 2h ago</p>
                        </div>

                        <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors group cursor-pointer">
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                    <FileText size={18} />
                                </div>
                                <ArrowRight size={14} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <h4 className="text-sm font-bold text-slate-200">Corporate Strategy</h4>
                            <p className="text-xs text-slate-500 mt-1">4 Sources • Updated 1d ago</p>
                        </div>
                    </div>

                    <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-800 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                            G
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-slate-300">"Summary of Q4 Financials based on uploaded PDFs..."</p>
                        </div>
                        <button className="text-[10px] uppercase font-bold text-amber-500 hover:text-amber-400">View Chat</button>
                    </div>
                </OnyxCard>

                {/* 2. RECENT ASSETS */}
                <OnyxCard title="Recent Assets" icon={FileText}>
                    <ul className="space-y-2 mt-2">
                        {[
                            { name: 'Activa_OS_Architecture_v2.pdf', tag: '#engineering' },
                            { name: 'Client_Onboarding_Flow.docx', tag: '#operations' },
                            { name: 'Financial_Projections_2026.xlsx', tag: '#finance' },
                            { name: 'Meeting_Notes_Board_Jan.md', tag: '#strategy' },
                        ].map((file, i) => (
                            <li key={i} className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <FileText size={14} className="text-slate-500 group-hover:text-slate-300" />
                                    <span className="text-xs text-slate-400 group-hover:text-white transition-colors">{file.name}</span>
                                </div>
                                <span className="text-[10px] text-slate-600 font-mono group-hover:text-slate-500">{file.tag}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full mt-4 py-2 text-xs font-bold text-slate-500 hover:text-white border border-slate-800 hover:bg-slate-800 rounded-lg transition-all flex items-center justify-center gap-2">
                        <Hash size={12} /> Browse All Tags
                    </button>
                </OnyxCard>

            </div>
        </DepartmentSection>
    );
};
