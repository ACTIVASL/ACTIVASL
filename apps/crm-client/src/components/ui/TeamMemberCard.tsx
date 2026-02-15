import React from 'react';
import { Clock } from 'lucide-react';
import { TeamMember } from '../../lib/types';

interface TeamMemberCardProps {
    member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ONLINE': return 'bg-emerald-500';
            case 'DEEP_WORK': return 'bg-purple-500';
            case 'IDLE': return 'bg-amber-500';
            default: return 'bg-slate-500';
        }
    };

    return (
        <div className="relative group overflow-hidden rounded-xl bg-slate-900/40 border border-slate-800 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="p-4 flex items-center gap-4 relative z-10">
                {/* AVATAR */}
                <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-emerald-400 transition-colors">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-slate-900 ${getStatusColor(member.status)} animate-pulse`} />
                </div>

                {/* INFO */}
                <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold text-sm truncate">{member.name}</h4>
                    <p className="text-xs text-slate-400 truncate mb-1">{member.role}</p>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-[10px] text-amber-400 font-mono">
                            <Clock size={10} />
                            {member.experience} YRS EXP
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                            {member.status.replace('_', ' ')}
                        </span>
                    </div>

                    <p className="text-[10px] leading-relaxed text-slate-400 mt-3 border-t border-slate-700/50 pt-2 line-clamp-2 hover:line-clamp-none transition-all">
                        {member.bio}
                    </p>
                </div>
            </div>
        </div>
    );
};
