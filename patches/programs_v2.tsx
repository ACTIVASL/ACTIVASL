import { Helmet } from 'react-helmet-async';
import { useSearchParams, Link } from 'react-router-dom';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/landing/Footer';
import { RevealSection } from '../components/ui/RevealSection';
import {
    Globe,
    Database,
    Smartphone,
    Shield,
    Check,
    ArrowRight,
    Users
} from 'lucide-react';

interface ProgramItem {
    title: string;
    target: string;
    duration: string;
    price: string;
    period?: string;
    features: string[];
    tag: string;
    highlight?: boolean;
    badge?: string;
}

export const Programs = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get('tab');

    // Default to 'triada' which shows everything or specific tabs
    const activeTab = (currentTab && ['captacion', 'organizacion', 'movil', 'consultoria'].includes(currentTab))
        ? (currentTab as 'captacion' | 'organizacion' | 'movil' | 'consultoria')
        : 'captacion';

    const tabs = [
        { id: 'captacion', label: 'Web High-Perf', icon: Globe },
        { id: 'organizacion', label: 'Software CRM', icon: Database },
        { id: 'movil', label: 'App Móvil', icon: Smartphone },
        { id: 'consultoria', label: 'Consultoría CTO', icon: Shield },
    ] as const;

    const content = {
        captacion: {
            title: "ACTIVA CAPTACIÓN",
            subtitle: "No vendemos webs bonitas. Vendemos máquinas de conversión.",
            items: [
                {
                    title: "Landing High-Performance",
                    target: "Startups & Lanzamientos",
                    duration: "Entrega 2 semanas",
                    price: "2.500 €",
                    period: "+ 150€/mes",
                    features: ["Score 98+ Google", "Deep Linking", "SEO Técnico Avanzado", "Diseño Dark Tech"],
                    tag: "Velocidad",
                    highlight: false
                },
                {
                    title: "Ecosistema Corporativo",
                    target: "Pymes Consolidadas",
                    duration: "Entrega 4 semanas",
                    price: "4.500 €",
                    period: "+ 250€/mes",
                    features: ["Captación de Leads", "Blog Automatizado", "Integración CRM", "Multilingüe"],
                    tag: "Escalabilidad",
                    highlight: true,
                    badge: "Best Seller"
                }
            ]
        },
        organizacion: {
            title: "ACTIVA ORGANIZACIÓN",
            subtitle: "Tus datos, tus reglas. Soberanía Digital absoluta con nuestro CRM Propio.",
            items: [
                {
                    title: "CRM Titanium",
                    target: "Gestión Interna",
                    duration: "Setup 1 mes",
                    price: "5.000 €",
                    period: "Pago Único",
                    features: ["Seguridad Bancaria (WIF)", "Base de Datos Propia", "Backups Automáticos", "Sin Límite de Usuarios"],
                    tag: "Soberanía",
                    highlight: true,
                    badge: "Propiedad Total"
                },
                {
                    title: "ERP A Medida",
                    target: "Gran Empresa",
                    duration: "3-6 Meses",
                    price: "12.000 €",
                    period: "Desde",
                    features: ["Automatización Total", "Facturación Masiva", "Dashboard BI en Tiempo Real", "API Propia"],
                    tag: "Enterprise",
                    highlight: false
                }
            ]
        },
        movil: {
            title: "ACTIVA MÓVIL (PWA)",
            subtitle: "Tu marca en la pantalla de inicio de tus clientes. Sin comisiones.",
            items: [
                {
                    title: "App Corporativa PWA",
                    target: "Fidelización",
                    duration: "Entrega 2 semanas",
                    price: "1.500 €",
                    period: "Pago Único",
                    features: ["Instalación Directa", "Funciona Offline", "Notificaciones Push", "0% Comisiones Stores"],
                    tag: "Presencia",
                    highlight: false
                },
                {
                    title: "App Gestión de Campo",
                    target: "Operarios / Logística",
                    duration: "Entrega 3 semanas",
                    price: "3.000 €",
                    period: "Pago Único",
                    features: ["Firma Digital", "Geolocalización", "Sincronización Background", "Cámara / Escáner"],
                    tag: "Productividad",
                    highlight: true,
                    badge: "Herramienta"
                }
            ]
        },
        consultoria: {
            title: "CONSULTORÍA ÉLITE",
            subtitle: "Ingeniería digital para resolver problemas que otros no pueden.",
            items: [
                {
                    title: "Auditoría de Seguridad",
                    target: "Corporativo",
                    duration: "1 Semana",
                    price: "1.500 €",
                    period: "/ Auditoría",
                    features: ["Penetration Testing", "Revisión de Fugas", "Informe de Blindaje", "Compliance GDPR"],
                    tag: "Defensa",
                    highlight: false
                },
                {
                    title: "CTO as a Service",
                    target: "Startups",
                    duration: "Mensual",
                    price: "3.000 €",
                    period: "/ mes",
                    features: ["Dirección Técnica", "Gestión de Equipos", "Roadmap Tecnológico", "Arquitectura Escalable"],
                    tag: "Liderazgo",
                    highlight: true,
                    badge: "Alto Impacto"
                }
            ]
        }
    };

    return (
        <div className="bg-brand-dark min-h-screen font-sans text-brand-accent selection:bg-brand-primary selection:text-black">
            <Helmet>
                <title>Servicios y Tarifas | Activa SL Digital</title>
                <meta name="description" content="Soluciones digitales de alto rendimiento: Web, Software y Apps Móviles. Precios transparentes." />
            </Helmet>

            <Navigation />

            <main className="pt-32 pb-24">
                {/* HERO SECTION - STRATEGIC POSITIONING */}
                <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
                    <RevealSection>
                        <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-6 uppercase">
                            Catálogo <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                                Titanium
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Infraestructura digital para empresas que no juegan a ser amateurs.
                            <span className="text-brand-primary font-bold ml-2">Código en Propiedad.</span>
                        </p>
                    </RevealSection>
                </div>

                {/* TABS NAVIGATION */}
                <div className="sticky top-24 z-50 bg-brand-dark/90 backdrop-blur-xl border-y border-white/5 py-4 mb-16 shadow-2xl shadow-brand-primary/5">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="flex overflow-x-auto gap-4 md:justify-center pb-2 md:pb-0 scrollbar-hide">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setSearchParams({ tab: tab.id }, { replace: true })}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${activeTab === tab.id
                                        ? 'bg-brand-primary text-black border-brand-primary shadow-lg shadow-brand-primary/50 transform scale-105'
                                        : 'bg-white/5 text-slate-400 border-white/10 hover:border-brand-primary/50 hover:text-brand-primary'
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CONTENT GRID */}
                <div className="max-w-7xl mx-auto px-6 lg:px-12 min-h-[600px]">
                    <RevealSection key={activeTab}>
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl font-display font-bold text-white mb-2">{content[activeTab].title}</h2>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{content[activeTab].subtitle}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
                            {(content[activeTab].items as ProgramItem[]).map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`relative bg-white/5 rounded-[2rem] p-8 border transition-all duration-300 flex flex-col h-full backdrop-blur-sm
                                        ${item.highlight
                                            ? 'border-brand-primary/50 shadow-2xl shadow-brand-primary/20 scale-105 z-10 bg-gradient-to-b from-white/10 to-transparent'
                                            : 'border-white/10 hover:border-white/30'
                                        }`}
                                >
                                    {/* PSYCHOLOGICAL BADGE */}
                                    {item.highlight && (
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-primary text-black px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-primary/50">
                                            {item.badge}
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-3 py-1 rounded-full bg-white/10 text-brand-primary text-[10px] font-bold uppercase tracking-wider border border-white/10">
                                                {item.tag}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-white leading-tight mb-2">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                            <Users className="w-4 h-4 text-brand-secondary" />
                                            {item.target}
                                        </div>
                                    </div>

                                    {/* PRICE ANCHORING */}
                                    <div className="mb-8 p-6 bg-black/40 rounded-2xl text-center border border-white/5">
                                        <p className="text-3xl font-bold text-white tracking-tight">
                                            {item.price}
                                        </p>
                                        <p className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wide">
                                            {item.period}
                                        </p>
                                    </div>

                                    {/* FEATURES LIST */}
                                    <div className="space-y-4 mb-8 flex-grow">
                                        {item.features.map((feature: string, fIdx: number) => (
                                            <div key={fIdx} className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                                                    <Check className="w-3 h-3 text-brand-primary" />
                                                </div>
                                                <span className="text-slate-300 text-sm font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA BUTTON */}
                                    <Link
                                        to="/#contact"
                                        className={`flex items-center justify-center w-full py-4 rounded-xl font-bold transition-all group-hover:scale-[1.02] shadow-sm
                                            ${item.highlight
                                                ? 'bg-brand-primary text-black hover:bg-white hover:text-black shadow-lg shadow-brand-primary/25'
                                                : 'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white'
                                            }`}
                                    >
                                        Contratar Solución
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* TRUST & AUTHORITY BANNER */}
                        <div className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-brand-secondary/20 to-brand-primary/10 border border-brand-primary/20 text-center relative overflow-hidden backdrop-blur-md">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold font-display mb-4 text-white">¿Necesitas la Triada Digital Completa?</h3>
                                <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                                    Si facturas más de 1M€, no contrates suelto. Desplegamos tu infraestructura completa (Web + CRM + App) en 60 días.
                                </p>
                                <a href="mailto:ceo@activa-sl.digital" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-brand-primary transition-all shadow-lg hover:shadow-brand-primary/50">
                                    <Shield className="w-4 h-4" />
                                    Hablar con Dirección
                                </a>
                            </div>
                        </div>

                    </RevealSection>
                </div>
            </main>

            <Footer />
        </div>
    );
};
