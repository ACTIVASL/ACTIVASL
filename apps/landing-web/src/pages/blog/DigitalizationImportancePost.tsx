
import { Navigation } from '../../components/layout/Navigation';
import { Footer } from '../../components/landing/Footer';
import { RevealSection } from '../../components/ui/RevealSection';
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero-desktop.jpg';
import { ReadingProgress } from '../../components/blog/ReadingProgress';
import { SeoHead } from '../../components/shared/SeoHead';

export const DigitalizationImportancePost = () => {
    return (
        <div className="bg-slate-950 min-h-screen font-sans text-slate-300 selection:bg-brand-primary selection:text-white">
            <SeoHead
                title="La Importancia de la Digitalización | Blog Activa"
                description="Descubre por qué la transformación digital no es una opción, sino una necesidad para la supervivencia empresarial en 2026."
            />
            <ReadingProgress />
            <Navigation />

            <main className="pt-32 pb-24">
                <article className="max-w-4xl mx-auto px-6 lg:px-12">

                    {/* Header */}
                    <RevealSection>
                        <Link to="/blog" className="inline-flex items-center text-brand-primary text-sm font-bold uppercase tracking-wider mb-8 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Volver al Blog
                        </Link>

                        <div className="flex items-center gap-4 text-sm font-bold text-slate-500 mb-6 uppercase tracking-widest">
                            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-brand-primary">Estrategia Empresarial</span>
                            <span>6 Febrero, 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-8">
                            La Digitalización no es el Futuro. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">Es tu Supervivencia.</span>
                        </h1>
                    </RevealSection>

                    {/* Featured Image */}
                    <RevealSection delay={200}>
                        <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-brand-primary/10 border border-white/5 relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                            <img
                                src={heroImage}
                                alt="Digitalization Datacenter"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </RevealSection>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-slate-400">
                        <RevealSection delay={300}>
                            <p className="lead text-xl md:text-2xl text-slate-200 font-light leading-relaxed mb-12 border-l-4 border-brand-primary pl-6">
                                En el entorno empresarial actual, operar con procesos analógicos o sistemas desconectados es el equivalente a navegar a vela contra de un buque de carga nuclear. La eficiencia no se negocia.
                            </p>

                            <h2 className="text-3xl font-display font-bold text-white mt-16 mb-6">El Coste Oculto de la Ineficiencia</h2>
                            <p>
                                Muchas PYMES creen que "digitalizarse" es tener una página web y redes sociales. Nada más lejos de la realidad. La verdadera digitalización ocurre cuando tus <strong>procesos operativos, ventas y gestión de clientes</strong> fluyen a través de una infraestructura tecnológica que elimina el error humano y multiplica la productividad.
                            </p>
                            <p>
                                Seguir dependiendo de hojas de cálculo descentralizadas (Excel), agendas en papel o software legado que no se comunica entre sí, está costando a tu empresa entre un <strong>20% y un 30% de sus ingresos anuales</strong> en horas perdidas y oportunidades no cerradas.
                            </p>
                        </RevealSection>

                        <RevealSection delay={400}>
                            <div className="grid md:grid-cols-2 gap-8 my-16 not-prose">
                                <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-brand-primary/30 transition-all">
                                    <TrendingUp className="w-8 h-8 text-brand-primary mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Escalabilidad Real</h3>
                                    <p className="text-slate-400 text-sm">Sin software propio, crecer significa contratar más personal proporcionalmente. Con tecnología, puedes duplicar clientes manteniendo el mismo equipo.</p>
                                </div>
                                <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-brand-primary/30 transition-all">
                                    <ShieldCheck className="w-8 h-8 text-brand-primary mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Control Total</h3>
                                    <p className="text-slate-400 text-sm">Los datos son el nuevo petróleo. Un CRM a medida te dice exactamente qué está pasando en tu empresa en tiempo real.</p>
                                </div>
                            </div>
                        </RevealSection>

                        <RevealSection delay={500}>
                            <h2 className="text-3xl font-display font-bold text-white mb-6">¿Por qué Software Propio?</h2>
                            <p>
                                Las soluciones "enlatadas" (SaaS genéricos) te obligan a adaptar tu empresa a su software. En <strong>Activa SL Digital</strong>, creemos en la ingeniería de software a medida: activos digitales que se adaptan como un guante a tu operativa única.
                            </p>
                            <ul className="space-y-4 mt-8 mb-12 not-prose">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                                    <span className="text-slate-300"><strong className="text-white">Automatización de Procesos:</strong> Facturación, seguimiento de leads y recordatorios automáticos.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                                    <span className="text-slate-300"><strong className="text-white">Seguridad de Datos:</strong> Infraestructura blindada y cumplimiento normativo (RGPD) por diseño.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                                    <span className="text-slate-300"><strong className="text-white">Valor de Activo:</strong> El software propio es un activo intangible que aumenta la valoración de tu compañía.</span>
                                </li>
                            </ul>

                            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-brand-primary/20 relative overflow-hidden mt-16">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10">¿Listo para dar el salto?</h3>
                                <p className="text-slate-400 mb-8 relative z-10">
                                    No dejes que tu competencia te supere por tecnología. Solicita una auditoría técnica gratuita hoy mismo.
                                </p>
                                <Link to="/#contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary text-slate-950 font-bold uppercase tracking-wider hover:bg-white transition-colors relative z-10">
                                    <Zap className="w-4 h-4" />
                                    Solicitar Auditoría
                                </Link>
                            </div>
                        </RevealSection>
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    );
};
