import { Users, Calendar, Activity, TrendingUp } from 'lucide-react';


export const StatsCards = () => {
    // Mock data for restoration
    const stats = {
        activePatients: 142,
        sessionsToday: 8,
        pendingReports: 3,
        occupancy: '85%'
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* PACIENTES ACTIVOS */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Users size={24} />
                </div>
                <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                        Pacientes Activos
                    </p>
                    <h3 className="text-2xl font-black text-slate-800">{stats.activePatients}</h3>
                </div>
            </div>

            {/* SESIONES HOY */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Calendar size={24} />
                </div>
                <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                        Sesiones Hoy
                    </p>
                    <h3 className="text-2xl font-black text-slate-800">{stats.sessionsToday}</h3>
                </div>
            </div>

            {/* INFORMES PENDIENTES */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                    <Activity size={24} />
                </div>
                <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                        Informes Pendientes
                    </p>
                    <h3 className="text-2xl font-black text-slate-800">{stats.pendingReports}</h3>
                </div>
            </div>

            {/* OCUPACIÓN */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                    <TrendingUp size={24} />
                </div>
                <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                        Ocupación Sala
                    </p>
                    <h3 className="text-2xl font-black text-slate-800">{stats.occupancy}</h3>
                </div>
            </div>
        </div>
    );
};
