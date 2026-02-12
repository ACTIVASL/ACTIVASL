import { User } from 'lucide-react';

export const DailyAgendaWidget = () => {
    const sessions = [
        { time: '09:00', patient: 'Ana García', type: 'Individual', room: 'Sala 1' },
        { time: '10:30', patient: 'Grupo Infantil', type: 'Grupal', room: 'Sala Grande' },
        { time: '12:00', patient: 'Carlos Ruiz', type: 'Evaluación', room: 'Sala 2' },
        { time: '16:00', patient: 'María López', type: 'Individual', room: 'Sala 1' },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800 text-lg">Agenda del Día</h3>
                <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-lg">HOY</span>
            </div>

            <div className="space-y-4">
                {sessions.map((session, i) => (
                    <div key={i} className="flex items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-16 flex flex-col items-center justify-center border-r border-slate-100 pr-4 mr-4">
                            <span className="font-bold text-slate-800">{session.time}</span>
                            <span className="text-[10px] text-slate-400 uppercase font-bold">AM</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 flex items-center gap-2">
                                <User size={14} className="text-slate-400" />
                                {session.patient}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${session.type === 'Individual' ? 'bg-blue-400' : 'bg-purple-400'}`}></span>
                                {session.type} • {session.room}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-all border border-dashed border-slate-200">
                Ver Agenda Completa
            </button>
        </div>
    );
};
