import React, { useState, useCallback, memo } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
  Shield,
  Activity,
  Terminal,
  Network,
  Cpu,
  LayoutGrid,
} from 'lucide-react';

import { ActivaBrandLogo } from '../components/ui/ActivaBrandLogo';

// import logoCircular from '../assets/logo-alpha.png'; // Removed unused import

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  userEmail?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onLogout?: () => void;
}

interface SidebarItemProps {
  id: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onClick: (id: string) => void;
  onPrefetch?: (id: string) => void;
  customColor?: string;
  delay?: number;
}

const SidebarItem = memo(
  ({
    id,
    icon: Icon,
    label,
    isActive,
    isCollapsed,
    isMobileOpen,
    onClick,
    onPrefetch,
    customColor,
    delay = 0,
  }: SidebarItemProps) => {
    const handleClick = useCallback(() => onClick(id), [id, onClick]);
    const handleMouseEnter = useCallback(() => {
      if (onPrefetch) onPrefetch(id);
    }, [id, onPrefetch]);

    const showLabel = !isCollapsed || isMobileOpen;

    return (
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className={`
        relative flex items-center w-full p-3 my-1
        transition-all duration-300 ease-out
        group border-l-2
        ${isActive
            ? 'border-cyan-400 bg-cyan-950/30'
            : 'border-transparent hover:bg-slate-800/50 hover:border-slate-700'
          }
        ${isCollapsed && !isMobileOpen ? 'justify-center px-0' : ''}
      `}
        title={isCollapsed ? label : undefined}
        style={{ animationDelay: `${delay * 50}ms` }}
      >
        <Icon
          size={20}
          strokeWidth={1.5}
          className={`
          transition-all duration-300
          ${isActive
              ? 'text-cyan-400 scale-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]'
              : customColor || 'text-slate-400 group-hover:text-slate-200'
            }
        `}
        />

        <span
          className={`
          ml-4 whitespace-nowrap text-sm font-medium tracking-wide
          transition-all duration-300 origin-left
          ${showLabel ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 absolute pointer-events-none'}
          ${isActive ? 'text-cyan-100' : 'text-slate-400 group-hover:text-slate-200'}
        `}
        >
          {label}
        </span>

        {isActive && (
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
        )}
      </button>
    );
  },
);

SidebarItem.displayName = 'SidebarItem';

export const Sidebar: React.FC<SidebarProps> = memo(
  ({ currentView, onNavigate, userEmail, isOpen, onClose, onLogout }) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleNavigate = useCallback(
      (id: string) => {
        onNavigate(id);
        if (onClose) onClose();
      },
      [onNavigate, onClose],
    );

    const toggleCollapse = useCallback(() => setCollapsed((prev) => !prev), []);

    return (
      <>
        {/* MOBILE OVERLAY */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}

        {/* SIDEBAR CONTAINER */}
        <aside
          className={`
          fixed lg:static inset-y-0 left-0 z-50
          flex flex-col
          bg-slate-950 border-r border-slate-800/50
          transition-all duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)
          shadow-2xl shadow-black/50
          ${isOpen ? 'translate-x-0 w-[280px]' : 'w-0 lg:w-[280px]'}
          ${collapsed && !isOpen ? 'lg:w-[80px]' : ''}
        `}
        >
          {/* HEADER / LOGO */}
          <div className="h-20 flex items-center px-6 relative shrink-0">
            <div className="flex items-center gap-4 w-full overflow-hidden group cursor-default">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-cyan-500/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)] p-1.5">
                  <ActivaBrandLogo className="w-full h-full" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full border-2 border-slate-950 animate-pulse" />
              </div>
              {!collapsed && (
                <div className="flex flex-col justify-center animate-in fade-in slide-in-from-left-2 duration-500">
                  <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-0.5 flex items-center gap-1 font-mono">
                    ACTIVA SL
                  </span>
                  <span className="text-sm font-black text-slate-100 tracking-tight">
                    Digital OS
                  </span>
                </div>
              )}
            </div>

            {/* COLLAPSE TOGGLE (DESKTOP) */}
            <button
              onClick={toggleCollapse}
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all hidden lg:flex shadow-lg z-50 hover:scale-110"
            >
              {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>

            {/* CLOSE (MOBILE) */}
            <button
              onClick={onClose}
              className="lg:hidden absolute right-4 text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* NAVIGATION */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden py-6 px-3 scrollbar-hide">
            <div className="space-y-1">
              <SidebarItem
                id="dashboard"
                icon={Terminal}
                label="Command Center"
                isActive={currentView === 'dashboard'}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('dashboard')}
                delay={1}
              />
              <SidebarItem
                id="patients"
                icon={Network}
                label="Agent Network"
                isActive={currentView === 'patients' || currentView.startsWith('patients-')}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('patients')}
                delay={2}
              />
              <SidebarItem
                id="calendar"
                icon={Cpu}
                label="Operation Schedule"
                isActive={currentView === 'calendar' || currentView === 'sessions'}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('calendar')}
                delay={3}
              />
              <SidebarItem
                id="billing"
                icon={Activity}
                label="Revenue Stream"
                isActive={currentView === 'billing'}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('billing')}
                delay={4}
              />
              <SidebarItem
                id="resources"
                icon={Shield}
                label="Security Protocols"
                isActive={currentView === 'resources'}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('resources')}
                delay={5}
              />
              <SidebarItem
                id="canvas"
                icon={LayoutGrid}
                label="Canvas Estratégico"
                isActive={currentView === 'canvas'}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('canvas')}
                customColor="text-purple-400"
                delay={6}
              />
            </div>
          </div>

          {/* FOOTER / USER */}
          <div className="p-4 bg-slate-950/50 border-t border-slate-800/50 relative">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-900 to-slate-800 flex items-center justify-center text-cyan-200 font-bold shadow-inner shrink-0 ring-1 ring-slate-700">
                {userEmail?.charAt(0).toUpperCase() || 'A'}
              </div>
              {!collapsed && (
                <div className="flex flex-col min-w-0 animate-in fade-in slide-in-from-bottom-2">
                  <p className="text-sm font-bold text-slate-200 truncate font-mono">
                    {userEmail?.split('@')[0]}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Shield size={10} className="text-cyan-500" />
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                      ENCRYPTED
                    </span>
                  </div>
                </div>
              )}
              {!collapsed && onLogout && (
                <button
                  onClick={onLogout}
                  className="ml-auto w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-950/30 transition-all"
                  title="Disconnect System"
                >
                  <Shield size={16} />
                </button>
              )}
            </div>
          </div>
        </aside>
      </>
    );
  },
);

Sidebar.displayName = 'Sidebar';
