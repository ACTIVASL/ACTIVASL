import { motion } from 'framer-motion';
import { LayoutDashboard, ChevronLeft, ChevronRight, Settings, LogOut, User, Bell } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { SECTIONS, SectionConfig } from './canvasData';
import { ActivaBrandLogo } from '../../components/ui/ActivaBrandLogo';

interface CanvasSidebarProps {
    activeSection: string | null;
    onNavigate: (sectionId: string | null) => void;
    isCollapsed: boolean;
    onToggle: () => void;
}

export function CanvasSidebar({ activeSection, onNavigate, isCollapsed, onToggle }: CanvasSidebarProps) {
    // Map entries for easier iteration
    const sectionList = Object.values(SECTIONS);

    return (
        <motion.nav
            initial={false}
            animate={{ width: isCollapsed ? 80 : 320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border-r border-white/10 flex flex-col h-full shrink-0 relative z-[100] shadow-[10px_0_30px_rgba(0,0,0,0.5)]`}
            aria-label="Main Navigation"
        >
            {/* AMBIENT GLOW - METALLIC SHINE */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl pointer-events-none z-0" />

            {/* TOGGLE BUTTON */}
            <button
                onClick={onToggle}
                className="absolute -right-3 top-20 bg-slate-800 border border-white/10 rounded-full p-1 text-slate-400 hover:text-white hover:bg-blue-600 transition-all z-50 shadow-lg"
                aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                aria-expanded={!isCollapsed}
                title={isCollapsed ? "Expandir" : "Colapsar"}
            >
                {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>

            {/* HEADER - LOGO ONLY (User Request Phase 77) */}
            <div className={`p-6 border-b border-white/5 flex justify-center transition-all relative z-10 ${isCollapsed ? 'px-2' : ''}`}>
                <div className={`bg-[#0B1121]/50 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all p-3 ${isCollapsed ? 'w-12 h-12' : 'w-full h-16'}`}>
                    {/* Contrast Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

                    {/* Logo Vector */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {isCollapsed ? (
                            <img src="/activa-logo-new.png" alt="Activa" className="w-full h-full object-contain drop-shadow-[0_0_5px_rgba(37,99,235,0.8)]" />
                        ) : (
                            <ActivaBrandLogo className="w-full h-full object-contain" />
                        )}
                    </div>
                </div>
            </div>

            {/* NAVIGATION SCROLL AREA */}
            <div className="flex-1 overflow-y-auto premium-scrollbar py-6 space-y-6 px-4 relative z-10" role="menu">

                {/* 1. DASHBOARD CONTROL */}
                <div role="none">
                    {!isCollapsed && <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.25em] mb-3 px-2 animate-in fade-in" id="nav-dashboard-heading">Comando Central</h3>}
                    <button
                        onClick={() => onNavigate(null)}
                        className={`w-full group relative overflow-hidden rounded-xl transition-all duration-300 border ${activeSection === null ? 'bg-[#1e293b] border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/5 hover:border-white/10'} ${isCollapsed ? 'p-3 flex justify-center' : 'p-3'}`}
                        aria-labelledby={!isCollapsed ? "nav-dashboard-title" : undefined}
                        aria-label={isCollapsed ? "Panel de Control" : undefined}
                        role="menuitem"
                        aria-current={activeSection === null ? 'page' : undefined}
                    >
                        {activeSection === null && <div className="absolute inset-0 bg-blue-500/10 animate-[pulse_3s_infinite]" />}
                        <div className={`relative z-10 flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
                            <LayoutDashboard className={`w-5 h-5 ${activeSection === null ? 'text-blue-400' : 'text-slate-400 group-hover:text-white'}`} />
                            {!isCollapsed && (
                                <div className="text-left">
                                    <span id="nav-dashboard-title" className={`block text-xs font-bold tracking-wider uppercase ${activeSection === null ? 'text-blue-100' : 'text-slate-300 group-hover:text-white'}`}>Panel de Control</span>
                                </div>
                            )}
                        </div>
                    </button>
                </div>

                {/* 2. DEPARTMENTS */}
                <div role="none">
                    {!isCollapsed && (
                        <h3 className="text-[9px] font-black text-slate-600 uppercase tracking-[0.25em] mb-3 px-2 flex items-center justify-between animate-in fade-in" id="nav-departments-heading">
                            Departamentos <span className="bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded text-[8px]">{sectionList.length}</span>
                        </h3>
                    )}
                    <div className="space-y-1" role="group" aria-labelledby="nav-departments-heading">
                        {sectionList.map((section: SectionConfig) => {
                            const Icon = section.icon;
                            const isActive = activeSection === section.id;

                            return (
                                <button
                                    key={section.id}
                                    onClick={() => onNavigate(section.id)}
                                    className={`relative group flex items-center gap-3 rounded-lg transition-all duration-200 overflow-hidden ${isActive ? 'bg-gradient-to-r from-slate-800 to-transparent border-indigo-500' : 'border-transparent hover:bg-white/[0.02]'} ${isCollapsed ? 'justify-center p-2' : 'px-3 py-2.5 border-l-[3px]'}`}
                                    title={isCollapsed ? section.title : ''}
                                    role="menuitem"
                                    aria-label={section.title}
                                    aria-current={isActive ? 'page' : undefined}
                                    data-agent-id={`nav-${section.id}`}
                                >
                                    {/* ICON */}
                                    <div className={`p-1.5 rounded-md transition-colors relative z-10 shrink-0 ${isActive ? 'bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/30' : 'bg-slate-900 text-slate-500 group-hover:text-slate-300 group-hover:bg-slate-800 border border-slate-800'}`}>
                                        <Icon className="w-3.5 h-3.5" />
                                    </div>

                                    {/* TEXT */}
                                    {!isCollapsed && (
                                        <span className={`text-[10px] font-bold uppercase tracking-wider truncate flex-1 text-left relative z-10 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                                            {section.title}
                                        </span>
                                    )}

                                    {/* INDICATOR */}
                                    {isActive && !isCollapsed && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_5px_#6366f1]" />}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* SETTINGS FOOTER */}
            <div className="mt-auto border-t border-white/5 bg-[#000206] relative z-20">
                <SettingsFooter isCollapsed={isCollapsed} />
            </div>
        </motion.nav>
    );
}

function SettingsFooter({ isCollapsed }: { isCollapsed: boolean }) {
    const { logout } = useAuth();
    const [showMenu, setShowMenu] = useState(false);

    const handleLogout = async () => {
        await logout();
        window.location.reload();
    };

    return (
        <div className="p-3">
            <div className="relative">
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className={`w-full flex items-center gap-3 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10 hover:bg-white/5 ${isCollapsed ? 'justify-center p-2' : 'px-3 py-2.5'}`}
                    title="Configuración"
                >
                    <div className="p-1.5 rounded-lg bg-slate-800 text-slate-400 group-hover:text-white transition-colors">
                        <Settings className="w-4 h-4 animate-slow-spin-hover" />
                    </div>
                    {!isCollapsed && (
                        <div className="flex-1 text-left">
                            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">Sistema</span>
                        </div>
                    )}
                </button>

                {/* POPUP MENU */}
                {showMenu && (
                    <>
                        <div className="fixed inset-0 z-[150]" onClick={() => setShowMenu(false)} />
                        <div className={`absolute bottom-full mb-2 ${isCollapsed ? 'left-full ml-2' : 'left-0 w-full'} bg-[#0B1121] border border-white/10 rounded-xl shadow-2xl overflow-hidden min-w-[180px] z-[160] animate-in slide-in-from-bottom-2 fade-in duration-200`}>
                            <div className="p-1.5 flex flex-col gap-1">
                                <button className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors text-xs font-medium w-full text-left">
                                    <User className="w-3.5 h-3.5" /> Perfil
                                </button>
                                <button className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors text-xs font-medium w-full text-left">
                                    <Bell className="w-3.5 h-3.5" /> Notificaciones
                                </button>
                                <div className="h-px bg-white/5 my-1" />
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-3 px-3 py-2 hover:bg-red-500/10 rounded-lg text-red-500 hover:text-red-400 transition-colors text-xs font-bold w-full text-left"
                                >
                                    <LogOut className="w-3.5 h-3.5" /> Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
