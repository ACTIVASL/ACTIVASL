import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';
import { Footer } from '../components/landing/Footer'; // Ensure Footer is imported if used, otherwise remove. Wait, design showed Footer.

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden font-mono">
      <div className="flex-grow flex items-center justify-center relative">
        {/* GLITCH LAYERS */}
        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-10 bg-cover mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>

        <div className="relative z-10 text-center space-y-8 p-6">
          <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-full mb-4 animate-pulse">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>

          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800 tracking-tighter glitch-text" data-text="404">
            404
          </h1>

          <div className="space-y-2">
            <h2 className="text-2xl text-red-500 font-bold uppercase tracking-widest">
              SYSTEM FAILURE
            </h2>
            <p className="text-slate-400 max-w-md mx-auto">
              La ruta solicitada no existe en el mapa de memoria del sistema.
              <br />
              <span className="text-xs opacity-50 font-mono">ERR_CODE: REALITY_NOT_FOUND</span>
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-primary hover:scale-105 transition-all rounded-sm"
          >
            <Home className="w-4 h-4" />
            REBOOT SYSTEM
          </Link>
        </div>
      </div>

      <Footer />

      <style>{`
        .glitch-text {
          position: relative;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -1px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -1px 0 #00fff9;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(31px, 9999px, 94px, 0); transform: skew(0.85deg); }
          5% { clip: rect(70px, 9999px, 71px, 0); transform: skew(0.85deg); }
          10% { clip: rect(29px, 9999px, 83px, 0); transform: skew(0.35deg); }
          15% { clip: rect(18px, 9999px, 91px, 0); transform: skew(0.06deg); }
          20% { clip: rect(96px, 9999px, 97px, 0); transform: skew(0.55deg); }
          100% { clip: rect(61px, 9999px, 53px, 0); transform: skew(0.8deg); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(65px, 9999px, 100px, 0); transform: skew(0.35deg); }
          5% { clip: rect(56px, 9999px, 34px, 0); transform: skew(0.05deg); }
          100% { clip: rect(9s, 9999px, 89px, 0); transform: skew(0.66deg); }
        }
      `}</style>
    </div>
  );
};
