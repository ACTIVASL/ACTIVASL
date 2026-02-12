import { forwardRef } from 'react';

export const MmseTemplate = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="w-[210mm] min-h-[297mm] bg-white p-[20mm] mx-auto text-slate-900 print:w-full print:h-full print:p-[20mm] print:mx-0"
    >
      {/* Header */}
      <header className="flex justify-between items-center border-b-2 border-slate-900 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight">DMA</h1>
          <p className="text-sm font-bold text-slate-500">Digital Maturity Assessment</p>
        </div>
        <div className="opacity-50 grayscale">
          <h2 className="text-xl font-bold">ACTIVA DIGITAL</h2>
        </div>
      </header>

      {/* Client Info Block */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="border-b border-slate-300 pb-2">
          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">
            Empresa / Cliente
          </span>
          <div className="h-6"></div>
        </div>
        <div className="border-b border-slate-300 pb-2">
          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Fecha Audit</span>
          <div className="h-6"></div>
        </div>
        <div className="border-b border-slate-300 pb-2">
          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">
            Sector / Industria
          </span>
          <div className="h-6"></div>
        </div>
        <div className="border-b border-slate-300 pb-2">
          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">
            Consultor Lead
          </span>
          <div className="h-6"></div>
        </div>
      </div>

      {/* Audit Content */}
      <div className="space-y-6">
        {/* 1. Estrategia */}
        <section>
          <h3 className="font-bold text-lg bg-slate-100 p-2 border-l-4 border-slate-900 mb-4 flex justify-between">
            1. ESTRATEGIA Y CULTURA <span>(Max. 10)</span>
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
              <span>¿Existe una estrategia digital definida?</span>{' '}
              <span className="w-12 h-6 border border-slate-400"></span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
              <span>¿Liderazgo comprometido con la innovación?</span>{' '}
              <span className="w-12 h-6 border border-slate-400"></span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
              <span>¿Agilidad en la toma de decisiones?</span>{' '}
              <span className="w-12 h-6 border border-slate-400"></span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
              <span>¿Cultura de datos (Data-Driven)?</span> <span className="w-12 h-6 border border-slate-400"></span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
              <span>¿Colaboración cross-funcional?</span>{' '}
              <span className="w-12 h-6 border border-slate-400"></span>
            </div>
          </div>
        </section>

        {/* 2. Experiencia */}
        <section>
          <h3 className="font-bold text-lg bg-slate-100 p-2 border-l-4 border-slate-900 mb-4 flex justify-between">
            2. EXPERIENCIA DE CLIENTE (CX) <span>(Max. 5)</span>
          </h3>
          <p className="text-sm mb-2 italic">
            Evaluar puntos de contacto digitales, personalización y soporte omnicanal.
          </p>
          <div className="flex justify-end">
            <span className="w-12 h-8 border border-slate-800 flex items-center justify-center font-bold text-xl">
              /5
            </span>
          </div>
        </section>

        {/* 3. Operaciones */}
        <section>
          <h3 className="font-bold text-lg bg-slate-100 p-2 border-l-4 border-slate-900 mb-4 flex justify-between">
            3. OPERACIONES Y PROCESOS <span>(Max. 5)</span>
          </h3>
          <p className="text-sm mb-2 italic">
            Automatización, integración de sistemas (ERP/CRM) y eficiencia operativa.
          </p>
          <div className="flex justify-end">
            <span className="w-12 h-8 border border-slate-800 flex items-center justify-center font-bold text-xl">
              /5
            </span>
          </div>
        </section>

        {/* 4. Tecnología */}
        <section>
          <h3 className="font-bold text-lg bg-slate-100 p-2 border-l-4 border-slate-900 mb-4 flex justify-between">
            4. TECNOLOGÍA Y DATOS <span>(Max. 10)</span>
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
              <span>Infraestructura Cloud (Scalability)</span>{' '}
              <span className="w-12 h-6 border border-slate-400"></span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
              <span>Ciberseguridad y Compliance</span>{' '}
              <span className="w-12 h-6 border border-slate-400"></span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
              <span>Arquitectura Software Moderna</span>{' '}
              <span className="w-12 h-6 border border-slate-400"></span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
              <span>Calidad del Dato y Gobernanza</span>{' '}
              <span className="w-12 h-6 border border-slate-400"></span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
              <span>Uso de IA / Machine Learning</span>{' '}
              <span className="w-12 h-6 border border-slate-400"></span>
            </div>
          </div>
        </section>
      </div>

      {/* Total */}
      <div className="mt-8 border-t-4 border-slate-900 pt-4 flex justify-end items-center gap-4">
        <span className="text-2xl font-black uppercase">Score Digital:</span>
        <div className="w-32 h-16 border-2 border-slate-900 flex items-center justify-center text-3xl font-black bg-slate-50">
          /30
        </div>
      </div>

      <div className="mt-8 text-center text-[10px] text-slate-400 uppercase">
        25-30: Líder Digital | 18-24: Competente | 10-17: Iniciante | 0-9: Analógico
      </div>
    </div>
  );
});

MmseTemplate.displayName = 'MmseTemplate';
