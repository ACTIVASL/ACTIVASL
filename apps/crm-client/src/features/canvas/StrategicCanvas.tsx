/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import {
    X, ExternalLink, Bot,
    CheckCircle2, ShieldCheck,
    Rocket,
    AlertCircle, User, Target,
    Layers,
    Crown, Goal, Package,
    Plus, Trash2, StickyNote, AlertOctagon, ArrowUpRight,
    Maximize2, Minimize2, MoreVertical, Edit, Camera, Upload,
    UserCheck, UserX,
    Magnet, PhoneForwarded, Shield, Award, ChevronRight,
    Settings, LogOut, Bell
} from 'lucide-react';

import { useAuth } from '../../context/AuthContext';



import {
    type SquadMember, type Insight, type SectionConfig, type SectionData, type ModelData,
    INITIAL_MODEL_DATA, SECTIONS,
} from './canvasData';

import { CanvasSidebar } from './CanvasSidebar';

// --- VISUAL FLOW CONNECTOR (SVG) ---
function BackgroundFlow() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block opacity-30 z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                <path d="M 10% 40% Q 25% 40%, 30% 30% T 50% 40% T 70% 30% T 90% 40%" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
                <path d="M 10% 50% Q 25% 60%, 30% 70% T 50% 50% T 70% 70% T 90% 50%" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="10 10" opacity="0.5" />
            </svg>
        </div>
    );
}

// --- CARD COMPONENT ---
function CanvasCard({ section, data, squadData, onClick, className = "", isFeatured: _isFeatured = false }: {
    section: SectionConfig; data: SectionData; squadData?: SquadMember[]; onClick: () => void; className?: string; isFeatured?: boolean;
}) {
    const Icon = section.icon;
    const [isCollapsed, setIsCollapsed] = useState(false);
    const squad = squadData || INITIAL_MODEL_DATA[section.id].squad;
    const products = data?.products;
    const activeCount = Array.isArray(squad) ? squad.reduce((acc, r) => (r.active ? acc + (r.multiplier || 1) : acc), 0) : 0;

    return (
        <div
            onClick={onClick} role="button" tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
            className={`relative group overflow-hidden rounded-[2rem] border bg-[#0B1121]/80 backdrop-blur-md shadow-2xl transition-all duration-500 flex flex-col focus:outline-none focus:ring-4 focus:ring-indigo-500/50 ${section.border} ${section.glow} hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.5)] ${className} ${isCollapsed ? 'h-auto' : 'h-full'}`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-100 pointer-events-none transition-opacity duration-500 group-hover:opacity-80`} />
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button onClick={(e) => { e.stopPropagation(); window.open('https://notebooklm.google.com', '_blank'); }}
                    className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white/70 hover:text-white transition-colors backdrop-blur-sm border border-white/5 opacity-0 group-hover:opacity-100" title="Abrir en NotebookLM">
                    <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); setIsCollapsed(!isCollapsed); }}
                    className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white/70 hover:text-white transition-colors backdrop-blur-sm border border-white/5" title={isCollapsed ? "Expandir" : "Colapsar"}>
                    {isCollapsed ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
                </button>
            </div>

            <div className="px-5 py-4 flex items-center justify-between relative z-10 border-b border-white/5 bg-white/[0.02] cursor-pointer">
                <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-2xl shadow-lg ${section.iconBg} ${section.iconColor} ring-1 ring-white/10 relative overflow-hidden group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Icon className="w-5 h-5 relative z-10" />
                    </div>
                    <div>
                        <h3 className={`font-black text-xs uppercase tracking-widest ${section.accent} mb-0.5`}>{section.title}</h3>
                        <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase block mb-0.5">{section.canvasTitle}</span>
                    </div>
                </div>
            </div>

            {!isCollapsed && (
                <div className="px-5 pb-5 pt-3 flex-grow flex flex-col relative z-10 overflow-hidden cursor-pointer">
                    <p className="text-[10px] text-slate-400 mb-3 leading-relaxed border-l-2 border-white/10 pl-2">{section.description}</p>
                    <div className="flex-grow overflow-y-auto pr-2 premium-scrollbar mb-4">
                        {products && products.length > 0 && (
                            <div className="mb-5 space-y-2">
                                <div className="text-[9px] font-extrabold text-white/50 uppercase tracking-widest mb-1 pl-1 flex items-center gap-2">
                                    <Package className="w-3 h-3" /> Catálogo de Servicios
                                </div>
                                {products.map((prod, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-2.5 rounded-xl flex justify-between items-center group/prod hover:bg-white/10 transition-colors">
                                        <div>
                                            <div className="text-[10px] font-bold text-white group-hover/prod:text-indigo-300 transition-colors">{prod.name}</div>
                                            <div className="text-[9px] text-slate-400">{prod.desc}</div>
                                        </div>
                                        <div className="text-[10px] font-bold text-emerald-400 bg-emerald-900/30 px-2 py-0.5 rounded border border-emerald-500/20">{prod.price}</div>
                                    </div>
                                ))}
                                <div className="h-px bg-white/10 my-3"></div>
                            </div>
                        )}
                        <div className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2 pl-1">EQUIPO ({activeCount})</div>
                        <div className="space-y-2">
                            {Array.isArray(squad) && squad.map((member, i) => (
                                <div key={i} className={`flex flex-col bg-slate-800/20 p-2 rounded-xl border border-white/5 gap-1.5 group/item transition-all cursor-crosshair ${member.active ? 'hover:bg-slate-700/30 hover:border-white/10' : 'opacity-40 grayscale'}`}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-bold text-slate-200 truncate max-w-[140px]" title={member.role}>{member.role} {member.multiplier ? `(x${member.multiplier})` : ''}</span>
                                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 bg-black/30 border border-white/5 ${section.accent}`}>{member.agent.split('-')[1]}</span>
                                    </div>
                                    <div className="text-[9px] text-slate-500 font-medium leading-tight truncate border-l-2 border-slate-700 pl-2">{member.function}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pt-4 border-t border-white/5 mt-auto bg-gradient-to-t from-[#0B1121] to-transparent -mx-2 px-2">
                        <span className={`text-[9px] font-bold uppercase tracking-widest mb-1.5 block flex items-center gap-1.5 ${section.accent}`}>Objetivo Estratégico</span>
                        <p className="text-[10px] font-medium text-slate-400 leading-relaxed line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">{section.ceoObjective}</p>
                    </div>
                </div>
            )}
            {isCollapsed && (
                <div className="px-5 pb-4 relative z-10 cursor-pointer">
                    <div className="flex items-center gap-2 mb-2"><span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-black/30 border border-white/5 text-slate-300">{activeCount} Empleados</span></div>
                    <p className="text-[10px] font-medium text-slate-400 leading-tight line-clamp-1">{section.ceoObjective}</p>
                </div>
            )}
        </div>
    );
}

// --- MODAL ---
function SmartConnectionModal({ section, data, onClose, onChange, onAddInsight, onDeleteInsight, onDragStart, onDropMember, draggedInsight }: {
    section: SectionConfig; data: SectionData; onClose: () => void; onChange: (u: any) => void;
    onAddInsight: (text: string, type: string) => void; onDeleteInsight: (id: number) => void;
    onDragStart: (e: React.DragEvent, insight: Insight) => void; onDropMember: (e: React.DragEvent, member: SquadMember, section: SectionConfig) => void;
    draggedInsight: Insight | null;
}) {
    const Icon = section.icon;
    const [newInsightText, setNewInsightText] = useState("");
    const [insightType, setInsightType] = useState("strategy");
    const [mobileTab, setMobileTab] = useState('squad');
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const [editingMemberIndex, setEditingMemberIndex] = useState<number | null>(null);
    const [editForm, setEditForm] = useState<any>({});

    const squad = data.squad || INITIAL_MODEL_DATA[section.id].squad;
    const products = data.products;
    const sectionCost = Array.isArray(squad) ? squad.reduce((acc, role) => role.active ? acc + (role.salary * (role.multiplier || 1)) : acc, 0) : 0;
    const activeCount = Array.isArray(squad) ? squad.reduce((acc, role) => role.active ? acc + (role.multiplier || 1) : acc, 0) : 0;

    const handleAdd = () => { if (!newInsightText.trim()) return; onAddInsight(newInsightText, insightType); setNewInsightText(""); };
    const handleAddMember = () => { onChange({ squad: [...squad, { role: "Nuevo Especialista", salary: 30000, active: true, function: "Pendiente de asignar", agent: "ACTIVA-Bot", result: "N/A", multiplier: 1 }] }); };
    const handleRemoveMember = (index: number) => { const s = [...squad]; s.splice(index, 1); onChange({ squad: s }); setOpenMenuIndex(null); };
    const handleToggleActive = (index: number) => { const s = [...squad]; s[index] = { ...s[index], active: !s[index].active }; onChange({ squad: s }); };
    const handleEditClick = (member: SquadMember, index: number) => { setEditingMemberIndex(index); setEditForm({ ...member }); setOpenMenuIndex(null); };
    const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEditForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value })); };
    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => { const file = e.target.files?.[0]; if (file) { const reader = new FileReader(); reader.onloadend = () => { setEditForm((prev: any) => ({ ...prev, photo: reader.result })); }; reader.readAsDataURL(file); } };
    const saveEdit = () => { const s = [...squad]; s[editingMemberIndex!] = { ...editForm, salary: parseInt(editForm.salary) || 0 }; onChange({ squad: s }); setEditingMemberIndex(null); setEditForm({}); };
    const cancelEdit = () => { setEditingMemberIndex(null); setEditForm({}); };
    const getProductIcon = (name: string) => { if (name.includes("CAPTACIÓN")) return Magnet; if (name.includes("ORGANIZACIÓN")) return Shield; if (name.includes("SECRETARÍA")) return PhoneForwarded; if (name.includes("TRANSFORMACIÓN")) return Rocket; return Package; };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300" onClick={() => setOpenMenuIndex(null)}>
            <div className="bg-[#0f172a] w-full max-w-7xl rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-slate-700/50 h-[92vh] ring-1 ring-white/10 relative" onClick={(e) => { e.stopPropagation(); setOpenMenuIndex(null); }}>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                {/* Header */}
                <div className="px-4 lg:px-10 py-6 lg:py-8 border-b border-white/5 flex items-center justify-between bg-slate-900/50 relative z-10 shrink-0">
                    <div className="flex items-center gap-4 lg:gap-8 overflow-hidden">
                        <div className={`p-3 lg:p-5 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.3)] ${section.iconBg} ${section.iconColor} ring-1 ring-white/20 relative overflow-hidden flex items-center justify-center shrink-0`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent mix-blend-overlay"></div>
                            <Icon className="w-8 h-8 lg:w-10 lg:h-10 relative z-10 drop-shadow-md" />
                        </div>
                        <div className="min-w-0">
                            <h2 className="font-black text-2xl lg:text-4xl text-white tracking-tighter flex flex-col lg:flex-row lg:items-center gap-2 mb-1 lg:mb-2 truncate">
                                <span className="truncate">{section.title}</span>
                                <span className="bg-slate-800/80 text-slate-300 text-[10px] lg:text-xs px-3 py-1 rounded-full font-bold border border-slate-600/50 uppercase tracking-widest backdrop-blur-md w-fit flex items-center gap-2">
                                    {activeCount} Expertos Activos <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                </span>
                            </h2>
                            <div className="hidden lg:flex items-center gap-3 mt-3 bg-black/30 border border-white/10 text-white px-5 py-2.5 rounded-xl shadow-inner max-w-2xl">
                                <Crown className="w-4 h-4 text-amber-400 shrink-0" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 shrink-0 border-r border-white/10 pr-3 mr-1">KPI CEO</span>
                                <p className="text-sm font-medium text-slate-200 truncate">{section.ceoObjective}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-3 lg:p-4 bg-slate-800/50 hover:bg-red-500/20 hover:border-red-500/50 border border-white/10 rounded-full transition-all text-slate-400 hover:text-red-400 group shrink-0 ml-2">
                        <X className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                {/* Mobile Tabs */}
                <div className="flex lg:hidden border-b border-white/5 bg-slate-900/40 shrink-0 relative z-20">
                    <button onClick={() => setMobileTab('squad')} className={`flex-1 py-4 text-xs font-black uppercase tracking-widest transition-colors ${mobileTab === 'squad' ? 'text-indigo-400 border-b-2 border-indigo-500 bg-indigo-500/5' : 'text-slate-500 hover:text-slate-300'}`}>Equipo Humano</button>
                    <button onClick={() => setMobileTab('strategy')} className={`flex-1 py-4 text-xs font-black uppercase tracking-widest transition-colors ${mobileTab === 'strategy' ? 'text-indigo-400 border-b-2 border-indigo-500 bg-indigo-500/5' : 'text-slate-500 hover:text-slate-300'}`}>Estrategia</button>
                </div>

                <div className="flex flex-col lg:flex-row flex-grow overflow-hidden bg-[#020617] relative z-10">
                    {/* LEFT: SQUAD */}
                    <div className={`w-full lg:w-7/12 border-r border-white/5 p-4 lg:p-10 flex flex-col gap-6 lg:gap-8 overflow-y-auto premium-scrollbar ${mobileTab === 'squad' ? 'flex' : 'hidden lg:flex'}`}>
                        <div className="lg:hidden flex items-start gap-3 bg-black/30 border border-white/10 text-white px-4 py-3 rounded-xl shadow-inner mb-2">
                            <Crown className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <div><span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">KPI CEO</span><p className="text-sm font-medium text-slate-200 leading-snug">{section.ceoObjective}</p></div>
                        </div>
                        <div className="flex items-center justify-between pb-4 border-b border-white/5">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-3"><Layers className="w-4 h-4 text-indigo-500" /> Equipo Humano + IA</label>
                            <div className="flex items-center gap-3">
                                <button onClick={handleAddMember} className="p-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 rounded-lg transition-all" title="Añadir nuevo miembro"><Plus className="w-4 h-4" /></button>
                                <div className="text-xs font-bold text-slate-300 bg-slate-800/50 border border-slate-700/50 px-4 py-1.5 rounded-full shadow-lg"><span className="text-slate-500 mr-2 hidden sm:inline">OPEX:</span>{(sectionCost / 1000).toFixed(0)}k €/año</div>
                            </div>
                        </div>

                        {/* Products */}
                        {products && products.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-xs font-black text-white/50 uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><Award className="w-4 h-4 text-amber-400" /> Catálogo de Servicios Premium</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {products.map((prod, i) => {
                                        const PI = getProductIcon(prod.name); return (
                                            <div key={i} className="bg-gradient-to-br from-indigo-900/20 to-slate-900/40 border border-indigo-500/20 p-5 rounded-2xl flex flex-col gap-3 relative overflow-hidden group hover:border-indigo-500/50 transition-all hover:-translate-y-1">
                                                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <div className="flex justify-between items-start relative z-10"><div className="flex items-center gap-3"><div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-300"><PI className="w-5 h-5" /></div><div><div className="font-black text-white text-sm tracking-wide">{prod.name}</div><div className="text-[10px] text-emerald-400 font-bold tracking-wider">DESDE {prod.price}/MES</div></div></div></div>
                                                <div className="text-xs text-slate-300 relative z-10 font-medium leading-relaxed border-t border-white/5 pt-2">{prod.desc}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mt-6 bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl flex items-center gap-4">
                                    <div className="p-2 bg-slate-800 rounded-full border border-slate-600"><ShieldCheck className="w-5 h-5 text-slate-400" /></div>
                                    <div><div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">La Promesa Titanium</div><div className="text-xs text-slate-300 font-medium">Soberanía Digital • Seguridad Bancaria • Eficiencia Total</div></div>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 pb-20 lg:pb-0 relative">
                            {/* Edit Overlay */}
                            {editingMemberIndex !== null && (
                                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-[60] flex items-start justify-center pt-10">
                                    <div className="bg-[#0f172a] border border-indigo-500/50 p-6 rounded-2xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Edit className="w-5 h-5 text-indigo-400" /> Editar Perfil</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center shrink-0">
                                                    {editForm.photo ? <img src={editForm.photo} alt="Preview" className="w-full h-full object-cover" /> : <Camera className="w-6 h-6 text-slate-500" />}
                                                </div>
                                                <div><label className="block text-xs font-bold text-slate-400 mb-1">Foto de Perfil</label><label className="cursor-pointer bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-xs px-3 py-1.5 rounded-lg border border-indigo-500/30 flex items-center gap-2 transition-colors"><Upload className="w-3 h-3" /> Subir Imagen<input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} /></label></div>
                                            </div>
                                            <div><label className="block text-xs font-bold text-slate-400 mb-1">Rol / Cargo</label><input type="text" name="role" value={editForm.role || ''} onChange={handleEditFormChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none" /></div>
                                            <div><label className="block text-xs font-bold text-slate-400 mb-1">Función Principal</label><input type="text" name="function" value={editForm.function || ''} onChange={handleEditFormChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none" /></div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div><label className="block text-xs font-bold text-slate-400 mb-1">Agente IA</label><input type="text" name="agent" value={editForm.agent || ''} onChange={handleEditFormChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none" /></div>
                                                <div><label className="block text-xs font-bold text-slate-400 mb-1">Salario Anual (€)</label><input type="number" name="salary" value={editForm.salary || ''} onChange={handleEditFormChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none" /></div>
                                            </div>
                                            <div><label className="block text-xs font-bold text-slate-400 mb-1">Enlace NotebookLM</label><input type="text" name="notebookUrl" value={editForm.notebookUrl || ''} onChange={handleEditFormChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 focus:border-indigo-500 outline-none placeholder:text-slate-700" placeholder="https://..." /></div>
                                        </div>
                                        <div className="flex gap-2 mt-6 justify-end">
                                            <button onClick={cancelEdit} className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">Cancelar</button>
                                            <button onClick={saveEdit} className="px-4 py-2 text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-lg transition-colors">Guardar Cambios</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Squad Cards */}
                            {Array.isArray(squad) && squad.map((member, i) => (
                                <div key={i}
                                    className={`bg-slate-900/40 p-5 lg:p-6 rounded-3xl border shadow-sm flex flex-col gap-5 transition-all group relative overflow-visible ${draggedInsight && member.active ? 'border-dashed border-indigo-500/50 bg-indigo-900/10 cursor-alias' : 'border-white/5 hover:border-indigo-500/30 hover:bg-slate-800/40'} ${!member.active ? 'opacity-50 grayscale border-dashed bg-slate-950/20' : ''}`}
                                    onDragOver={(e) => { if (member.active) { e.preventDefault(); e.currentTarget.classList.add('scale-[1.02]', 'border-indigo-400', 'bg-indigo-900/20'); } }}
                                    onDragLeave={(e) => { e.currentTarget.classList.remove('scale-[1.02]', 'border-indigo-400', 'bg-indigo-900/20'); }}
                                    onDrop={(e) => { if (member.active) { e.preventDefault(); e.currentTarget.classList.remove('scale-[1.02]', 'border-indigo-400', 'bg-indigo-900/20'); onDropMember(e, member, section); } }}
                                >
                                    {/* Config menu */}
                                    <div className="absolute top-4 right-4 z-50">
                                        <button onClick={(e) => { e.stopPropagation(); setOpenMenuIndex(openMenuIndex === i ? null : i); }} className="p-1.5 text-slate-500 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"><MoreVertical className="w-4 h-4" /></button>
                                        {openMenuIndex === i && (
                                            <div className="absolute right-0 top-8 bg-slate-800 border border-white/10 rounded-xl shadow-2xl py-1 w-40 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50">
                                                <button className={`px-4 py-2 text-left text-xs font-bold flex items-center gap-2 transition-colors border-b border-white/5 ${member.active ? 'text-emerald-400 hover:bg-emerald-900/20' : 'text-slate-400 hover:bg-slate-700'}`} onClick={(e) => { e.stopPropagation(); handleToggleActive(i); }}>
                                                    {member.active ? <UserCheck className="w-3 h-3" /> : <UserX className="w-3 h-3" />} {member.active ? 'En Misión' : 'En Base'}
                                                </button>
                                                <button className="px-4 py-2 text-left text-xs font-bold text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2 transition-colors" onClick={(e) => { e.stopPropagation(); handleEditClick(member, i); }}><Edit className="w-3 h-3" /> Editar</button>
                                                <button className="px-4 py-2 text-left text-xs font-bold text-red-400 hover:bg-red-900/20 hover:text-red-300 flex items-center gap-2 transition-colors border-t border-white/5" onClick={(e) => { e.stopPropagation(); handleRemoveMember(i); }}><Trash2 className="w-3 h-3" /> Eliminar</button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Human Role */}
                                    <div className="flex items-start gap-4 relative z-10 pointer-events-none">
                                        <div className={`p-1 rounded-2xl shadow-inner border border-white/5 flex items-center justify-center overflow-hidden w-12 h-12 shrink-0 ${!member.active ? 'bg-slate-900' : 'bg-slate-800'}`}>
                                            {member.photo ? <img src={member.photo} alt={member.role} className="w-full h-full object-cover" /> : <User className={`w-6 h-6 ${!member.active ? 'text-slate-600' : 'text-slate-400'}`} />}
                                        </div>
                                        <div className="flex-1 pr-6">
                                            <div className={`text-sm font-bold leading-tight pr-2 ${!member.active ? 'text-slate-500' : 'text-slate-100'}`}>{member.role} {member.multiplier ? `(x${member.multiplier})` : ''}</div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border flex items-center gap-0.5 whitespace-nowrap w-fit ${member.active ? 'text-emerald-400 bg-emerald-950/50 border-emerald-500/20' : 'text-slate-500 bg-slate-900 border-slate-700'}`}>{member.salary.toLocaleString('es-ES')}€</span>
                                                {!member.active && <span className="text-[9px] font-bold px-2 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-400 uppercase tracking-wider">INACTIVO</span>}
                                            </div>
                                            <div className={`text-xs mt-2 font-medium px-3 py-1.5 rounded-lg border inline-block leading-relaxed ${member.active ? 'text-slate-500 bg-black/20 border-white/5' : 'text-slate-600 bg-transparent border-transparent'}`}>{member.function}</div>
                                        </div>
                                    </div>

                                    {/* Agent */}
                                    {member.active && (
                                        <div className="flex items-center justify-between gap-3 pl-4 border-l-2 border-indigo-500/30 ml-5 py-1 relative z-10 group/agent">
                                            <div className="flex items-center gap-3"><div className="bg-indigo-500/10 p-1.5 rounded-lg border border-indigo-500/20 flex items-center justify-center"><Bot className="w-4 h-4 text-indigo-400" /></div><div><div className="text-xs font-bold text-indigo-300">{member.agent}</div><div className="text-[10px] text-indigo-500/70 font-medium">Agente IA Asignado</div></div></div>
                                            <button onClick={(e) => { e.stopPropagation(); window.open(member.notebookUrl || 'https://notebooklm.google.com', '_blank'); }} className="p-1.5 bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-500/30 text-indigo-300 rounded-lg backdrop-blur-md shadow-lg transition-all opacity-0 group-hover/agent:opacity-100 transform translate-x-2 group-hover/agent:translate-x-0" title="Abrir NotebookLM"><ExternalLink className="w-3.5 h-3.5" /></button>
                                        </div>
                                    )}

                                    {/* KPI */}
                                    {member.active && (
                                        <div className="bg-emerald-900/5 p-4 rounded-2xl border border-emerald-500/10 flex items-start gap-3 relative z-10 pointer-events-none">
                                            <Goal className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /><div><span className="text-[10px] font-bold text-emerald-600/80 uppercase block mb-0.5 tracking-wider">KPI / Resultado Clave</span><span className="text-xs text-slate-300 font-medium leading-tight">{member.result}</span></div>
                                        </div>
                                    )}
                                    {member.active && <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${section.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>}
                                    {draggedInsight && member.active && (
                                        <div className="absolute inset-0 bg-indigo-900/40 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                                            <div className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold shadow-2xl transform scale-110 flex items-center gap-2"><ArrowUpRight className="w-4 h-4" />Soltar para Delegar</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: STRATEGY BOARD */}
                    <div className={`flex-1 p-4 lg:p-10 flex flex-col gap-6 lg:gap-8 overflow-y-auto bg-slate-900/20 relative ${mobileTab === 'strategy' ? 'flex' : 'hidden lg:flex'}`}>
                        <div className="absolute inset-0 bg-grid-slate-800/[0.1] -z-10" style={{ backgroundSize: '20px 20px' }} />
                        <div className="flex-1 flex flex-col gap-4 h-full pb-20 lg:pb-0">
                            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-white/5 gap-4">
                                <div className="flex items-center gap-3"><div className="p-2 bg-slate-800 rounded-lg text-slate-400 border border-white/5 flex items-center justify-center"><StickyNote className="w-5 h-5" /></div><h4 className="font-bold text-base text-slate-200">Pizarra Estratégica</h4></div>
                                <div className="flex gap-2 w-full md:max-w-md">
                                    <select value={insightType} onChange={(e) => setInsightType(e.target.value)} className="bg-slate-900 text-xs font-bold text-slate-300 rounded-xl px-2 lg:px-3 border border-slate-700 focus:outline-none focus:border-indigo-500">
                                        <option value="strategy">Estrategia</option><option value="risk">Riesgo</option><option value="opportunity">Oportunidad</option>
                                    </select>
                                    <input type="text" placeholder="Nueva nota..." className="flex-1 bg-slate-900 text-sm text-slate-200 rounded-xl px-3 lg:px-4 py-2 border border-slate-700 focus:outline-none focus:border-indigo-500 placeholder:text-slate-600 min-w-0" value={newInsightText} onChange={(e) => setNewInsightText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAdd()} />
                                    <button onClick={handleAdd} className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors shrink-0"><Plus className="w-5 h-5" /></button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 auto-rows-max">
                                {data.insights && data.insights.map((insight) => (
                                    <div key={insight.id} draggable="true" onDragStart={(e) => onDragStart(e, insight)}
                                        className={`relative group p-5 rounded-2xl border backdrop-blur-md shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl cursor-grab active:cursor-grabbing ${insight.type === 'risk' ? 'bg-red-500/10 border-red-500/30' : insight.type === 'opportunity' ? 'bg-emerald-500/10 border-emerald-500/30' : `${section.iconBg} ${section.border.replace('30', '20')}`}`}>
                                        <div className="flex justify-between items-start mb-2 pointer-events-none">
                                            <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${insight.type === 'risk' ? 'bg-red-500/20 text-red-300 border-red-500/30' : insight.type === 'opportunity' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-slate-900/30 text-white/70 border-white/10'}`}>
                                                {insight.type === 'risk' ? 'Riesgo' : insight.type === 'opportunity' ? 'Oportunidad' : 'Estrategia'}
                                            </span>
                                            <div className={`p-1.5 rounded-full ${insight.type === 'risk' ? 'bg-red-500/20 text-red-400' : insight.type === 'opportunity' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-white/50'}`}>
                                                {insight.type === 'risk' ? <AlertOctagon className="w-3 h-3" /> : insight.type === 'opportunity' ? <ArrowUpRight className="w-3 h-3" /> : <Target className="w-3 h-3" />}
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-slate-200 leading-relaxed pointer-events-none">{insight.text}</p>
                                        <div className="hidden lg:block absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded pointer-events-none">Arrastra para delegar</div>
                                        <button onClick={(e) => { e.stopPropagation(); onDeleteInsight(insight.id); }} className="absolute bottom-3 right-3 p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                ))}
                                {(!data.insights || data.insights.length === 0) && (
                                    <div className="col-span-2 py-10 border-2 border-dashed border-slate-700/50 rounded-2xl flex flex-col items-center justify-center text-slate-500">
                                        <StickyNote className="w-8 h-8 mb-2 opacity-50" /><p className="text-sm font-medium">No hay notas estratégicas aún.</p><p className="text-xs opacity-70">Añade riesgos, oportunidades o tácticas arriba.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- MAIN COMPONENT ---
import { ChiefOfStaff } from '../dashboard/ChiefOfStaff';

export default function StrategicCanvas() {
    const { logout } = useAuth();
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [showWarRoom, setShowWarRoom] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const handleLogout = async () => {
        await logout();
        window.location.reload(); // Ensure clean state
    };
    const [modelData, setModelData] = useState<ModelData>(() => {
        try {
            const saved = localStorage.getItem('activa_dashboard_v9');
            if (!saved) return INITIAL_MODEL_DATA;
            const parsed = JSON.parse(saved);
            const merged: ModelData = { ...INITIAL_MODEL_DATA };
            Object.keys(parsed).forEach(key => {
                if (merged[key]) {
                    merged[key] = { ...merged[key], ...parsed[key], squad: parsed[key].squad ? parsed[key].squad.map((m: any) => ({ ...m, active: m.active !== undefined ? m.active : true })) : merged[key].squad };
                }
            });
            return merged;
        } catch { return INITIAL_MODEL_DATA; }
    });

    useEffect(() => { try { localStorage.setItem('activa_dashboard_v9', JSON.stringify(modelData)); } catch { /* noop */ } }, [modelData]);



    const openEditor = (key: string) => setActiveSection(key);
    const closeEditor = () => setActiveSection(null);
    const handleUpdate = (updates: any) => { setModelData(prev => ({ ...prev, [activeSection!]: { ...prev[activeSection!], ...updates } })); };
    const addInsight = (text: string, type: string) => { const insights = modelData[activeSection!]?.insights || []; handleUpdate({ insights: [...insights, { id: Date.now(), text, type }] }); };
    const deleteInsight = (id: number) => { const insights = modelData[activeSection!]?.insights || []; handleUpdate({ insights: insights.filter((i: Insight) => i.id !== id) }); };

    const [draggedInsight, setDraggedInsight] = useState<Insight | null>(null);
    const [notification, setNotification] = useState<{ title: string; text: string; type: string } | null>(null);

    const handleDragStart = (e: React.DragEvent, insight: Insight) => { setDraggedInsight(insight); e.dataTransfer.effectAllowed = "copy"; };

    const handleDrop = (e: React.DragEvent, member: SquadMember, sectionContext: SectionConfig) => {
        e.preventDefault();
        if (!draggedInsight) return;
        if (!member.active) { setNotification({ title: 'Empleado Inactivo', text: 'No se pueden delegar tareas a empleados en reserva.', type: 'error' }); return; }
        const prompt = `🚨 *ASIGNACIÓN DE TAREA ESTRATÉGICA* 🚨\n\n👤 *Para:* ${member.role} (${sectionContext.title})\n🎯 *Objetivo del Dpto:* ${sectionContext.ceoObjective}\n📝 *Tarea Asignada:* ${draggedInsight.text}\n🏷️ *Tipo:* ${draggedInsight.type.toUpperCase()}\n\n> *INSTRUCCIÓN:* Como responsable de este área, analiza esta tarea y genera un plan de acción inmediato de 3 pasos.`;
        const ta = document.createElement("textarea"); ta.value = prompt; ta.style.position = "fixed"; ta.style.left = "-9999px"; document.body.appendChild(ta); ta.focus(); ta.select();
        try {
            document.execCommand('copy');
            setNotification({ title: `Tarea delegada a ${member.role}`, text: 'Instrucción copiada. Pegar en NotebookLM.', type: 'success' });
            setTimeout(() => { window.open(member.notebookUrl || 'https://notebooklm.google.com', '_blank'); }, 1200);
            setDraggedInsight(null); setTimeout(() => setNotification(null), 5000);
        } catch { setNotification({ title: 'Error al copiar', text: 'No se pudo copiar la instrucción automáticamente.', type: 'error' }); }
        document.body.removeChild(ta);
    };

    return (
        <div className="flex h-screen w-full bg-[#020617] font-sans text-slate-100 overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">

            {/* 1. SIDEBAR NAVIGATION */}
            <CanvasSidebar activeSection={activeSection} onNavigate={setActiveSection} />

            {/* 2. MAIN CONTENT AREA */}
            <div className="flex-1 relative h-full overflow-y-auto overflow-x-hidden premium-scrollbar">

                {/* BACKGROUND FX */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <BackgroundFlow />
                    <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
                </div>

                {/* CONTENT CONTAINER */}
                <div className="relative z-10 max-w-[1600px] w-full mx-auto p-4 lg:p-8 flex flex-col gap-6 min-h-screen">

                    {/* TOP BAR: ACTIONS ONLY (Logo is now in Sidebar) */}
                    <header className="flex justify-end items-center gap-4 mb-2">
                        {/* WAR ROOM ACTIVATOR & SETTINGS */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setShowWarRoom(true)}
                                className="group relative px-6 py-3 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 border border-indigo-500/30 rounded-2xl shadow-[0_0_30px_rgba(79,70,229,0.1)] hover:shadow-[0_0_50px_rgba(79,70,229,0.2)] transition-all flex items-center gap-4 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                                <div className="p-1.5 bg-indigo-600 rounded-lg relative z-10 shadow-lg group-hover:scale-110 transition-transform"><Bot className="w-5 h-5 text-white" /></div>
                                <div className="text-left relative z-10 hidden md:block">
                                    <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest leading-none mb-1">AI ASSISTANT</div>
                                    <div className="text-sm font-black text-white tracking-tight leading-none">WAR ROOM</div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10" />
                            </button>

                            {/* SETTINGS DROPDOWN */}
                            <div className="relative z-50">
                                <button
                                    onClick={() => setShowSettings(!showSettings)}
                                    className="p-3 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 border border-white/10 hover:border-white/30 rounded-xl shadow-lg transition-all text-slate-400 hover:text-white group"
                                >
                                    <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                                </button>

                                {showSettings && (
                                    <div className="absolute top-full right-0 mt-2 w-56 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 p-1.5 flex flex-col gap-1 z-[100]">
                                        <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-slate-800 rounded-xl transition-colors text-left group/item disabled:opacity-50 disabled:cursor-not-allowed">
                                            <div className="p-1.5 bg-slate-800 group-hover/item:bg-slate-700 rounded-lg text-slate-400 group-hover/item:text-white transition-colors"><User className="w-4 h-4" /></div>
                                            <span className="text-xs font-bold text-slate-300">Perfil</span>
                                        </button>
                                        <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-slate-800 rounded-xl transition-colors text-left group/item">
                                            <div className="p-1.5 bg-slate-800 group-hover/item:bg-slate-700 rounded-lg text-slate-400 group-hover/item:text-white transition-colors"><Bell className="w-4 h-4" /></div>
                                            <span className="text-xs font-bold text-slate-300">Notificaciones</span>
                                        </button>
                                        <div className="h-px bg-white/10 my-1"></div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-red-900/20 rounded-xl transition-colors text-left group/item"
                                        >
                                            <div className="p-1.5 bg-red-900/10 group-hover/item:bg-red-900/30 rounded-lg text-red-500 group-hover/item:text-red-400 transition-colors"><LogOut className="w-4 h-4" /></div>
                                            <span className="text-xs font-bold text-red-400">Cerrar Sesión</span>
                                        </button>
                                    </div>
                                )}
                                {showSettings && <div className="fixed inset-0 z-[-1] cursor-default" onClick={() => setShowSettings(false)}></div>}
                            </div>
                        </div>
                    </header>

                    {/* CANVAS GRID */}
                    <main className="flex-grow flex flex-col gap-6 relative z-10 pb-32">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:min-h-[850px] relative">
                            <CanvasCard section={SECTIONS.key_partners} data={modelData.key_partners} squadData={modelData.key_partners?.squad} onClick={() => openEditor('key_partners')} className="md:row-span-2 h-full" />
                            <div className="flex flex-col gap-6 h-full">
                                <CanvasCard section={SECTIONS.key_activities} data={modelData.key_activities} squadData={modelData.key_activities?.squad} onClick={() => openEditor('key_activities')} className="flex-1" />
                                <CanvasCard section={SECTIONS.key_resources} data={modelData.key_resources} squadData={modelData.key_resources?.squad} onClick={() => openEditor('key_resources')} className="flex-1" />
                            </div>
                            <CanvasCard section={SECTIONS.value_propositions} data={modelData.value_propositions} squadData={modelData.value_propositions?.squad} onClick={() => openEditor('value_propositions')} className="md:row-span-2 h-full ring-4 ring-purple-500/10 border-purple-500/30 transform md:-translate-y-2 z-20 shadow-[0_0_50px_rgba(168,85,247,0.15)]" isFeatured={true} />
                            <div className="flex flex-col gap-6 h-full">
                                <CanvasCard section={SECTIONS.customer_relationships} data={modelData.customer_relationships} squadData={modelData.customer_relationships?.squad} onClick={() => openEditor('customer_relationships')} className="flex-1" />
                                <CanvasCard section={SECTIONS.channels} data={modelData.channels} squadData={modelData.channels?.squad} onClick={() => openEditor('channels')} className="flex-1" />
                            </div>
                            <CanvasCard section={SECTIONS.customer_segments} data={modelData.customer_segments} squadData={modelData.customer_segments?.squad} onClick={() => openEditor('customer_segments')} className="md:row-span-2 h-full" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-72">
                            <CanvasCard section={SECTIONS.cost_structure} data={modelData.cost_structure} squadData={modelData.cost_structure?.squad} onClick={() => openEditor('cost_structure')} className="h-full" />
                            <CanvasCard section={SECTIONS.revenue_streams} data={modelData.revenue_streams} squadData={modelData.revenue_streams?.squad} onClick={() => openEditor('revenue_streams')} className="h-full" />
                        </div>
                    </main>
                </div>
            </div>

            {/* OVERLAYS (Outside main content for z-index containment) */}
            {notification && (
                <div className="fixed top-6 right-6 z-[200] animate-in slide-in-from-top-5 duration-300">
                    <div className={`backdrop-blur-md border px-6 py-4 rounded-2xl shadow-2xl flex items-start gap-4 max-w-sm ${notification.type === 'error' ? 'bg-red-900/90 border-red-500/50' : 'bg-slate-800/90 border-emerald-500/50'}`}>
                        <div className={`p-2 rounded-full ${notification.type === 'error' ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                            {notification.type === 'error' ? <AlertCircle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                        </div>
                        <div><h4 className={`font-bold text-sm ${notification.type === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>{notification.title}</h4><p className="text-xs text-slate-300 mt-1">{notification.text}</p></div>
                    </div>
                </div>
            )}

            {showWarRoom && <ChiefOfStaff onClose={() => setShowWarRoom(false)} />}
            {activeSection && (
                <SmartConnectionModal section={SECTIONS[activeSection]} data={modelData[activeSection]} onClose={closeEditor} onChange={handleUpdate} onAddInsight={addInsight} onDeleteInsight={deleteInsight} onDragStart={handleDragStart} onDropMember={handleDrop} draggedInsight={draggedInsight} />
            )}

            <style>{`.premium-scrollbar::-webkit-scrollbar{width:4px;height:4px}.premium-scrollbar::-webkit-scrollbar-track{background:transparent}.premium-scrollbar::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:10px}.premium-scrollbar::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,0.2)}.premium-scrollbar{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,0.1) transparent}`}</style>
        </div>
    );
}
