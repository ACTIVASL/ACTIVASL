import { useEffect, useRef } from 'react';

export const NuclearBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dark Void */}
            <div className="absolute inset-0 bg-slate-950"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>

            {/* Reactor Core Structure - BOOSTED VISIBILITY */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-60">
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500/40 animate-atomic-spin shadow-[0_0_50px_rgba(6,182,212,0.3)]"></div>
                <div className="absolute inset-[15%] rounded-full border border-brand-primary/40 animate-atomic-spin-reverse shadow-[0_0_30px_rgba(59,130,246,0.3)]"></div>
                <div className="absolute inset-[30%] rounded-full border border-purple-500/40 animate-atomic-spin shadow-[0_0_40px_rgba(168,85,247,0.3)]"></div>
            </div>

            {/* Radioactive Glow - INTENSIFIED */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/20 blur-[100px] rounded-full animate-pulse-slow mix-blend-screen"></div>

            {/* Particles (CSS generated) */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
                <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-float animation-delay-4000"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-float"></div>
            </div>
        </div>
    );
};
