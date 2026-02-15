import { useState } from 'react';
import {
    Maximize2, Minimize2, ExternalLink, Package
} from 'lucide-react';
import { SectionConfig, SectionData, SquadMember, INITIAL_MODEL_DATA } from '../canvasData';

interface CanvasCardProps {
    section: SectionConfig;
    data: SectionData;
    squadData?: SquadMember[];
    onClick: () => void;
    className?: string; // Corrected: usage of unique identifier
}

export function CanvasCard({
    section,
    data,
    squadData,
    onClick,
    className = ""
}: CanvasCardProps) {
    const Icon = section.icon;
    const [isCollapsed, setIsCollapsed] = useState(false);
    const squad = squadData || INITIAL_MODEL_DATA[section.id].squad;
    const products = data?.products;
    const activeCount = Array.isArray(squad) ? squad.reduce((acc, r) => (r.active ? acc + (r.multiplier || 1) : acc), 0) : 0;

    return (
        <div
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
            className={`relative group overflow-hidden rounded-[2rem] border bg-[#0B1121]/80 backdrop-blur-md shadow-2xl transition-all duration-500 flex flex-col focus:outline-none focus:ring-4 focus:ring-indigo-500/50 ${section.border} ${section.glow} hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.5)] ${className} ${isCollapsed ? 'h-auto' : 'h-full'}`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-100 pointer-events-none transition-opacity duration-500 group-hover:opacity-80`} />
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button
                    onClick={(e) => { e.stopPropagation(); window.open('https://notebooklm.google.com', '_blank'); }}
                    className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white/70 hover:text-white transition-colors backdrop-blur-sm border border-white/5 opacity-0 group-hover:opacity-100"
                    title="Abrir en NotebookLM"
                    aria-label="Open NotebookLM"
                >
                    <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); setIsCollapsed(!isCollapsed); }}
                    className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white/70 hover:text-white transition-colors backdrop-blur-sm border border-white/5"
                    title={isCollapsed ? "Expandir" : "Colapsar"}
                    aria-label={isCollapsed ? "Expand card" : "Collapse card"}
                    aria-expanded={!isCollapsed}
                >
                    {isCollapsed ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
                </button>
            </div>

            <div className="px-6 py-5 flex items-center justify-between relative z-10 border-b border-white/5 bg-white/[0.02] cursor-pointer">
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl shadow-lg ${section.iconBg} ${section.iconColor} ring-1 ring-white/10 relative overflow-hidden group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Icon className="w-5 h-5 relative z-10" />
                    </div>
                    <div>
                        <h3 className={`font-black text-sm uppercase tracking-widest ${section.accent} mb-0.5`}>{section.title}</h3>
                        <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase block mb-0.5">{section.canvasTitle}</span>
                    </div>
                </div>
                {/* Priority Badge */}
                <div className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-800/50 border border-white/5 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-300 transition-colors`}>
                    ACTIVE
                </div>
            </div>

            {!isCollapsed && (
                <div className="px-6 pb-6 pt-4 flex-grow flex flex-col relative z-10 overflow-hidden cursor-pointer">
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed border-l-2 border-white/10 pl-3">{section.description}</p>
                    <div className="flex-grow overflow-y-auto pr-2 premium-scrollbar mb-4">
                        {products && products.length > 0 && (
                            <div className="mb-6 space-y-2">
                                <div className="text-[10px] font-extrabold text-white/50 uppercase tracking-widest mb-2 pl-1 flex items-center gap-2">
                                    <Package className="w-3 h-3" /> Catálogo de Servicios
                                </div>
                                {products.map((prod, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-3 rounded-xl flex justify-between items-center group/prod hover:bg-white/10 transition-colors">
                                        <div>
                                            <div className="text-xs font-bold text-white group-hover/prod:text-indigo-300 transition-colors">{prod.name}</div>
                                            <div className="text-[10px] text-slate-400 line-clamp-1" title={prod.desc}>{prod.desc}</div>
                                        </div>
                                        <div className="text-[10px] font-bold text-emerald-400 bg-emerald-900/30 px-2.5 py-1 rounded border border-emerald-500/20">{prod.price}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* EQUIPO SECTION RESTORED (CEO PRIORITY: VISIBLE FACES) */}
                        <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2 pl-1">EQUIPO ({activeCount})</div>
                        <div className="space-y-2.5">
                            {Array.isArray(squad) && squad.map((member, i) => {
                                const isCritical = member.complianceStatus === 'critical';

                                return (
                                    <div key={i}
                                        onClick={(e) => { e.stopPropagation(); onClick(); }}
                                        className={`flex flex-col bg-slate-800/20 p-2.5 rounded-xl border gap-2 group/item transition-all cursor-pointer hover:scale-[1.02] hover:shadow-lg relative overflow-hidden
                                        ${member.active
                                                ? isCritical
                                                    ? 'border-red-500/50 hover:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)] animate-pulse-slow'
                                                    : 'border-white/5 hover:bg-slate-700/30 hover:border-white/10'
                                                : 'opacity-40 grayscale border-white/5'}`}
                                    >
                                        {isCritical && <div className="absolute inset-0 bg-red-500/5 z-0 pointer-events-none" />}

                                        <div className="flex items-start gap-3 relative z-10">
                                            {/* Avatar: Face Visibility Secured */}
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 shrink-0 overflow-hidden ${!member.active ? 'bg-slate-800' : 'bg-slate-700'}`}>
                                                {member.photo ? <img src={member.photo} alt={member.role} className="w-full h-full object-cover" /> : <Package className="w-4 h-4 text-slate-400" />}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-center mb-0.5">
                                                    <span className={`text-[11px] font-bold truncate ${isCritical ? 'text-red-300' : 'text-slate-200'}`} title={member.role}>{member.role} {member.multiplier ? `(x${member.multiplier})` : ''}</span>

                                                    {/* Status Dot */}
                                                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${member.complianceStatus === 'critical' ? 'bg-red-500 box-shadow-red animate-ping' :
                                                        member.complianceStatus === 'warning' ? 'bg-amber-500' : 'bg-emerald-500'
                                                        }`} title={`Estado: ${member.complianceStatus?.toUpperCase()}`} />
                                                </div>

                                                <div className="text-[10px] text-slate-500 font-medium leading-tight truncate group-hover/item:text-indigo-400 transition-colors mb-1">{member.function}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-auto bg-gradient-to-t from-[#0B1121] to-transparent -mx-2 px-2 flex justify-between items-end">
                        <div className="flex-1 mr-4">
                            <span className={`text-[9px] font-bold uppercase tracking-widest mb-1.5 block flex items-center gap-1.5 ${section.accent}`}>Objetivo Estratégico</span>
                            <p className="text-[10px] font-medium text-slate-400 leading-relaxed line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">{section.ceoObjective}</p>
                        </div>
                        <span className="text-[9px] text-slate-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Updated: Now</span>
                    </div>
                </div>
            )
            }
            {
                isCollapsed && (
                    <div className="px-6 pb-5 relative z-10 cursor-pointer">
                        <div className="flex items-center gap-2 mb-2"><span className="text-[9px] font-bold px-2.5 py-1 rounded-md bg-black/30 border border-white/5 text-slate-300">{activeCount} Empleados</span></div>
                        <p className="text-[11px] font-medium text-slate-400 leading-tight line-clamp-1">{section.ceoObjective}</p>
                    </div>
                )
            }
        </div >
    );
}
