import { Rocket, Shield } from 'lucide-react';
import { RevealSection } from '../ui/RevealSection';
import heroPremiumBg from '../../assets/images/hero-sme-trust.png';

export const Hero = () => {
  return (
    <div
      className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* PREMIUM LIVE BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Layer 1: The Image with 'Ken Burns' Motion */}
        <div className="absolute inset-0 animate-cinematic">
          <img
            src={heroPremiumBg}
            alt="Corporate Digital Infrastructure"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Layer 2: Corporate Gradient Overlay (Darkness) */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/50 to-brand-dark/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div> {/* Subtle Tint */}

        {/* Layer 3: Noise Texture for 'Film' Grain (Optional, keeping it clean for now) */}
      </div>

      <div className="relative z-20 max-w-[1600px] mx-auto px-6 flex flex-col items-center text-center mt-20">
        <RevealSection>

          {/* SUPER-BADGE: TECH */}
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-brand-primary/5 border border-brand-primary/20 backdrop-blur-md mb-10 group hover:bg-brand-primary/10 transition-all duration-500 cursor-default shadow-[0_0_20px_-5px_rgba(96,165,250,0.5)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
            </span>
            <span className="text-brand-primary text-xs font-display font-bold tracking-[0.3em] uppercase group-hover:text-white transition-colors">
              Soluciones digitales Empresariales
            </span>
          </div>

          {/* MASSIVE HEADLINE */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white leading-[0.9] mb-8 drop-shadow-2xl uppercase">
            ACTIVA TU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-secondary animate-pulse-slow">
              NEGOCIO.
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 font-body font-light max-w-3xl mx-auto mb-16 leading-relaxed text-balance uppercase tracking-wide">
            Digitaliza tu Empresa para una mejor <span className="text-slate-200 font-medium">Gestión</span> y <span className="text-slate-200 font-medium">Ventas</span>.
          </p>

          {/* MAGNETIC ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
            <a
              href="/programas"
              className="group relative h-16 sm:h-20 px-12 rounded-full bg-slate-900 border border-brand-primary/50 text-white text-lg font-display font-bold tracking-wide shadow-[0_0_30px_-5px_rgba(96,165,250,0.5)] hover:shadow-[0_0_50px_-5px_rgba(96,165,250,0.8)] hover:border-brand-primary hover:bg-slate-800 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-4 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              <span className="relative z-10">Ver Catálogo</span>
              <Rocket className="w-6 h-6 relative z-10 text-brand-primary group-hover:animate-bounce" />
            </a>

            <a
              href="mailto:ingenieria@activa-sl.digital"
              className="group relative h-16 sm:h-20 px-12 rounded-full bg-slate-900/50 border border-white/20 text-white text-lg font-display font-bold tracking-wide hover:bg-slate-900 hover:border-brand-primary/50 hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-4"
            >
              <span>Auditoría Técnica</span>
              <Shield className="w-6 h-6 text-slate-400 group-hover:text-brand-primary transition-colors" />
            </a>
          </div>
        </RevealSection>
      </div>
    </div>
  );
};
