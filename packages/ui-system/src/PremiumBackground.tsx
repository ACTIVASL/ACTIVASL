import { motion } from 'framer-motion';

// Generate static particles at module level to ensure purity and avoid hydration mismatches
const PARTICLES_DATA = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    background: i % 2 === 0 ? 'rgba(56, 189, 248, 0.15)' : 'rgba(59, 130, 246, 0.15)',
    width: `${Math.random() * 400 + 100}px`,
    height: `${Math.random() * 400 + 100}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    xMove: Math.random() * 100 - 50,
    yMove: Math.random() * 100 - 50,
    duration: Math.random() * 15 + 10,
}));

export const PremiumBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-[#0f172a]">
            {/* 1. Deep Corporate Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#334155_0%,_#020617_100%)] opacity-100" />

            {/* 2. Abstract Blue Flows */}
            <div className="absolute inset-0">
                {PARTICLES_DATA.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full mix-blend-screen filter blur-[80px]"
                        style={{
                            background: p.background,
                            width: p.width,
                            height: p.height,
                            left: p.left,
                            top: p.top,
                        }}
                        animate={{
                            x: [0, p.xMove, 0],
                            y: [0, p.yMove, 0],
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* 3. Subtle Grid Structure (Technical/Premium feel) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* 4. Fine Digital Grain/Noise for texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </div>
    );
};
