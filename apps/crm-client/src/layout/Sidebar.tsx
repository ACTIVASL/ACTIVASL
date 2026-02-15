import React, { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  LogOut,
} from 'lucide-react';

import { ActivaBrandLogo } from '../components/ui/ActivaBrandLogo';

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
  index?: number;
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
    index = 0,
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
        data-agent-id={`nav-${id}`}
        className={`
        relative flex items-center w-full p-3 my-1
        group border-l-2 overflow-hidden
        ${isActive
            ? 'border-cyan-400 bg-cyan-950/30'
            : 'border-transparent hover:bg-slate-800/50 hover:border-slate-700'
          }
        ${isCollapsed && !isMobileOpen ? 'justify-center px-0' : ''}
      `}
        title={isCollapsed ? label : undefined}
      >
        {/* ACTIVE INDICATOR (MOTION LAYOUT) */}
        {isActive && (
          <motion.div
            layoutId="activeSidebarGlow"
            className="absolute inset-0 bg-cyan-500/10"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        <div className="relative z-10 flex items-center">
          <Icon
            size={20}
            strokeWidth={1.5}
            className={`
              transition-colors duration-300
              ${isActive
                ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]'
                : customColor || 'text-slate-400 group-hover:text-slate-200'
              }
            `}
          />

          <AnimatePresence mode='wait'>
            {showLabel && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, delay: index * 0.05 }} // Staggered effect
                className={`
                        ml-4 whitespace-nowrap text-sm font-medium tracking-wide
                        ${isActive ? 'text-cyan-100' : 'text-slate-400 group-hover:text-slate-200'}
                        `}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {isActive && (
          <motion.div
            layoutId="activeSidebarBorder"
            className="absolute right-0 top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>
    );
  },
);

SidebarItem.displayName = 'SidebarItem';

export const Sidebar: React.FC<SidebarProps> = memo(
  ({ currentView, onNavigate, userEmail, isOpen, onClose, onLogout }) => {
    const [collapsed, setCollapsed] = useState(false);

    // Persist collapsed state if needed, or just keep local
    // const [collapsed, setCollapsed] = useLocalStorage('sidebar-collapsed', false);

    const handleNavigate = useCallback(
      (id: string) => {
        onNavigate(id);
        if (onClose) onClose();
      },
      [onNavigate, onClose],
    );

    const toggleCollapse = useCallback(() => setCollapsed((prev) => !prev), []);

    // Width calculation logic handled by motion.aside variants directly

    return (
      <>
        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={onClose}
            />
          )}
        </AnimatePresence>

        {/* SIDEBAR CONTAINER */}
        <motion.aside
          initial={false}
          animate={{
            width: isOpen ? 280 : (collapsed ? 80 : 280),
            x: isOpen ? 0 : 0 // Handle mobile slide-in if needed, but keeping simple width anim for now
          }}
          transition={{ type: "spring", stiffness: 300, damping: 33, mass: 0.8 }}
          className={`
          fixed lg:static inset-y-0 left-0 z-50
          flex flex-col
          bg-[#020617]/95 backdrop-blur-xl border-r border-slate-800/50
          shadow-2xl shadow-black/50 overflow-hidden
          ${!isOpen && 'hidden lg:flex'} 
          ${isOpen && 'flex'}
        `}
          // Note: Tailwind hidden/flex overrides might conflict with motion width. 
          // For 'isOpen' mobile drawer, we usually slide x. 
          // Adapting specifically for this codebase's logic.
          style={{ width: isOpen ? 280 : undefined }} // Force width on mobile open to override motion if needed, but motion handles it.
        >
          {/* HEADER / LOGO */}
          <div className="h-20 flex items-center px-6 relative shrink-0">
            <div className="flex items-center gap-4 w-full overflow-hidden group cursor-pointer" onClick={() => !isOpen && setCollapsed(false)}>
              <div className="relative shrink-0 transition-all duration-300">
                <div className={`
                  h-10 rounded-xl bg-slate-900/50 flex items-center justify-center border border-slate-800 group-hover:border-cyan-500/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] p-1.5
                  ${!collapsed || isOpen ? 'w-auto px-3 min-w-[40px]' : 'w-10'}
                `}>
                  <ActivaBrandLogo className="w-full h-full" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full border-2 border-slate-950 animate-pulse" />
              </div>

              <AnimatePresence>
                {(!collapsed || isOpen) && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col justify-center"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-0.5 flex items-center gap-1 font-mono">
                      ACTIVA SL
                    </span>
                    <span className="text-sm font-black text-slate-100 tracking-tight">
                      Digital OS
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* COLLAPSE TOGGLE (DESKTOP) */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleCollapse}
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 border border-slate-700/80 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors hidden lg:flex shadow-lg z-50 cursor-pointer"
            >
              {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </motion.button>

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
                index={0}
              />
              <SidebarItem
                id="patients"
                icon={Network}
                label="Agent Network"
                isActive={currentView === 'patients' || currentView.startsWith('patients-')}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('patients')}
                index={1}
              />
              <SidebarItem
                id="calendar"
                icon={Cpu}
                label="Operation Schedule"
                isActive={currentView === 'calendar' || currentView === 'sessions'}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('calendar')}
                index={2}
              />
              <SidebarItem
                id="billing"
                icon={Activity}
                label="Revenue Stream"
                isActive={currentView === 'billing'}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('billing')}
                index={3}
              />
              <SidebarItem
                id="resources"
                icon={Shield}
                label="Security Protocols"
                isActive={currentView === 'resources'}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('resources')}
                index={4}
              />
              <SidebarItem
                id="canvas"
                icon={LayoutGrid}
                label="Vista Táctica (Canvas)"
                isActive={currentView === 'canvas'}
                isCollapsed={collapsed}
                isMobileOpen={isOpen || false}
                onClick={() => handleNavigate('canvas')}
                customColor="text-blue-400"
                index={5}
              />
            </div>
          </div>

          {/* FOOTER / USER */}
          <div className="p-4 bg-slate-950/30 border-t border-slate-800/50 relative">
            <div className="flex items-center gap-3 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-900 to-slate-800 flex items-center justify-center text-cyan-200 font-bold shadow-inner shrink-0 ring-1 ring-slate-700 select-none"
              >
                {userEmail?.charAt(0).toUpperCase() || 'A'}
              </motion.div>

              <AnimatePresence>
                {(!collapsed || isOpen) && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="flex flex-col min-w-0"
                  >
                    <p className="text-sm font-bold text-slate-200 truncate font-mono">
                      {userEmail?.split('@')[0]}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Shield size={10} className="text-cyan-500" />
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                        ENCRYPTED
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {(!collapsed || isOpen) && onLogout && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onLogout}
                    className="ml-auto w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-950/30 transition-all"
                    title="Disconnect System"
                  >
                    <LogOut size={16} /> {/* Changed to LogOut icon explicitly if imported */}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.aside>
      </>
    );
  },
);

Sidebar.displayName = 'Sidebar';
