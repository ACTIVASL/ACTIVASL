/* eslint-disable @typescript-eslint/no-explicit-any */
import { LucideIcon } from 'lucide-react';
import {
    Landmark, Settings, Server, Lightbulb, Headset,
    Globe, Briefcase, Scale, TrendingUp,
    AlertCircle, Bot, BrainCircuit, AlertTriangle,
    Magnet, Shield, PhoneForwarded, Rocket,
} from 'lucide-react';

// --- TYPES ---
export interface SquadMember {
    role: string;
    salary: number;
    active: boolean;
    function: string;
    agent: string;
    result: string;
    multiplier?: number;
    notebookUrl?: string;
    photo?: string;
}

export interface Insight {
    id: number;
    type: 'strategy' | 'risk' | 'opportunity';
    text: string;
}

export interface Product {
    name: string;
    price: string;
    desc: string;
    icon: LucideIcon;
    slogan: string;
}

export interface SectionData {
    status: string;
    id: string;
    title: string;
    ceoObjective: string;
    squad: SquadMember[];
    insights: Insight[];
    products?: Product[];
}

export interface SectionConfig {
    id: string;
    canvasTitle: string;
    title: string;
    ceoObjective: string;
    icon: LucideIcon;
    theme: string;
    gradient: string;
    accent: string;
    border: string;
    iconBg: string;
    iconColor: string;
    glow: string;
    description: string;
    prompt: string;
}

export interface ModelData {
    [key: string]: SectionData;
}

export const STATUS_CONFIG: Record<string, { label: string; color: string; icon: LucideIcon }> = {
    empty: { label: 'Sin Datos', color: 'bg-slate-800/50 text-slate-500 border-slate-700/50', icon: AlertCircle },
    ready: { label: 'Listo', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]', icon: Bot },
    active: { label: 'Activo', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-pulse', icon: BrainCircuit },
    warning: { label: 'Atención', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]', icon: AlertTriangle },
};

// --- INITIAL DATA (100 EMPLOYEES) ---
export const INITIAL_MODEL_DATA: ModelData = {
    key_partners: {
        status: 'ready', id: 'key_partners', title: 'Socios Clave',
        ceoObjective: "Mitigación integral de riesgos corporativos y optimización del gasto estructural.",
        squad: [
            { role: "Director Relaciones Inst.", salary: 60000, active: true, function: "Representación y Lobby.", agent: "ACTIVA-Socios", result: "3 Acuerdos Marco/Año" },
            { role: "Gestor Relación Socios", salary: 35000, active: true, function: "Enlace operativo con socios.", agent: "ACTIVA-Enlace", result: "Satisfacción Socios > 60" },
            { role: "Jefe de Compras", salary: 40000, active: true, function: "Negociación Proveedores.", agent: "ACTIVA-Compras", result: "Eficiencia de Costes >12%" },
            { role: "Letrado Asesor", salary: 45000, active: true, function: "Asesoría Jurídica.", agent: "ACTIVA-Legal", result: "100% Cumplimiento RGPD" },
            { role: "Responsable Alianzas", salary: 35000, active: true, function: "Gestión de Colaboradores.", agent: "ACTIVA-Integrador", result: "Nivel Servicio 99.9%" },
            { role: "Técnico Subvenciones", salary: 24000, active: true, function: "Tramitación Ayudas.", agent: "ACTIVA-Subvencion", result: "Tasa Éxito 100%" }
        ],
        insights: [
            { id: 1, type: 'strategy', text: "Estructurar Empresa Conjunta con consultora 'Big 4' para licencias corporativas." },
            { id: 2, type: 'risk', text: "Riesgo regulatorio inminente por la nueva Ley de IA de la UE. Auditoría urgente." },
            { id: 3, type: 'opportunity', text: "Solicitar fondos NextGen 2026 para digitalización profunda (Kit Digital Ampliado)." },
            { id: 4, type: 'risk', text: "Dependencia alta de proveedor de nube único. Diversificar proveedores." },
            { id: 5, type: 'strategy', text: "Renegociar acuerdos de nivel de servicio y exclusividad con integradores." },
            { id: 6, type: 'opportunity', text: "Alianza estratégica con Colegios de Abogados para prescripción directa." }
        ]
    },
    key_activities: {
        status: 'active', id: 'key_activities', title: 'Actividades Clave',
        ceoObjective: "Excelencia operativa con un nivel de servicio de entrega < 48h y tasa de error < 0.1%.",
        squad: [
            { role: "Director de Operaciones", salary: 70000, active: true, function: "Dirección Operativa.", agent: "ACTIVA-Ops", result: "Margen Operativo > 68%" },
            { role: "Coordinador de Flujos", salary: 40000, active: true, function: "Coordinación Inter-dptal.", agent: "ACTIVA-Flujo", result: "0 Cuellos de Botella" },
            { role: "Jefe de Proyectos (x2)", salary: 45000, multiplier: 2, active: true, function: "Coordinación.", agent: "ACTIVA-Proyectos", result: "Entregas en Plazo 99%" },
            { role: "Técnico de Sistemas (x5)", salary: 28000, multiplier: 5, active: true, function: "Implantación Técnica.", agent: "ACTIVA-Config", result: "6 Implantaciones/Día/Pax" },
            { role: "Técnico de Calidad (x2)", salary: 26000, multiplier: 2, active: true, function: "Control de Calidad.", agent: "ACTIVA-Calidad", result: "Tasa de Error < 0.5%" },
            { role: "Admin. Sistemas Sénior", salary: 35000, active: true, function: "Mantenimiento Infraestructura.", agent: "ACTIVA-Sistemas", result: "Disponibilidad 99.95%" }
        ],
        insights: [
            { id: 7, type: 'opportunity', text: "Automatizar la incorporación de clientes con agentes IA para reducir tiempo a 48h." },
            { id: 8, type: 'risk', text: "Cuello de botella detectado en revisión manual de calidad durante cierres." },
            { id: 9, type: 'strategy', text: "Migración a arquitectura de microservicios para escalar operaciones." },
            { id: 10, type: 'strategy', text: "Implementar turnos rotativos 24/7 en monitorización de sistemas críticos." },
            { id: 11, type: 'risk', text: "Latencia elevada en picos de uso (Lunes 9:00 AM). Requiere balanceo de carga." },
            { id: 12, type: 'opportunity', text: "Panel de estado de servicio en tiempo real para cliente final." }
        ]
    },
    key_resources: {
        status: 'ready', id: 'key_resources', title: 'Recursos Clave',
        ceoObjective: "Infraestructura escalable y retención de talento clave (eNPS > 50).",
        squad: [
            { role: "Director General y Fundador", salary: 120000, active: true, function: "Visión y Estrategia Global.", agent: "ACTIVA-Principal", result: "Crecimiento > 25%", notebookUrl: "https://notebooklm.google.com/notebook/476040c7-e5e6-4922-ba98-66af83b35bd8?authuser=1" },
            { role: "Director de Tecnología", salary: 85000, active: true, function: "Estrategia TIC.", agent: "ACTIVA-Tecnologia", result: "Deuda Técnica < 5%" },
            { role: "Arquitecto de Nube Principal", salary: 55000, active: true, function: "Arquitectura Confianza Cero.", agent: "ACTIVA-Nube", result: "Disponibilidad 99.99%" },
            { role: "Programador Júnior (Prácticas) (x2)", salary: 24000, multiplier: 2, active: true, function: "Aprendizaje y Apoyo.", agent: "ACTIVA-Aprendiz", result: "Promoción en 12 meses" },
            { role: "Analista Programador (x6)", salary: 35000, multiplier: 6, active: true, function: "Desarrollo Software.", agent: "ACTIVA-Codigo", result: "Entregas Sprint" },
            { role: "Científico de Datos e IA (x2)", salary: 55000, multiplier: 2, active: true, function: "I+D Inteligencia Artificial.", agent: "ACTIVA-IA", result: "Precisión Modelo > 98.5%" },
            { role: "Director RRHH", salary: 60000, active: true, function: "Gestión Personas.", agent: "ACTIVA-Talento", result: "Rotación < 5%" }
        ],
        insights: [
            { id: 13, type: 'risk', text: "Dependencia crítica de la API de OpenAI. Plan de contingencia Llama 3 local." },
            { id: 14, type: 'strategy', text: "Activar plan 'Acciones por Impacto' para blindar a los arquitectos de IA." },
            { id: 15, type: 'opportunity', text: "Implementar Asistente de Código Corporativo para aumentar productividad un 30%." },
            { id: 16, type: 'risk', text: "Deuda técnica acumulada en el módulo de facturación antiguo." },
            { id: 17, type: 'strategy', text: "Programa de formación interno 'IA-Primero' obligatorio para toda la plantilla." },
            { id: 18, type: 'opportunity', text: "Competición de Innovación interna trimestral para fomentar nuevas ideas." }
        ]
    },
    value_propositions: {
        status: 'ready', id: 'value_propositions', title: 'Propuesta de Valor',
        ceoObjective: "Vender tranquilidad: Dormir tranquilo y tener el control total del negocio.",
        products: [
            { name: "ACTIVA CAPTACIÓN", price: "450€", desc: "Consigue más clientes y mejores reseñas en Google mientras duermes.", icon: Magnet, slogan: "Ventas mientras duermes" },
            { name: "ACTIVA ORGANIZACIÓN", price: "250€", desc: "Adiós al caos: Tu CRM y facturación bajo control total.", icon: Shield, slogan: "Adiós al caos" },
            { name: "ACTIVA SECRETARÍA", price: "250€", desc: "Tu recepcionista 24h: Atiende llamadas y agenda citas.", icon: PhoneForwarded, slogan: "Ninguna llamada perdida" },
            { name: "ACTIVA TRANSFORMACIÓN", price: "1500€", desc: "Cambio radical de tu negocio. Tecnología blindada y a medida.", icon: Rocket, slogan: "Cambio radical" }
        ],
        squad: [
            { role: "Director de Producto", salary: 70000, active: true, function: "Visión Producto.", agent: "ACTIVA-Vision", result: "Ajuste Producto-Mercado" },
            { role: "Jefe de Producto (x2)", salary: 50000, multiplier: 2, active: true, function: "Gestión Ciclo Vida.", agent: "ACTIVA-Crecimiento", result: "Adopción > 45%" },
            { role: "Jefe Experiencia Usuario", salary: 45000, active: true, function: "Diseño y Usabilidad.", agent: "ACTIVA-Facil", result: "Satisfacción > 8.5" },
            { role: "Redactor Creativo Sénior", salary: 35000, active: true, function: "Narrativa y Tono.", agent: "ACTIVA-Claridad", result: "Conversión Web +15%" }
        ],
        insights: [
            { id: 19, type: 'strategy', text: "Pivote hacia 'Tecnología en Propiedad': El cliente es dueño de su sistema." },
            { id: 20, type: 'opportunity', text: "Patentar nuestros algoritmos de procesamiento jurídico como barrera de entrada." },
            { id: 21, type: 'strategy', text: "Soberanía Digital: No alquilamos el negocio del cliente, se lo entregamos." },
            { id: 22, type: 'risk', text: "Vencer el miedo tecnológico: Garantía de 'Seguridad Bancaria' en todos los datos." },
            { id: 23, type: 'opportunity', text: "Lanzar 'Activa Voz': Asistente telefónico con voz humana indistinguible." },
            { id: 24, type: 'risk', text: "Competencia de bajo coste ofreciendo asistentes básicos a precio de derribo." }
        ]
    },
    customer_relationships: {
        status: 'active', id: 'customer_relationships', title: 'Relaciones con Clientes',
        ceoObjective: "Maximizar el valor de vida del cliente y mantener la tasa de baja < 1.2% mensual.",
        squad: [
            { role: "Director Atención al Cliente", salary: 55000, active: true, function: "Estrategia Servicio.", agent: "ACTIVA-Exito", result: "Retención > 110%" },
            { role: "Defensor del Cliente", salary: 50000, active: true, function: "Resolución de Conflictos.", agent: "ACTIVA-Defensor", result: "Bajas Evitadas" },
            { role: "Jefe Equipo Soporte", salary: 35000, active: true, function: "Coordinación.", agent: "ACTIVA-NivelServicio", result: "Satisfacción > 4.8/5" },
            { role: "Teleoperador Nivel 1 (x8)", salary: 22000, multiplier: 8, active: true, function: "Soporte Masivo.", agent: "ACTIVA-Soporte", result: "Resolución 85%" },
            { role: "Técnico de Activación (x2)", salary: 26000, multiplier: 2, active: true, function: "Puesta en Marcha.", agent: "ACTIVA-Inicio", result: "Activación < 72h" }
        ],
        insights: [
            { id: 25, type: 'opportunity', text: "Implementar 'Índice de Salud' predictivo para prevenir bajas con 30 días." },
            { id: 26, type: 'strategy', text: "Desplegar Agente IA de Nivel 2 autónomo para resolución de incidencias." },
            { id: 27, type: 'risk', text: "Aumento de bajas en el segmento PYME por sensibilidad al precio." },
            { id: 28, type: 'strategy', text: "Crear programa de 'Embajadores de Marca' con incentivos por referidos." },
            { id: 29, type: 'opportunity', text: "Soporte VIP por videollamada para grandes cuentas." },
            { id: 30, type: 'risk', text: "Tiempos de respuesta degradados en fines de semana." }
        ]
    },
    channels: {
        status: 'ready', id: 'channels', title: 'Canales',
        ceoObjective: "Optimización del coste de adquisición < 30€ y escalado de canales.",
        squad: [
            { role: "Director de Marketing", salary: 70000, active: true, function: "Dirección Mkt.", agent: "ACTIVA-Marketing", result: "Contactos Cualificados" },
            { role: "Embajador de Marca (x2)", salary: 5000, multiplier: 2, active: true, function: "Divulgación Técnica.", agent: "ACTIVA-Marca", result: "Autoridad Técnica" },
            { role: "Gestor Tráfico Digital", salary: 35000, active: true, function: "Publicidad Digital.", agent: "ACTIVA-Anuncios", result: "Retorno Inversión > 4.5" },
            { role: "Gerente Comercio Electrónico", salary: 38000, active: true, function: "Ventas Online.", agent: "ACTIVA-Comercio", result: "Ventas Online +15%" },
            { role: "Especialista Posicionamiento", salary: 30000, active: true, function: "Posicionamiento Web.", agent: "ACTIVA-Posicionamiento", result: "Autoridad > 50" },
            { role: "Resp. Contenidos", salary: 30000, active: true, function: "Marketing de Contenidos.", agent: "ACTIVA-Contenidos", result: "Interacción > 3%" },
            { role: "Técnico Email Marketing", salary: 26000, active: true, function: "Automatización.", agent: "ACTIVA-Correo", result: "Clics > 4%" },
            { role: "Gestor de Prospección (x4)", salary: 25000, multiplier: 4, active: true, function: "Venta Saliente (Captación).", agent: "ACTIVA-Conexion", result: "15 Citas/Semana/Pax" },
            { role: "Gestor Canal Indirecto", salary: 30000, active: true, function: "Distribuidores.", agent: "ACTIVA-Afiliados", result: "20% Ventas Canal" }
        ],
        insights: [
            { id: 31, type: 'opportunity', text: "Estrategia Crecimiento por Producto: Lanzar herramienta gratuita 'Auditoría-IA'." },
            { id: 32, type: 'strategy', text: "Lanzar podcast de nicho 'IA y Leyes' para autoridad de marca." },
            { id: 33, type: 'risk', text: "Coste por Clic en LinkedIn disparado un 40% este trimestre." },
            { id: 34, type: 'strategy', text: "Marketing de Cuentas Clave (ABM) para atacar grandes corporaciones." },
            { id: 35, type: 'opportunity', text: "Estrategia de contenidos virales B2B en redes sociales verticales." },
            { id: 36, type: 'risk', text: "Saturación del canal de correo frío. Bajada de tasa de apertura." }
        ]
    },
    customer_segments: {
        status: 'ready', id: 'customer_segments', title: 'Segmentos de Clientes',
        ceoObjective: "Ser la columna vertebral tecnológica de los sectores HORECA, Salud y Legal.",
        squad: [
            { role: "Director Sector Hostelería", salary: 55000, active: true, function: "Estrategia Sectorial.", agent: "ACTIVA-Restauracion", result: "Cuota Hostelería +5%" },
            { role: "Director Sector Salud", salary: 55000, active: true, function: "Estrategia Sectorial.", agent: "ACTIVA-Salud", result: "Cuota Salud +8%" },
            { role: "Gestor Grandes Cuentas Legal", salary: 45000, active: true, function: "Despachos Profesionales.", agent: "ACTIVA-Legal", result: "Cuota Legal +10%" },
            { role: "Gestor Grandes Cuentas Comercio", salary: 45000, active: true, function: "Comercio Minorista.", agent: "ACTIVA-Comercio", result: "Cuota Comercio +6%" },
            { role: "Analista de Mercado", salary: 35000, active: true, function: "Estudios.", agent: "ACTIVA-Analisis", result: "Informes Viabilidad" }
        ],
        insights: [
            { id: 37, type: 'strategy', text: "Piloto de expansión internacional en México D.F. (Hub LATAM)." },
            { id: 38, type: 'opportunity', text: "Verticalizar producto para el sector Asegurador." },
            { id: 39, type: 'risk', text: "Recesión en el sector Inmobiliario afecta a nuestros clientes actuales." },
            { id: 40, type: 'strategy', text: "Campaña agresiva de Venta Cruzada a la base instalada." },
            { id: 41, type: 'opportunity', text: "Crear Mercado Digital de complementos para abrirnos a terceros desarrolladores." },
            { id: 42, type: 'risk', text: "Ciclos de venta Corporativa alargándose de 3 a 6 meses." }
        ]
    },
    cost_structure: {
        status: 'active', id: 'cost_structure', title: 'Estructura de Costes',
        ceoObjective: "Sostenibilidad financiera con EBITDA > 25% y optimización fiscal.",
        squad: [
            { role: "Director Financiero", salary: 80000, active: true, function: "Dirección Financiera.", agent: "ACTIVA-Finanzas", result: "Flujo Caja Positivo" },
            { role: "Analista Costes Tecnológicos", salary: 50000, active: true, function: "Optimización Costes Nube.", agent: "ACTIVA-CosteNube", result: "Ahorro Nube 20%" },
            { role: "Controlador Financiero", salary: 45000, active: true, function: "Control Gestión.", agent: "ACTIVA-Control", result: "Desviación < 2%" },
            { role: "Técnico Contable (x2)", salary: 24000, multiplier: 2, active: true, function: "Facturación.", agent: "ACTIVA-Cobros", result: "Cobro < 45 días" },
            { role: "Jefe de Oficina", salary: 30000, active: true, function: "Gestión Oficina.", agent: "ACTIVA-Oficina", result: "Eficiencia Gastos" },
            { role: "Personal Limpieza (x2)", salary: 18000, multiplier: 2, active: true, function: "Mantenimiento.", agent: "ACTIVA-Limpieza", result: "Higiene y Orden" }
        ],
        insights: [
            { id: 43, type: 'risk', text: "Economía Unitaria en riesgo: Coste de tokens crece más rápido que ingresos." },
            { id: 44, type: 'strategy', text: "Optimización fiscal mediante deducciones por I+D+i tecnológico." },
            { id: 45, type: 'opportunity', text: "Preparar documentación para Ronda Serie B en segundo trimestre." },
            { id: 46, type: 'risk', text: "Exposición al tipo de cambio USD/EUR en pagos de infraestructura." },
            { id: 47, type: 'strategy', text: "Reducir espacio de oficinas físicas y potenciar remoto (Ahorro 20%)." },
            { id: 48, type: 'opportunity', text: "Implementar anticipo de facturas automático para mejorar liquidez inmediata." }
        ]
    },
    revenue_streams: {
        status: 'active', id: 'revenue_streams', title: 'Fuentes de Ingresos',
        ceoObjective: "Alcanzar 7M€ de facturación anual con un crecimiento del 25%.",
        squad: [
            { role: "Director Comercial", salary: 75000, active: true, function: "Dirección Comercial.", agent: "ACTIVA-Ventas", result: "105% Obj. Venta" },
            { role: "Jefe de Ventas", salary: 50000, active: true, function: "Coordinación.", agent: "ACTIVA-Entrenador", result: "Cartera 3x" },
            { role: "Ejecutivo de Cuentas Sénior (x8)", salary: 35000, multiplier: 8, active: true, function: "Cierre Ventas (Pareja A).", agent: "ACTIVA-Cierre", result: "Cuota 100%" },
            { role: "Prospector de Ventas Júnior (x8)", salary: 25000, multiplier: 8, active: true, function: "Apertura (Pareja B).", agent: "ACTIVA-Apertura", result: "20 Demos/Semana" },
            { role: "Agente Comercial (x5)", salary: 20000, multiplier: 5, active: true, function: "Venta Telefónica.", agent: "ACTIVA-Llamadas", result: "60 Demos/Mes" },
            { role: "Delegado de Canal", salary: 45000, active: true, function: "Venta Indirecta.", agent: "ACTIVA-Canal", result: "Expansión Red" }
        ],
        insights: [
            { id: 49, type: 'strategy', text: "Transición de Precios: De 'Licencia' a 'Pago por Consumo' (Créditos IA)." },
            { id: 50, type: 'opportunity', text: "Cobro anual adelantado con descuento para financiar crecimiento." },
            { id: 51, type: 'risk', text: "Tasa de cierre en demos ha bajado un 5%. Requiere formación ventas." },
            { id: 52, type: 'strategy', text: "Revisión de esquema de comisiones variables trimestrales." },
            { id: 53, type: 'opportunity', text: "Nueva línea de ingresos: Certificación oficial y Formación." },
            { id: 54, type: 'risk', text: "Canibalización de ventas directas por parte del canal indirecto." }
        ]
    }
};

// --- SECTIONS CONFIG ---
export const SECTIONS: Record<string, SectionConfig> = {
    key_partners: {
        id: 'key_partners', canvasTitle: 'Socios Clave', title: 'Dpto. Legal y Alianzas',
        ceoObjective: "Mitigación integral de riesgos corporativos y optimización del OPEX estructural.",
        icon: Landmark, theme: 'slate',
        gradient: 'from-slate-800/20 via-slate-900/50 to-transparent',
        accent: 'text-slate-300', border: 'border-slate-700/30',
        iconBg: 'bg-slate-900/30', iconColor: 'text-slate-200', glow: 'shadow-slate-900/20',
        description: 'Gestión de relaciones institucionales, procurement estratégico y compliance normativo.',
        prompt: "Actúa como ACTIVA-Legal. Analiza el borrador del contrato adjunto."
    },
    key_activities: {
        id: 'key_activities', canvasTitle: 'Actividades Clave', title: 'Dpto. de Operaciones',
        ceoObjective: "Excelencia operativa con un SLA de entrega < 48h y tasa de error < 0.1%.",
        icon: Settings, theme: 'cyan',
        gradient: 'from-cyan-800/20 via-slate-900/50 to-transparent',
        accent: 'text-cyan-300', border: 'border-cyan-700/30',
        iconBg: 'bg-cyan-900/30', iconColor: 'text-cyan-200', glow: 'shadow-cyan-900/20',
        description: 'Centro de ejecución de despliegues, configuración de sistemas y mantenimiento.',
        prompt: "Actúa como ACTIVA-Ops. Genera un cronograma detallado de implementación."
    },
    key_resources: {
        id: 'key_resources', canvasTitle: 'Recursos Clave', title: 'Dpto. Tecnología y Personas',
        ceoObjective: "Infraestructura escalable y retención de talento clave (eNPS > 50).",
        icon: Server, theme: 'violet',
        gradient: 'from-violet-800/20 via-slate-900/50 to-transparent',
        accent: 'text-violet-300', border: 'border-violet-700/30',
        iconBg: 'bg-violet-900/30', iconColor: 'text-violet-200', glow: 'shadow-violet-900/20',
        description: 'Gestión del capital humano y arquitectura tecnológica en la nube.',
        prompt: "Actúa como ACTIVA-Tech. Diseña una arquitectura de microservicios escalable."
    },
    value_propositions: {
        id: 'value_propositions', canvasTitle: 'Propuesta de Valor', title: 'Soluciones PYME',
        ceoObjective: "Vender tranquilidad: Dormir tranquilo y tener el control total del negocio.",
        icon: Lightbulb, theme: 'fuchsia',
        gradient: 'from-fuchsia-800/30 via-slate-900/50 to-transparent',
        accent: 'text-fuchsia-300', border: 'border-fuchsia-600/40',
        iconBg: 'bg-fuchsia-900/40', iconColor: 'text-white', glow: 'shadow-fuchsia-900/30',
        description: 'Tecnología en propiedad con seguridad bancaria. Recupera el control de tu negocio.',
        prompt: "Actúa como ACTIVA-Vision. Analiza las tendencias emergentes en IA generativa."
    },
    customer_relationships: {
        id: 'customer_relationships', canvasTitle: 'Relaciones con Clientes', title: 'Dpto. Atención al Cliente',
        ceoObjective: "Maximizar el valor de vida del cliente y mantener la tasa de baja < 1.2% mensual.",
        icon: Headset, theme: 'rose',
        gradient: 'from-rose-800/20 via-slate-900/50 to-transparent',
        accent: 'text-rose-300', border: 'border-rose-700/30',
        iconBg: 'bg-rose-900/30', iconColor: 'text-rose-200', glow: 'shadow-rose-900/20',
        description: 'Gestión proactiva de la satisfacción y soporte técnico masivo.',
        prompt: "Actúa como ACTIVA-Exito. Redacta un plan de recuperación para un cliente clave."
    },
    channels: {
        id: 'channels', canvasTitle: 'Canales', title: 'Dpto. de Marketing',
        ceoObjective: "Optimización del coste de adquisición < 30€ y escalado de canales.",
        icon: Globe, theme: 'orange',
        gradient: 'from-orange-800/20 via-slate-900/50 to-transparent',
        accent: 'text-orange-300', border: 'border-orange-700/30',
        iconBg: 'bg-orange-900/30', iconColor: 'text-orange-200', glow: 'shadow-orange-900/20',
        description: 'Generación de demanda, marketing digital, comercio electrónico y posicionamiento de marca.',
        prompt: "Actúa como ACTIVA-Marketing. Desarrolla una estrategia de lanzamiento."
    },
    customer_segments: {
        id: 'customer_segments', canvasTitle: 'Segmentos de Clientes', title: 'PYME Española B2B',
        ceoObjective: "Ser la columna vertebral tecnológica de los sectores HORECA, Salud y Legal.",
        icon: Briefcase, theme: 'teal',
        gradient: 'from-teal-800/20 via-slate-900/50 to-transparent',
        accent: 'text-teal-300', border: 'border-teal-700/30',
        iconBg: 'bg-teal-900/30', iconColor: 'text-teal-200', glow: 'shadow-teal-900/20',
        description: 'Profesionales hartos del alquiler de software. Buscan control total.',
        prompt: "Actúa como ACTIVA-Analisis. Realiza un análisis PESTEL abreviado."
    },
    cost_structure: {
        id: 'cost_structure', canvasTitle: 'Estructura de Costes', title: 'Dpto. Financiero',
        ceoObjective: "Sostenibilidad financiera con EBITDA > 25% y optimización fiscal.",
        icon: Scale, theme: 'emerald',
        gradient: 'from-emerald-800/20 via-slate-900/50 to-transparent',
        accent: 'text-emerald-300', border: 'border-emerald-700/30',
        iconBg: 'bg-emerald-900/30', iconColor: 'text-emerald-200', glow: 'shadow-emerald-900/20',
        description: 'Planificación financiera, contabilidad analítica y servicios generales.',
        prompt: "Actúa como ACTIVA-Finanzas. Elabora un informe ejecutivo sobre desviación presupuestaria."
    },
    revenue_streams: {
        id: 'revenue_streams', canvasTitle: 'Fuentes de Ingresos', title: 'Dpto. Comercial',
        ceoObjective: "Alcanzar 7M€ de facturación anual con un crecimiento del 25%.",
        icon: TrendingUp, theme: 'red',
        gradient: 'from-red-800/20 via-slate-900/50 to-transparent',
        accent: 'text-red-300', border: 'border-red-700/30',
        iconBg: 'bg-red-900/30', iconColor: 'text-red-200', glow: 'shadow-red-900/20',
        description: 'Fuerza de ventas de alto rendimiento para cierre y expansión.',
        prompt: "Actúa como ACTIVA-Cierre. Prepara una propuesta comercial de alto valor."
    },
};
