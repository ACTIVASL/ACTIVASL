import { Rocket, Shield } from 'lucide-react';
import { RevealSection } from '../ui/RevealSection';
import heroBg from '../../assets/images/hero-bg-fluid.png';

export const Hero = () => {
    return (
        <div
            className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black"
        >
            {/* SYMPHONY OF LIGHT: Living Image Engine */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* LAYER 1: The Image (Motion) */}
                <div className="absolute inset-0 opacity-20 mix-blend-screen">
                    <img
                        src={heroBg}
                        alt="Background Neural Network"
                        className="w-full h-full object-cover object-center animate-flow-deep transform-gpu will-change-transform scale-110 origin-center grayscale contrast-150"
                        fetchPriority="high"
                        loading="eager"
                        decoding="async"
                    />
                </div>

                {/* LAYER 2: DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

                {/* LAYER 3: Volumetric Light Beams (Cyan) */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent skew-x-12 translate-x-[-50%] animate-shift-light mix-blend-overlay"></div>
            </div>

            <div className="relative z-20 max-w-[1600px] mx-auto px-6 flex flex-col items-center text-center mt-20">
                <RevealSection>

                    {/* SUPER-BADGE: TECH */}
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-brand-primary/5 border border-brand-primary/20 backdrop-blur-md mb-10 group hover:bg-brand-primary/10 transition-all duration-500 cursor-default shadow-[0_0_20px_-5px_rgba(0,243,255,0.3)]">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
                        </span>
                        <span className="text-brand-primary text-xs font-display font-bold tracking-[0.3em] uppercase group-hover:text-white transition-colors">
                            ACTIVA SL DIGITAL
                        </span>
                    </div>

                    {/* MASSIVE HEADLINE */}
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white leading-[0.9] mb-8 drop-shadow-2xl uppercase">
                        Ingeniería Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-secondary animate-pulse-slow">
                            Para Escalar.
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 font-body font-light max-w-3xl mx-auto mb-16 leading-relaxed text-balance">
                        Consultora de Élite para PYMES. Web Ultra-Rápida + Software en Propiedad + Apps PWA.
                        <br /><span className="text-brand-primary font-bold">Sin deuda técnica. Sin excusas.</span>
                    </p>

                    {/* MAGNETIC ACTION BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
                        <a
                            href="/programas"
                            className="group relative h-16 sm:h-20 px-12 rounded-full bg-brand-primary text-black text-lg font-display font-bold tracking-wide shadow-[0_0_40px_-10px_rgba(0,243,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(0,243,255,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-4 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            <span className="relative z-10">Ver Catálogo</span>
                            <Rocket className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
                        </a>

                        <a
                            href="mailto:ingenieria@activa-sl.digital"
                            className="group relative h-16 sm:h-20 px-12 rounded-full bg-transparent text-white text-lg font-display font-bold tracking-wide border border-white/20 hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-4 hover:border-brand-primary/50"
                        >
                            <span>Auditoría Técnica</span>
                            <Shield className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </RevealSection>
            </div>
        </div>
    );
};
