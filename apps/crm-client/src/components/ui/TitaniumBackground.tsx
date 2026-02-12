

export const TitaniumBackground = () => {
    return (
        <div className="fixed inset-0 z-0 bg-[#050505] pointer-events-none select-none">
            {/* 1. Base Gradient - Deep Onyx */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#000000]" />

            {/* 2. Micro-Grid (Engineering Precision) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                }}
            />
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(#334155 0.5px, transparent 0.5px), linear-gradient(90deg, #334155 0.5px, transparent 0.5px)`,
                    backgroundSize: '20px 20px',
                }}
            />

            {/* 3. Ambient Glows (Subtle Corporate Intelligence) */}
            {/* Top Left - Strategy Blue */}
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen opacity-40 animate-pulse-slow" />

            {/* Bottom Right - Security Emerald */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-emerald-900/5 blur-[150px] rounded-full mix-blend-screen opacity-30" />

            {/* 4. Vignette & Grain (Cinematic Finish) */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/20 to-[#050505] opacity-90" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] brightness-100 contrast-150 mix-blend-overlay" />
        </div>
    );
};
