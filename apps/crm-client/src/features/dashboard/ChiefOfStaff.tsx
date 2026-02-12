import { useState, useEffect, useRef } from 'react';
import {
    Mic, Send, Bot, Sparkles, X, ChevronRight,
    Activity, ShieldAlert, TrendingUp, Users,
    Terminal, ShieldCheck, type LucideIcon
} from 'lucide-react';
import { ActivaBrandLogo } from '../../components/ui/ActivaBrandLogo';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    isThinking?: boolean;
    actions?: SuggestedAction[];
}

interface SuggestedAction {
    id: string;
    label: string;
    type: 'navigation' | 'execution' | 'analysis';
    target?: string;
    icon?: LucideIcon;
}

export const ChiefOfStaff = ({ onClose }: { onClose: () => void }) => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'init',
            role: 'assistant',
            content: 'Sistema Nervioso Central activado. Monitorizando 9 departamentos y 100 nodos activos. ¿Cuál es su orden, Director?',
            timestamp: new Date(),
        }
    ]);
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsThinking(true);

        // SIMULATE GEMINI 1.5 PRO REASONING
        setTimeout(() => {
            const response = generateMockResponse(userMsg.content);
            setIsThinking(false);
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: response.text,
                timestamp: new Date(),
                actions: response.actions
            }]);
        }, 2500);
    };

    const generateMockResponse = (query: string): { text: string, actions: SuggestedAction[] } => {
        const q = query.toLowerCase();

        if (q.includes('riesgo') || q.includes('alerta')) {
            return {
                text: "He analizado los vectores de amenaza actuales. El Agente 'ACTIVA-Legal' reporta un riesgo regulatorio crítico (probabilidad 85%) relacionado con la nueva Ley de IA de la UE. Además, 'ACTIVA-Nube' detecta una latencia inusual en el clúster de producción.",
                actions: [
                    { id: '1', label: 'Auditar Agente Legal', type: 'analysis', icon: ShieldAlert },
                    { id: '2', label: 'Escalar Infraestructura', type: 'execution', icon: Activity }
                ]
            };
        }

        if (q.includes('ventas') || q.includes('ingresos') || q.includes('dinero')) {
            return {
                text: "El flujo de caja es estable. 'ACTIVA-Ops' ha cerrado 3 acuerdos marco hoy (+45k€). Sin embargo, la tasa de conversión en 'ACTIVA-Captación' ha caído un 2% en las últimas 4 horas. Recomiendo intervención.",
                actions: [
                    { id: '3', label: 'Ver Informe ROI', type: 'navigation', icon: TrendingUp },
                    { id: '4', label: 'Activar Campaña Flash', type: 'execution', icon: Sparkles }
                ]
            };
        }

        if (q.includes('equipo') || q.includes('gente') || q.includes('rrhh')) {
            return {
                text: "La moral del equipo ('ACTIVA-Talento') está en 78/100 (Alta). Detecto sobrecarga en el equipo de Desarrollo (Sprints al 110% de capacidad). Se sugiere aprobar 2 contrataciones temporales o reasignar tickets de deuda técnica.",
                actions: [
                    { id: '5', label: 'Revisar Carga Laboral', type: 'analysis', icon: Users },
                    { id: '6', label: 'Aprobar Contratación', type: 'execution', icon: ShieldCheck }
                ]
            };
        }

        return {
            text: "Entendido. Orquestando agentes para procesar su solicitud. Consultando 14 Notebooks y 3 Bases de Datos en tiempo real...",
            actions: [
                { id: '7', label: 'Ver Estado del Sistema', type: 'navigation', icon: Terminal }
            ]
        };
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center p-0 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="w-full max-w-3xl bg-[#0B1121] sm:rounded-3xl border-t sm:border border-indigo-500/30 flex flex-col shadow-2xl h-[85vh] sm:h-[800px] relative overflow-hidden ring-1 ring-white/10">

                {/* BACKGROUND EFFECTS */}
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0B1121] to-transparent pointer-events-none" />

                {/* HEADER */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0B1121]/80 backdrop-blur-md relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 p-1.5 bg-slate-900 rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                            <ActivaBrandLogo />
                        </div>
                        <div>
                            <h2 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                                The Architect <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                            </h2>
                            <p className="text-[10px] text-slate-400 font-mono">Gemini 1.5 Pro • Orchestrator Mode</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* CHAT AREA */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 premium-scrollbar scroll-smooth">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-in slide-in-from-bottom-2 duration-300`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${msg.role === 'user' ? 'bg-indigo-600 border-indigo-400' : 'bg-slate-800 border-slate-700'}`}>
                                {msg.role === 'user' ? <Terminal className="w-4 h-4 text-white" /> : <Bot className="w-5 h-5 text-emerald-400" />}
                            </div>
                            <div className={`flex flex-col gap-2 max-w-[85%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`px-5 py-3.5 rounded-2xl text-sm font-medium leading-relaxed shadow-lg border ${msg.role === 'user' ? 'bg-indigo-600 text-white border-indigo-500 rounded-tr-none' : 'bg-slate-900/80 text-slate-200 border-white/10 rounded-tl-none'}`}>
                                    {msg.content}
                                </div>
                                {msg.actions && (
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {msg.actions.map((action) => {
                                            const Icon = action.icon;
                                            return (
                                                <button key={action.id} className="flex items-center gap-2 px-4 py-2 bg-emerald-900/20 hover:bg-emerald-900/40 border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl text-emerald-400 text-xs font-bold transition-all hover:scale-105 active:scale-95 group">
                                                    {Icon && <Icon className="w-3.5 h-3.5 group-hover:animate-bounce" />}
                                                    {action.label}
                                                    <ChevronRight className="w-3 h-3 opacity-50 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                                <span className="text-[10px] text-slate-600 font-mono px-1">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                        </div>
                    ))}

                    {isThinking && (
                        <div className="flex gap-4 animate-in fade-in duration-300">
                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                <Bot className="w-5 h-5 text-emerald-400 animate-pulse" />
                            </div>
                            <div className="bg-slate-900/50 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* INPUT AREA */}
                <div className="p-4 sm:p-6 bg-[#0B1121] border-t border-white/5 relative z-20">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur"></div>
                        <div className="relative flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl p-2 pr-2 shadow-xl">
                            <button className="p-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border-r border-white/5">
                                <Mic className="w-5 h-5" />
                            </button>
                            <input
                                type="text"
                                placeholder="Interroga a tu Sistema Operativo..."
                                className="flex-1 bg-transparent text-slate-200 placeholder:text-slate-600 text-sm font-medium px-2 py-1 outline-none"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                autoFocus
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isThinking}
                                className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]"
                            >
                                {isThinking ? <Activity className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                    <div className="text-[10px] text-center text-slate-600 mt-3 font-mono flex items-center justify-center gap-4">
                        <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-emerald-500" /> Private Cloud (Vertex AI)</span>
                        <span className="flex items-center gap-1.5"><Terminal className="w-3 h-3 text-indigo-500" /> Conectado a 100 Nodos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
