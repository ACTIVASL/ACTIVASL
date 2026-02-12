import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import {
    Code2,
    Database,
    Cloud,
    Smartphone,
    Shield,
    Globe,
    Zap,
} from "lucide-react";
import { RevealSection } from "../ui/RevealSection";
import heroTexture from "../../assets/images/hero-nano-v2.png";

export function TechStack() {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden" id="technology">
            {/* NANO BANANA REACTOR BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Radial Void - Yellow Tint */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-slate-950/80 to-slate-950"></div>

                {/* Rotating Reactor Core Texture */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] opacity-20 animate-atomic-spin-slow mix-blend-screen">
                    <img
                        src={heroTexture}
                        alt=""
                        className="w-full h-full object-cover rounded-full mask-radial-faded"
                    />
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-24">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6 backdrop-blur-md">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-display font-bold text-yellow-400 tracking-[0.2em] uppercase">
                        ARSENAL TECNOLÓGICO
                    </span>
                </div>

                <h3 className="text-4xl md:text-6xl font-display font-black text-white mb-8 tracking-tight">
                    INGENIERÍA <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600">NUCLEAR</span>
                </h3>

                <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                    No usamos WordPress. Construimos sobre el stack tecnológico que utilizan las empresas del <span className="text-white font-medium">Fortune 500</span>.
                </p>
            </div>

            <RevealSection>
                <BentoGrid className="max-w-6xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2 border-yellow-500/20 bg-slate-900/40" : "border-white/5 bg-slate-900/40"}
                        />
                    ))}
                </BentoGrid>
            </RevealSection>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-20"></div>
        </section>
    );
}

// NANO SKELETON (Yellow/Gold Theme)
const Skeleton = ({ color }: { color: string }) => (
    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-950/80 border border-white/5 relative overflow-hidden group w-full`}>
        {/* Active Circuit Line */}
        <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-${color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

        {/* Ambient Glow */}
        <div className={`absolute inset-0 bg-${color}-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700`} />

        {/* Data Stream Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_340deg,white_360deg)] animate-atomic-spin rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>
    </div>
);

const items = [
    {
        title: "React & Next.js Core",
        description: "Arquitectura de componentes atómicos. Rendering híbrido.",
        header: <Skeleton color="yellow" />,
        icon: <Code2 className="h-6 w-6 text-yellow-400" />,
    },
    {
        title: "Google Cloud Platform",
        description: "Infraestructura serverless auto-escalable nivel Enterprise.",
        header: <Skeleton color="amber" />,
        icon: <Cloud className="h-6 w-6 text-amber-500" />,
    },
    {
        title: "Firebase Titanium",
        description: "Sincronización milimétrica Real-Time NoSQL.",
        header: <Skeleton color="yellow" />,
        icon: <Database className="h-6 w-6 text-yellow-500" />,
    },
    {
        title: "Progressive Web Apps",
        description: "Instale su web como App Nativa. Offline y Notificaciones Push sin Stores.",
        header: <Skeleton color="amber" />,
        icon: <Smartphone className="h-6 w-6 text-amber-400" />,
    },
    {
        title: "Vite Build Engine",
        description: "Compilación nuclear instantánea con HMR.",
        header: <Skeleton color="yellow" />,
        icon: <Zap className="h-6 w-6 text-yellow-300" />,
    },
    {
        title: "Security Shield",
        description: "CSP Headers estrictos y encriptación militar.",
        header: <Skeleton color="amber" />,
        icon: <Shield className="h-6 w-6 text-amber-600" />,
    },
    {
        title: "Global Edge CDN",
        description: "200+ puntos de presencia. Velocidad luz en cualquier continente del planeta.",
        header: <Skeleton color="yellow" />,
        icon: <Globe className="h-6 w-6 text-yellow-500" />,
    },
];
