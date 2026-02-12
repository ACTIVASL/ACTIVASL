import { motion } from 'framer-motion';
import { LayoutDashboard, Hexagon, Activity } from 'lucide-react';
import { SECTIONS, SectionConfig } from './canvasData';

interface CanvasSidebarProps {
    activeSection: string | null;
    onNavigate: (sectionId: string | null) => void;
}

export function CanvasSidebar({ activeSection, onNavigate }: CanvasSidebarProps) {
    // Map entries for easier iteration
    const sectionList = Object.values(SECTIONS);

    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-72 bg-[#020617] border-r border-white/5 flex flex-col h-full shrink-0 relative z-40 shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
        >
            {/* AMBIENT GLOW */}
            <div className="absolute top-0 left-0 w-full h-32 bg-indigo-500/5 blur-3xl pointer-events-none" />

            {/* HEADER */}
            <div className="p-6 border-b border-white/5">
                <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-black rounded-xl border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-indigo-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Hexagon className="w-5 h-5 text-indigo-400 fill-indigo-500/10" />
                    </div>
                    <div>
                        <h1 className="text-sm font-black text-white tracking-widest uppercase">ACTIVA S.L.</h1>
                        <p className="text-[9px] text-slate-500 font-bold tracking-[0.2em] uppercase flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_5px_#10b981]" />
                            Digital OS v2.0
                        </p>
                    </div>
                </div>
            </div>

            {/* NAVIGATION SCROLL AREA */}
            <div className="flex-1 overflow-y-auto premium-scrollbar py-6 space-y-6 px-4">

                {/* 1. DASHBOARD CONTROL */}
                <div>
                    <h3 className="text-[9px] font-black text-slate-600 uppercase tracking-[0.25em] mb-3 px-2">Comando Central</h3>
                    <button
                        onClick={() => onNavigate(null)}
                        className={`w-full group relative overflow-hidden rounded-xl transition-all duration-300 ${activeSection === null ? 'bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.3)] scale-[1.02]' : 'bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10'}`}
                    >
                        {activeSection === null && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />}
                        <div className="relative z-10 flex items-center gap-3 px-4 py-3">
                            <LayoutDashboard className={`w-5 h-5 ${activeSection === null ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
                            <div className="text-left">
                                <span className={`block text-xs font-bold tracking-wider uppercase ${activeSection === null ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>Panel de Control</span>
                                {activeSection === null && <span className="text-[9px] text-indigo-200 font-medium tracking-wide block mt-0.5">VISTA TÁCTICA GLOBAL</span>}
                            </div>
                        </div>
                    </button>
                </div>

                {/* 2. DEPARTMENTS */}
                <div>
                    <h3 className="text-[9px] font-black text-slate-600 uppercase tracking-[0.25em] mb-3 px-2 flex items-center justify-between">
                        Departamentos <span className="bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded text-[8px]">{sectionList.length}</span>
                    </h3>
                    <div className="space-y-1">
                        {sectionList.map((section: SectionConfig) => {
                            const Icon = section.icon;
                            const isActive = activeSection === section.id;

                            return (
                                <button
                                    key={section.id}
                                    onClick={() => onNavigate(section.id)}
                                    className={`w-full relative group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 border-l-[3px] overflow-hidden ${isActive ? 'bg-gradient-to-r from-slate-800 to-transparent border-indigo-500' : 'border-transparent hover:bg-white/[0.02] hover:border-slate-700'}`}
                                >
                                    {/* ICON */}
                                    <div className={`p-1.5 rounded-md transition-colors relative z-10 shrink-0 ${isActive ? 'bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/30' : 'bg-slate-900 text-slate-500 group-hover:text-slate-300 group-hover:bg-slate-800 border border-slate-800'}`}>
                                        <Icon className="w-3.5 h-3.5" />
                                    </div>

                                    {/* TEXT */}
                                    <span className={`text-[10px] font-bold uppercase tracking-wider truncate flex-1 text-left relative z-10 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                                        {section.title}
                                    </span>

                                    {/* INDICATOR */}
                                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_5px_#6366f1]" />}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 3. METRICS (Fake for now, adds realism) */}
                <div className="p-4 bg-slate-900/30 border border-white/5 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-3 h-3 text-emerald-500" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">KPIs Globales</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-xl font-black text-white">98.2%</span>
                        <span className="text-[9px] text-emerald-400 font-bold bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-500/20">+2.4%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[98%] shadow-[0_0_10px_#10b981]" />
                    </div>
                </div>
            </div>

            {/* FOOTER STATUS */}
            <div className="p-4 border-t border-white/5 bg-[#01040f]">
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> ONLINE</span>
                    <span className="opacity-50">LATENCY: 12ms</span>
                </div>
            </div>
        </motion.div>
    );
}
