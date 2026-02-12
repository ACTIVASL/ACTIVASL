import { forwardRef } from 'react';

export const GdsTemplate = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="w-[210mm] min-h-[297mm] bg-white p-[20mm] mx-auto text-slate-900 print:w-full print:h-full print:p-[20mm] print:mx-0"
    >
      {/* Header */}
      <header className="flex justify-between items-center border-b-2 border-slate-900 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight">TSS</h1>
          <p className="text-sm font-bold text-slate-500">Team Satisfaction & Culture Survey</p>
        </div>
        <div className="opacity-50 grayscale">
          <h2 className="text-xl font-bold">ACTIVA DIGITAL</h2>
        </div>
      </header>

      <p className="mb-8 text-sm italic text-slate-600">
        Esta encuesta es anónima y confidencial. Su objetivo es mejorar el ambiente de trabajo y la productividad del equipo de desarrollo.
      </p>

      {/* Questions Block */}
      <div className="space-y-0 text-sm">
        {[
          '1. ¿Estás satisfecho/a con las herramientas de trabajo actuales?',
          '2. ¿Sientes que tus opiniones son valoradas en las reuniones?',
          '3. ¿Consideras que el ritmo de trabajo (Sprints) es sostenible?',
          '4. ¿Tienes oportunidades de aprendizaje y crecimiento técnico?',
          '5. ¿Te sientes apoyado/a por tu Tech Lead / Manager?',
          '6. ¿El proceso de Code Review es constructivo y útil?',
          '7. ¿Están claros los objetivos del proyecto?',
          '8. ¿Te sientes motivado/a con los desafíos técnicos actuales?',
          '9. ¿Existe un buen equilibrio vida-trabajo?',
          '10. ¿Recomendarías trabajar aquí a un colega?',
          '11. ¿La comunicación en el equipo es efectiva?',
          '12. ¿Los despliegues a producción generan estrés excesivo?',
          '13. ¿Te sientes compensado/a justamente por tu trabajo?',
          '14. ¿La deuda técnica está bajo control?',
          '15. ¿Te sientes orgulloso/a del producto que estamos construyendo?',
        ].map((question, i) => (
          <div
            key={i}
            className={`flex justify-between items-center py-2 border-b border-dotted border-slate-200 ${i % 2 === 0 ? 'bg-slate-50/50' : ''
              }`}
          >
            <span className="pr-4">{question}</span>
            <div className="flex gap-4 font-bold text-xs">
              <span className="w-12 text-center cursor-pointer hover:underline">SÍ</span>
              <span className="w-12 text-center cursor-pointer hover:underline">NO</span>
            </div>
          </div>
        ))}
      </div>

      {/* Score */}
      <div className="mt-12 border-t-4 border-slate-900 pt-6 flex justify-between items-end">
        <div className="text-xs text-slate-500 max-w-sm">
          <strong>Interpretación:</strong> Mayor número de respuestas positivas indica una cultura de ingeniería saludable.
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xl font-black uppercase">Net Promoter Score (eNPS):</span>
          <div className="w-24 h-12 border-2 border-slate-900 flex items-center justify-center text-xl font-black bg-slate-50">
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-sm font-bold uppercase mb-2">Comentarios Abiertos (Opcional):</h3>
        <div className="w-full h-32 border border-slate-300 rounded p-2 bg-[linear-gradient(transparent_1.9rem,#f0f0f0_2rem)] bg-[length:100%_2rem] leading-[2rem]"></div>
      </div>

    </div>
  );
});

GdsTemplate.displayName = 'GdsTemplate';
