import { RevealSection } from '../ui/RevealSection';
import auroraImg from '../../assets/images/aurora-profile.jpg';

export const About = () => {
    return (
        <section
            id="nosotros"
            className="py-32 px-6 lg:px-12 bg-brand-dark border-t border-white/5 overflow-hidden relative"
        >
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-[200px] opacity-40 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end pr-0 lg:pr-12">

                        <div className="relative w-80 h-96 md:w-[400px] md:h-[500px] mx-auto lg:mx-0">
                            {/* Main Frame */}
                            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-primary/10 border border-white/10 bg-black ring-1 ring-white/5 z-20">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105 grayscale contrast-110"
                                    style={{ backgroundImage: `url(${auroraImg})` }}
                                    role="img"
                                    aria-label="Aurora Del Río, CEO Activa SL"
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                {/* Static Premium Label */}
                                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                    <p className="font-display font-bold text-2xl tracking-tight">
                                        Aurora Del Río
                                    </p>
                                    <p className="font-body text-sm text-brand-primary font-bold tracking-wide border-l-2 border-brand-primary pl-3 mt-2">
                                        Fundadora & Directora
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Back Layers (Static) */}
                            <div className="absolute top-4 -right-4 w-full h-full rounded-[2rem] border-2 border-brand-primary/10 bg-transparent z-10"></div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <RevealSection>
                            <span className="text-brand-primary text-xs font-display font-bold tracking-[0.2em] uppercase mb-6 block bg-brand-primary/10 w-fit px-5 py-2 rounded-full border border-brand-primary/20">
                                ACTIVA SL DIGITAL
                            </span>
                            <h2 className="text-white text-5xl md:text-6xl font-display font-black leading-[1.05] tracking-tighter mb-8">
                                Desarrollo de Software <br /> de Alto Impacto.
                            </h2>
                            <div className="space-y-6">
                                <p className="text-slate-400 text-xl font-body leading-relaxed font-light">
                                    <strong className="text-white font-semibold">Activa SL Digital</strong> nació para cerrar la brecha entre la tecnología de élite y la empresa real. No somos una agencia de marketing; somos una consultora de ingeniería.
                                </p>
                                <p className="text-slate-400 text-xl font-body leading-relaxed font-light">
                                    Nuestro equipo diseña ecosistemas digitales robustos: desde CRMs bancarios hasta Apps de campo o Webs que cargan en milisegundos. Sin humo. Solo código que factura.
                                </p>
                            </div>
                        </RevealSection>
                    </div>
                </div>
            </div>
        </section>
    );
};
