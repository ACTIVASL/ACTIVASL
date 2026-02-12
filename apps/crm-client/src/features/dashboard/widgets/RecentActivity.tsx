import { FileText, CalendarCheck, FilePlus } from 'lucide-react';

export const RecentActivity = () => {
    const activities = [
        { icon: FileText, color: 'text-blue-500 bg-blue-50', text: 'Informe de evolución creado para Ana García', time: 'Hace 10 min' },
        { icon: CalendarCheck, color: 'text-emerald-500 bg-emerald-50', text: 'Sesión completada: Grupo Infantil', time: 'Hace 45 min' },
        { icon: FilePlus, color: 'text-amber-500 bg-amber-50', text: 'Nuevo paciente registrado: Pedro Sánchez', time: 'Hace 2 horas' },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full">
            <h3 className="font-bold text-slate-800 text-lg mb-6">Actividad Reciente</h3>
            <div className="relative border-l-2 border-slate-100 ml-3 space-y-8 pb-2">
                {activities.map((item, i) => (
                    <div key={i} className="relative pl-8">
                        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white ring-1 ring-slate-200 bg-slate-50`}></div>
                        <div className="flex items-start gap-3">
                            <div className={`mt-0.5 p-1.5 rounded-lg ${item.color}`}>
                                <item.icon size={14} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-700 leading-tight">{item.text}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">{item.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
