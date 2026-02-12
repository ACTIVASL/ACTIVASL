import { forwardRef } from 'react';

export const MocaTemplate = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="w-[210mm] min-h-[297mm] bg-white p-[20mm] mx-auto text-slate-900 print:w-full print:h-full print:p-[20mm] print:mx-0"
    >
      {/* Header */}
      <header className="flex justify-between items-center border-b-2 border-slate-900 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight">TSA</h1>
          <p className="text-sm font-bold text-slate-500">Tech Stack Audit & Review</p>
        </div>
        <div className="opacity-50 grayscale">
          <h2 className="text-xl font-bold">ACTIVA DIGITAL</h2>
        </div>
      </header>

      {/* Project Info Block */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="border-b border-slate-300 pb-2">
          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">
            Proyecto / App
          </span>
          <div className="h-6"></div>
        </div>
        <div className="border-b border-slate-300 pb-2">
          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Versión</span>
          <div className="h-6"></div>
        </div>
      </div>

      {/* Audit Sections */}
      <div className="space-y-6">
        {/* 1. Frontend */}
        <section className="bg-slate-50 p-4 border border-slate-200">
          <h3 className="font-bold text-lg border-b border-slate-300 pb-2 mb-4 uppercase">
            1. Frontend Architecture
          </h3>
          <div className="grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> React / Frameworks
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> State Management
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> CSS / Styling Strategy
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> Performance (Lighthouse)
            </div>
          </div>
          <div className="mt-4 border-t border-slate-200 pt-2">
            <span className="text-xs font-bold uppercase text-slate-500">Observaciones:</span>
            <div className="h-12 border-b border-dotted border-slate-300"></div>
          </div>
        </section>

        {/* 2. Backend */}
        <section className="bg-slate-50 p-4 border border-slate-200">
          <h3 className="font-bold text-lg border-b border-slate-300 pb-2 mb-4 uppercase">
            2. Backend & API
          </h3>
          <div className="grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> REST / GraphQL
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> Auth & Security
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> Database Schema
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> Scalability / Microservices
            </div>
          </div>
          <div className="mt-4 border-t border-slate-200 pt-2">
            <span className="text-xs font-bold uppercase text-slate-500">Observaciones:</span>
            <div className="h-12 border-b border-dotted border-slate-300"></div>
          </div>
        </section>

        {/* 3. DevOps */}
        <section className="bg-slate-50 p-4 border border-slate-200">
          <h3 className="font-bold text-lg border-b border-slate-300 pb-2 mb-4 uppercase">
            3. DevOps & CI/CD
          </h3>
          <div className="grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> Pipeline Automation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> Containerization (Docker)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> Cloud Infrastructure
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-slate-400"></div> Monitoring & Logs
            </div>
          </div>
          <div className="mt-4 border-t border-slate-200 pt-2">
            <span className="text-xs font-bold uppercase text-slate-500">Observaciones:</span>
            <div className="h-12 border-b border-dotted border-slate-300"></div>
          </div>
        </section>

        {/* 4. Code Quality */}
        <section className="border-t-2 border-slate-900 pt-6">
          <h3 className="font-bold text-sm uppercase mb-4">Recomendaciones Finales</h3>
          <div className="bg-[linear-gradient(transparent_1.9rem,#e2e8f0_2rem)] bg-[length:100%_2rem] leading-[2rem] h-40 border border-slate-200"></div>
        </section>
      </div>

      <div className="mt-8 flex justify-between items-end">
        <div className="text-xs text-slate-400 uppercase font-bold">
          Activa Digital Tech Audit © 2026
        </div>
        <div className="text-right">
          <div className="w-40 border-b-2 border-slate-900 mb-2"></div>
          <span className="text-xs font-bold uppercase">Firma CTO / Lead Arch.</span>
        </div>
      </div>

    </div>
  );
});

MocaTemplate.displayName = 'MocaTemplate';
