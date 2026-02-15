import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  UserPlus,
  Users,
  Activity,
  MonitorPlay,
  GraduationCap,
} from 'lucide-react';

const logoImg = '/logo-v2.png';

const CRM_URL = 'https://activa-sl-digital.web.app';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'SOLUCIONES', href: '/programas', icon: Activity },
    { label: 'EMPRESAS', href: '/programas?tab=profesionales', icon: GraduationCap },
    { label: 'BLOG', href: '/blog', icon: MonitorPlay },
    { label: 'FAQ', href: '/#faq', icon: Users },
    { label: 'NOSOTROS', href: '/#nosotros', icon: Users },
  ];

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/5 py-4'
          : 'bg-slate-900/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/5 py-6'
          }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-4">
            {/* LEFT: Logo Premium (Activa) */}
            <div className="lg:col-span-2 flex items-center justify-start">
              <Link to="/" className="flex items-center gap-4 group cursor-pointer">
                {/* PREMIUM GLOSS BEZEL - NANO FIT 35PX */}
                <div className="relative w-[35px] h-[35px] rounded-full p-[0px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)] ring-1 ring-brand-primary/30 overflow-hidden">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative">

                    {/* Subtle Top Shine */}
                    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-20 pointer-events-none transform -rotate-45 z-20"></div>

                    {/* Image - NANOSCALE CONTAIN */}
                    <img
                      src={logoImg}
                      alt="ACTIVA SL DIGITAL"
                      className="w-full h-full object-contain relative z-10 brightness-110 contrast-110"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* CENTER: Premium Tabs Menu */}
            <div className="hidden lg:flex lg:col-span-8 items-center justify-center h-full">
              <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-slate-900/50 border border-slate-700/50 shadow-sm backdrop-blur-md">
                {menuItems.map((item) => (
                  item.href.startsWith('#') || item.href.includes('#') ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-5 py-2 text-sm font-display font-bold text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 relative group tracking-wider"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="px-5 py-2 text-sm font-display font-bold text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 relative group tracking-wider"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* RIGHT: Actions */}
            <div className="flex lg:col-span-2 items-center justify-end gap-4">
              {/* INICIAR SESION CTA */}
              <a
                href={CRM_URL}
                className="hidden lg:flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-900 border border-brand-primary/50 text-white shadow-[0_0_20px_-5px_rgba(96,165,250,0.5)] hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.8)] hover:border-brand-primary hover:bg-slate-800 transition-all transform hover:scale-105 active:scale-95 group relative overflow-hidden"
              >
                <UserPlus className="w-4 h-4 text-white relative z-10" />
                <span className="text-xs font-display font-bold uppercase tracking-widest relative z-10">
                  INICIAR SESIÓN
                </span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 text-white bg-white/10 border border-slate-700 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Corporate Dark */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 z-50 overflow-y-auto">
            <div className="px-6 pt-10 pb-12 space-y-8">
              {/* Mobile Links */}
              <div className="space-y-6">
                {menuItems.map((item) => (
                  item.href.startsWith('#') || item.href.includes('#') ? (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-2xl font-display font-medium text-slate-300 hover:text-brand-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-2xl font-display font-medium text-slate-300 hover:text-brand-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-8 border-t border-slate-800 space-y-4">
                <a
                  href={CRM_URL}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-slate-900 border border-brand-primary/50 text-white font-bold uppercase tracking-wider shadow-[0_0_20px_-5px_rgba(96,165,250,0.5)] hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.8)] hover:border-brand-primary transition-all"
                >
                  <UserPlus className="w-5 h-5" />
                  INICIAR SESIÓN
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
