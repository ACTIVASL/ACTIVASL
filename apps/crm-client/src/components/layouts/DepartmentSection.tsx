import React, { ReactNode } from 'react';


interface DepartmentSectionProps {
    id: string;
    title: string;
    subtitle?: string;
    icon?: React.ElementType;
    children: ReactNode;
    status?: 'OPTIMAL' | 'WARNING' | 'CRITICAL';
    color?: 'blue' | 'emerald' | 'amber' | 'red' | 'indigo';
}

export const DepartmentSection: React.FC<DepartmentSectionProps> = ({
    id,
    title,
    subtitle,
    icon: Icon,
    children,
    status = 'OPTIMAL',
    color = 'blue'
}) => {

    const colorMap = {
        blue: 'text-blue-400 border-blue-500/30 bg-blue-500/5',
        emerald: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5',
        amber: 'text-amber-400 border-amber-500/30 bg-amber-500/5',
        red: 'text-red-400 border-red-500/30 bg-red-500/5',
        indigo: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5',
    };

    const statusColor = {
        OPTIMAL: 'text-emerald-500',
        WARNING: 'text-amber-500',
        CRITICAL: 'text-red-500',
    };

    return (
        <section id={id} className="mb-12 scroll-mt-24">
            {/* SECTION HEADER */}
            <div className="flex items-end justify-between mb-6 pb-2 border-b border-white/5 relative group">
                <div className="flex items-center gap-4">
                    {Icon && (
                        <div className={`p-2 rounded-lg border backdrop-blur-sm ${colorMap[color]}`}>
                            <Icon size={24} strokeWidth={1.5} />
                        </div>
                    )}
                    <div>
                        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                            {title}
                            <span className={`text-[10px] px-2 py-0.5 rounded border border-white/10 bg-white/5 text-slate-400 font-mono hidden md:inline-flex items-center gap-1`}>
                                ID: {id.toUpperCase()}
                            </span>
                        </h2>
                        {subtitle && <p className="text-slate-500 text-sm mt-1 font-medium">{subtitle}</p>}
                    </div>
                </div>

                {/* METRICS SUMMARY (Sparkline Placeholder) */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="text-right">
                        <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">STATUS</span>
                        <div className="flex items-center justify-end gap-1.5 mt-0.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${status === 'OPTIMAL' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                            <span className={`text-xs font-mono font-bold ${statusColor[status]}`}>{status}</span>
                        </div>
                    </div>
                    <div className="h-8 w-[1px] bg-white/10" />
                    <div className="text-right">
                        <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">UPTIME</span>
                        <span className="text-xs font-mono font-bold text-slate-300">99.98%</span>
                    </div>
                </div>

                {/* ACTIVE LINE */}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${color === 'emerald' ? 'from-emerald-500' : 'from-blue-500'} to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out`} />
            </div>

            {/* CONTENT */}
            <div className="relative">
                {children}
            </div>
        </section>
    );
};
