import { mockAgents } from '../../data/mockAgents';
import { AgentNodeCard } from '../../components/ui/AgentNodeCard';
import { useAgentSimulation } from '../../hooks/controllers/useAgentSimulation';
import { AgentCockpit } from './AgentCockpit';
import { LibrarySection } from './LibrarySection';
import { AgentNodeProfile } from '../../lib/types';
import React, { useState } from 'react';
import { DepartmentSection } from '../../components/layouts/DepartmentSection';
import { OnyxCard } from '../../components/ui/OnyxCard';
import {
  Globe, Cpu, TrendingUp, Users, Activity,
  Database, ShieldCheck, Zap, Server, Code,
  Wallet, BarChart3
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  // SIMULATION ENGINE: "It's alive!"
  const { agents } = useAgentSimulation(mockAgents);
  const [selectedAgent, setSelectedAgent] = useState<AgentNodeProfile | null>(null);

  return (
    <div className="max-w-[1600px] mx-auto">

      {/* 1. STRATEGIC CANVAS (THE BRIDGE) */}
      <DepartmentSection
        id="strategy"
        title="Command Center"
        subtitle="Global Strategic Overview & KPIs"
        icon={Globe}
        color="blue"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* KPI CARDS */}
          <OnyxCard title="Monthly Recurring Revenue" icon={Wallet} active>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold text-white tracking-tight">€42,500</span>
              <span className="text-sm font-bold text-emerald-400 flex items-center gap-0.5"><TrendingUp size={14} /> +12%</span>
            </div>
            <div className="h-1 w-full bg-slate-800 mt-4 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[75%]" />
            </div>
            <p className="text-[10px] text-slate-500 mt-2 font-mono">VS TARGET: €50,000</p>
          </OnyxCard>

          <OnyxCard title="Active Agent Nodes" icon={Cpu}>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold text-white tracking-tight">{agents.length}</span>
              <span className="text-sm font-bold text-blue-400 font-mono">NODES</span>
            </div>
            <div className="flex gap-2 mt-4 text-[10px] font-mono text-slate-400">
              <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">
                {agents.filter(a => a.human.status !== 'OFFLINE').length} ONLINE
              </span>
              <span className="px-1.5 py-0.5 bg-purple-500/10 text-purple-400 rounded border border-purple-500/20">
                {agents.filter(a => a.human.status === 'DEEP_WORK').length} DEEP WORK
              </span>
            </div>
          </OnyxCard>

          <OnyxCard title="Token Burn Rate" icon={Zap}>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold text-white tracking-tight">1.2M</span>
              <span className="text-sm font-bold text-slate-400 font-mono">TOKENS/DAY</span>
            </div>
            <p className="text-sm text-slate-400 mt-1">Gemini 3.0 Pro Enterprise</p>
            <p className="text-[10px] text-emerald-400 mt-2 font-mono">EFFICIENCY: 98%</p>
          </OnyxCard>

          <OnyxCard title="System Health" icon={Activity}>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold text-emerald-400 tracking-tight">99.9%</span>
              <span className="text-sm font-bold text-slate-400">UPTIME</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span className="text-xs text-slate-300">Google Cloud Armor: ACTIVE</span>
            </div>
          </OnyxCard>
        </div>

        {/* BIG CHART AREA */}
        <OnyxCard className="h-[300px] flex items-center justify-center border-dashed border-slate-800">
          <div className="text-center opacity-30">
            <BarChart3 size={48} className="mx-auto mb-2 text-slate-500" />
            <p className="text-sm font-mono tracking-widest text-slate-400">STRATEGIC_VIEWPORT::CANVAS_RENDERER</p>
          </div>
        </OnyxCard>
      </DepartmentSection>

      {/* 2. ENGINEERING DECK */}
      <DepartmentSection
        id="engineering"
        title="Engineering Division"
        subtitle="Infrastructure, Development & AI Ops"
        icon={Code}
        color="indigo"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OnyxCard title="Recent Deployments" icon={Server}>
            <ul className="space-y-3 mt-2">
              <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-slate-300">v4.2.0 Core Update</span>
                <span className="text-[10px] font-mono text-emerald-400">SUCCESS</span>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-slate-300">Auth Service Patch</span>
                <span className="text-[10px] font-mono text-emerald-400">SUCCESS</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="text-slate-300">Vector DB Migration</span>
                <span className="text-[10px] font-mono text-amber-400">PENDING</span>
              </li>
            </ul>
          </OnyxCard>

          <OnyxCard title="Active Repositories" icon={Database} className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                <h4 className="text-xs font-bold text-blue-400 mb-1">monorepo-activa-sl</h4>
                <p className="text-xs text-slate-500">Last commit: 12m ago by <span className="text-white">@architect_ai</span></p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                <h4 className="text-xs font-bold text-indigo-400 mb-1">engine-auth</h4>
                <p className="text-xs text-slate-500">Last commit: 2h ago by <span className="text-white">@security_bot</span></p>
              </div>
            </div>
          </OnyxCard>
        </div>
      </DepartmentSection>

      {/* 3. OPERATIONS & HR (Agent Network) */}
      <DepartmentSection
        id="operations"
        title="Operations & Agents"
        subtitle="Hybrid Workforce Management"
        icon={Users}
        color="emerald"
        status="OPTIMAL"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent) => (
            <AgentNodeCard
              key={agent.id}
              node={agent}
              onClick={() => setSelectedAgent(agent)}
            />
          ))}
        </div>
      </DepartmentSection>

      {/* 4. THE LIBRARY (Knowledge Core) */}
      <LibrarySection />

      {/* AGENT COCKPIT MODAL */}
      {selectedAgent && (
        <AgentCockpit
          agent={agents.find(a => a.id === selectedAgent.id) || selectedAgent}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </div>
  );
};
