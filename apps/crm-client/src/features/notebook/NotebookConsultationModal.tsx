import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    X, FileText,
    Bot, Clock, CheckCircle2,
    AlertTriangle, Send,
    Sparkles, BookOpen,
    Mic
} from 'lucide-react';

interface NotebookConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
    employeeName: string;
    employeeRole: string;
    agentName: string;
    notebookUrl?: string; // Kept for reference or backup
}

interface Message {
    id: string;
    sender: 'user' | 'gemini';
    text: string;
    timestamp: Date;
    type?: 'text' | 'summary' | 'alert' | 'action';
}

export const NotebookConsultationModal: React.FC<NotebookConsultationModalProps> = ({
    isOpen,
    onClose,
    employeeName,
    employeeRole,
    agentName
}) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial Greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setIsTyping(true);
            setTimeout(() => {
                setMessages([
                    {
                        id: 'welcome',
                        sender: 'gemini',
                        text: `Conectado al Cuaderno Personal de ${employeeName} (${employeeRole}). He procesado las últimas 24h de actividad. ¿Qué necesitas saber?`,
                        timestamp: new Date()
                    }
                ]);
                setIsTyping(false);
            }, 1000);
        }
    }, [isOpen, employeeName, employeeRole, messages.length]);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newUserMsg: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: text,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInputValue("");
        setIsTyping(true);

        // POLLY: Simulated Gemini Response Engine
        setTimeout(() => {
            let responseText = "";
            let type: Message['type'] = 'text';

            if (text.toLowerCase().includes("resumen") || text.toLowerCase().includes("hoy")) {
                responseText = `Resumen de actividad para ${employeeName}:\n\n• 09:00: Reunión de coordinación (Audio procesado).\n• 11:30: Incidencia en Calle Pez resuelta.\n• 14:00: Actualización de inventario enviada.\n\nEstatus: Productivo. Sin bloqueos.`;
                type = 'summary';
            } else if (text.toLowerCase().includes("alerta") || text.toLowerCase().includes("problema")) {
                responseText = "No se han detectado alertas críticas en las últimas 48 horas. El tono de las comunicaciones es positivo.";
                type = 'alert';
            } else {
                responseText = `He consultado el cuaderno. Basado en los últimos registros, ${employeeName} está trabajando en las prioridades asignadas. ¿Quieres ver los documentos recientes?`;
            }

            const newAiMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'gemini',
                text: responseText,
                timestamp: new Date(),
                type
            };
            setMessages(prev => [...prev, newAiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const QuickAction = ({ icon: Icon, label, query }: { icon: React.ElementType, label: string, query: string }) => (
        <button
            onClick={() => handleSendMessage(query)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 hover:text-white border border-white/5 rounded-xl transition-all text-xs font-bold text-slate-400 group"
        >
            <Icon className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            {label}
        </button>
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#0f172a] w-full max-w-2xl h-[80vh] rounded-3xl shadow-2xl border border-white/10 flex flex-col relative z-10 overflow-hidden ring-1 ring-white/10"
            >
                {/* HEADER */}
                <div className="px-6 py-4 bg-slate-900 border-b border-white/5 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-indigo-400" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                                {agentName}
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE
                                </span>
                            </h3>
                            <p className="text-xs text-slate-400">Consultando Cuaderno de: <span className="text-slate-300">{employeeName}</span></p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* VISUALIZER (Top Layer) */}
                <div className="h-32 bg-slate-950 border-b border-white/5 relative overflow-hidden shrink-0 group cursor-pointer">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex gap-1 items-end h-16 w-full justify-center opacity-80">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 bg-indigo-500 rounded-full"
                                    animate={{
                                        height: [10, Math.random() * 60 + 20, 10],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: i * 0.05,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-3 left-6 flex items-center gap-2 text-[10px] font-mono text-indigo-400/70">
                        <CheckCircle2 className="w-3 h-3" />
                        SINCRONIZADO CON NOTEBOOKLM
                    </div>
                    <div className="absolute bottom-3 right-6 flex items-center gap-2 text-[10px] font-bold text-white/50 group-hover:text-white transition-colors">
                        <BookOpen className="w-3 h-3" />
                        VER FUENTES ORIGINALES
                    </div>
                </div>

                {/* CHAT AREA */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-900/50">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`first-letter:max-w-[80%] rounded-2xl p-4 ${msg.sender === 'user'
                                ? 'bg-indigo-600 text-white rounded-tr-none'
                                : 'bg-slate-800 text-slate-200 border border-white/5 rounded-tl-none'
                                }`}>
                                {msg.type === 'summary' && (
                                    <div className="mb-2 pb-2 border-b border-white/10 text-xs font-bold text-indigo-300 flex items-center gap-2">
                                        <Sparkles className="w-3 h-3" /> RESUMEN EJECUTIVO
                                    </div>
                                )}
                                <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                                <span className="text-[9px] opacity-50 mt-2 block text-right">
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-slate-800 rounded-2xl p-4 rounded-tl-none border border-white/5 flex gap-1">
                                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* INPUT AREA */}
                <div className="p-4 bg-slate-900 border-t border-white/5 shrink-0 space-y-4">

                    {/* QUICK ACTIONS */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        <QuickAction icon={Clock} label="Resumen del Día" query="Dame un resumen de la actividad de hoy." />
                        <QuickAction icon={AlertTriangle} label="Ver Alertas" query="¿Hay alguna alerta o problema bloqueante?" />
                        <QuickAction icon={Mic} label="Últimos Audios" query="Transcribe los últimos mensajes de voz." />
                        <QuickAction icon={FileText} label="Documentos" query="¿Qué documentos se han generado hoy?" />
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                            placeholder="Pregunta al cuaderno..."
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-4 pr-12 py-4 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                        />
                        <button
                            onClick={() => handleSendMessage(inputValue)}
                            disabled={!inputValue.trim()}
                            className="absolute right-2 top-2 p-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white rounded-lg transition-colors"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
