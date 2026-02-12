import { Quote } from 'lucide-react';
import { RevealSection } from '../ui/RevealSection';

export const Testimonials = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-brand-dark border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
                <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
                {/* HEADLINE */}
                <RevealSection>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-6 tracking-tighter">
                            Empresas que <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                                YA ESCALAN
                            </span>
                        </h2>
                        <p className="text-slate-400 text-xl font-body font-light leading-relaxed max-w-2xl mx-auto">
                            No prometemos, ejecutamos. Aquí tienes las opiniones de quienes ya han digitalizado su negocio con nosotros.
                        </p>
                    </div>
                </RevealSection>

                {/* TESTIMONIALS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            quote:
                                'Necesitábamos una app interna para nuestros técnicos de campo y en 3 semanas estaba funcionando. Cero interrupciones, cero excusas.',
                            name: 'Javier M.',
                            role: 'CEO, Instalaciones Norte',
                            highlight: 'Velocidad de Entrega',
                        },
                        {
                            quote:
                                'Teníamos 4 softwares distintos y un caos de excels. Activa nos centralizó todo en un CRM propio. Ahora controlo la empresa desde el móvil.',
                            name: 'Laura S.',
                            role: 'Fundadora, Clínica Dental S&S',
                            highlight: 'Control Total',
                        },
                        {
                            quote:
                                'Nuestra web cargaba en 4 segundos y perdíamos clientes. Tras el rediseño High-Performance, las conversiones subieron un 200%.',
                            name: 'Roberto D.',
                            role: 'Director Marketing, Ecomueble',
                            highlight: 'ROI Inmediato',
                        },
                    ].map((item, i) => (
                        <RevealSection key={i} delay={i * 150}>
                            <div className="group relative h-full bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden backdrop-blur-sm">
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-8">
                                        <Quote className="w-10 h-10 text-white/20 group-hover:text-brand-primary transition-colors" />
                                        <div className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-wide">
                                            {item.highlight}
                                        </div>
                                    </div>

                                    <p className="text-slate-300 text-lg font-body font-light leading-relaxed italic mb-8 flex-grow">
                                        "{item.quote}"
                                    </p>

                                    <div className="border-t border-white/10 pt-6 mt-auto">
                                        <p className="text-white font-display font-bold text-lg">{item.name}</p>
                                        <p className="text-brand-primary/80 text-sm font-medium">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </RevealSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
