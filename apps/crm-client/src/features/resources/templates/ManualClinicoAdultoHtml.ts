export const MANUAL_CLINICO_ADULTO_HTML = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manual de Proyecto Activa Digital - Enterprise (Completo)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* --- ESTILOS GENERALES Y DE IMPRESIÓN --- */
        body {
            font-family: 'Open Sans', sans-serif;
            background-color: #0f172a; /* Slate 900 */
            margin: 0;
            padding: 40px 0 0 0;
        }
        
        h1, h2, h3, h4, .brand-font { font-family: 'Montserrat', sans-serif; }
        
        /* SISTEMA DE COLOR CORPORATE */
        .gradient-body { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); } /* Blue */
        .text-body { color: #1d4ed8; }
        .border-body { border-color: #1d4ed8; }
        .bg-body-soft { background-color: #eff6ff; }
        
        .gradient-mind { background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); } /* Sky */
        .text-mind { color: #0284c7; }
        .border-mind { border-color: #0284c7; }
        .bg-mind-soft { background-color: #e0f2fe; }
        
        .gradient-heart { background: linear-gradient(135deg, #6366f1 0%, #4338ca 100%); } /* Indigo */
        .text-heart { color: #4338ca; }
        .border-heart { border-color: #4338ca; }
        .bg-heart-soft { background-color: #eef2ff; }

        .text-dark { color: #0f172a; }
        .bg-dark { background-color: #0f172a; }

        /* PÁGINA A4 */
        .page-a4 {
            width: 210mm;
            min-height: 297mm;
            margin: 40px auto;
            background: white;
            box-shadow: 0 15px 35px rgba(0,0,0,0.5);
            position: relative;
            padding: 20mm;
            overflow: hidden;
            page-break-after: always;
            box-sizing: border-box;
        }

        .input-line {
            border-bottom: 1px solid #ccc;
            min-height: 32px;
            margin-bottom: 8px;
            width: 100%;
            display: inline-block;
        }
        
        .checkbox-box {
            width: 16px; height: 16px; border: 1px solid #333;
            display: inline-block; margin-right: 6px; vertical-align: middle;
            border-radius: 3px;
        }

        .watermark {
            position: absolute; top: 50%; left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 80px; font-weight: 900; color: rgba(0,0,0,0.04);
            pointer-events: none; z-index: 0; white-space: nowrap;
        }

        .page-number { position: absolute; bottom: 15mm; right: 20mm; font-size: 10px; color: #999; }
        .lined-paper { background-image: linear-gradient(#e5e7eb 1px, transparent 1px); background-size: 100% 2.5rem; line-height: 2.5rem; }

        @media print {
            body { background: white; padding: 0; }
            .page-a4 {
                width: 100%; height: 297mm; margin: 0;
                box-shadow: none; border: none; page-break-after: always;
            }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
    </style>
</head>
<body>

    <!-- PÁGINA 1: PORTADA CORPORATE -->
    <div class="page-a4 flex flex-col justify-between items-center text-center p-0" style="padding: 0;">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-dark rounded-b-[50%] z-0"></div>
        <div class="relative z-10 w-full pt-20 text-white">
            <h3 class="tracking-[0.3em] uppercase text-sm mb-4 opacity-80">ACTIVA DIGITAL</h3>
            <h1 class="text-6xl font-extrabold brand-font mb-2">ECOSYSTEM <span class="text-mind">OS</span></h1>
            <div class="w-20 h-2 bg-body mx-auto rounded-full my-6"></div>
            <h2 class="text-2xl font-light uppercase tracking-widest">Enterprise Edition</h2>
        </div>
        <div class="relative z-10 bg-white w-3/4 p-12 rounded-3xl shadow-2xl border-t-8 border-heart -mt-10">
            <h2 class="text-3xl font-bold text-dark mb-2 brand-font uppercase">Registro de Proyecto</h2>
            <p class="text-gray-500 uppercase tracking-wide text-xs mb-8">Sector Enterprise / Corporate</p>
            <div class="text-left mt-8 space-y-6">
                <div><label class="block text-xs font-bold text-gray-400 uppercase mb-1">Cliente / Empresa</label><div class="border-b-2 border-gray-200 h-8"></div></div>
                <div><label class="block text-xs font-bold text-gray-400 uppercase mb-1">Ref. Proyecto</label><div class="border-b-2 border-gray-200 h-8"></div></div>
            </div>
        </div>
        <div class="pb-16 text-gray-400 text-xs"><p class="font-bold text-dark">Versión 2026</p></div>
    </div>

    <!-- PÁGINA 2: ALCANCE -->
    <div class="page-a4">
        <div class="watermark">CONFIDENCIAL</div>
        <div class="flex items-center mb-8 border-b-2 border-gray-100 pb-4">
            <div class="w-2 h-12 gradient-body rounded-full mr-4"></div>
            <div>
                <h2 class="text-3xl font-bold text-dark">Alcance del Proyecto</h2>
                <p class="text-body font-bold text-sm">Transformación Digital e Innovación</p>
            </div>
        </div>
        <div class="text-justify text-gray-700 space-y-6 text-sm leading-relaxed">
            <p>El <strong>Registro de Proyecto - Enterprise</strong> es la herramienta fundamental para documentar la evolución de la consultoría estratégica. Integra metodologías <strong>Agile</strong> y estándares de <strong>Calidad ISO</strong>.</p>
            <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-mind">
                <h4 class="text-mind font-bold mb-2 text-sm uppercase"><i class="fas fa-rocket mr-2"></i> Modelo de Innovación</h4>
                <p class="text-xs">Implementación de soluciones tecnológicas para la optimización de procesos, reducción de costes y maximización del ROI. Enfoque centrado en datos.</p>
            </div>
            <div class="grid grid-cols-2 gap-6 mt-8">
                <div>
                    <h4 class="text-xs font-bold text-gray-400 uppercase mb-2 border-b">Áreas de Impacto</h4>
                    <ul class="text-xs space-y-2 list-none">
                        <li><span class="text-heart font-bold">•</span> Automatización de Procesos</li>
                        <li><span class="text-heart font-bold">•</span> Infraestructura Cloud</li>
                        <li><span class="text-heart font-bold">•</span> Inteligencia Artificial</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="page-number">Página 2</div>
    </div>

    <!-- PÁGINA 3: ACUERDO -->
    <div class="page-a4">
        <h2 class="text-2xl font-bold text-dark brand-font uppercase mb-2">Acuerdo de Servicios</h2>
        <div class="h-1 w-16 bg-heart rounded-full mb-8"></div>
        <div class="grid grid-cols-2 gap-8 text-sm text-gray-700 leading-relaxed">
            <div>
                <h4 class="font-bold text-dark mb-2 uppercase text-xs border-b pb-1">1. Objetivos</h4>
                <p class="mb-4 text-xs">Definir KPIs claros, entregables y cronograma de ejecución.</p>
                <h4 class="font-bold text-dark mb-2 uppercase text-xs border-b pb-1">2. Metodología</h4>
                <ul class="list-disc pl-4 space-y-1 text-xs">
                    <li>Sprints quincenales.</li>
                    <li>Revisión continua de métricas.</li>
                </ul>
            </div>
            <div>
                 <h4 class="font-bold text-dark mb-2 uppercase text-xs border-b pb-1">3. Colaboración</h4>
                 <p class="text-xs">Se requiere la participación activa de los stakeholders del cliente.</p>
            </div>
        </div>
         <div class="border-2 border-dark rounded-xl p-8 mt-8 flex-1">
            <h3 class="text-lg font-bold text-dark uppercase mb-4 text-center">Aprobación</h3>
             <p class="text-sm text-justify leading-relaxed mb-12">
                Autorizo el inicio del proyecto bajo los términos acordados en la propuesta comercial.
            </p>
            <div class="grid grid-cols-2 gap-12">
                <div><div class="border-b border-dark h-12 mb-2"></div><p class="text-xs text-center font-bold">Firma Cliente / Stakeholder</p></div>
                <div><div class="border-b border-dark h-12 mb-2"></div><p class="text-xs text-center font-bold">Firma Consultor Activa</p></div>
            </div>
        </div>
        <div class="page-number">Página 3</div>
    </div>

    <!-- PÁGINA 4: FICHA TÉCNICA -->
    <div class="page-a4">
        <div class="flex items-center mb-6">
            <div class="w-10 h-10 rounded-full bg-mind text-white flex items-center justify-center font-bold mr-3">1</div>
            <h2 class="text-2xl font-bold text-dark">Ficha Técnica</h2>
        </div>
        <div class="border border-gray-300 rounded-lg p-6 mb-6">
            <h3 class="text-xs font-bold text-mind uppercase mb-4">1.1 Datos Generales</h3>
            <div class="grid grid-cols-2 gap-8 mb-4">
                <div><label class="text-xs text-gray-500 font-bold">Razón Social</label><div class="input-line"></div></div>
                <div><label class="text-xs text-gray-500 font-bold">Sector / Industria</label><div class="input-line"></div></div>
                <div><label class="text-xs text-gray-500 font-bold">Tamaño Empresa</label><div class="input-line"></div></div>
                <div><label class="text-xs text-gray-500 font-bold">Contacto Principal</label><div class="input-line"></div></div>
            </div>
        </div>
         <div class="border border-gray-300 rounded-lg p-6">
            <h3 class="text-xs font-bold text-dark uppercase mb-4">1.2 Contexto Tecnológico</h3>
            <div class="space-y-4">
                <div><label class="text-xs font-bold">Stack Tecnológico Actual:</label><div class="input-line"></div></div>
                <div><label class="text-xs font-bold">Principales Desafíos (Pain Points):</label><div class="input-line"></div><div class="input-line"></div></div>
            </div>
        </div>
        <div class="page-number">Página 4</div>
    </div>

    <!-- PÁGINA 5: AUDITORÍA -->
    <div class="page-a4">
        <h2 class="text-2xl font-bold text-dark mb-8">Auditoría Inicial</h2>
        <div class="grid grid-cols-2 gap-8 mb-8">
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 class="text-sm font-bold text-mind uppercase mb-4">Infraestructura</h3>
                <div class="mb-4">
                    <label class="block text-xs font-bold mb-1">Estado de Cloud</label>
                    <div class="text-xs space-y-1">
                        <div><span class="checkbox-box"></span> On-Premise</div>
                        <div><span class="checkbox-box"></span> Híbrido / Cloud</div>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold mb-1">Seguridad</label>
                    <div class="text-xs space-y-1">
                        <div><span class="checkbox-box"></span> Compliance básico</div>
                        <div><span class="checkbox-box"></span> Auditoría superada</div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 class="text-sm font-bold text-heart uppercase mb-4">Procesos de Negocio</h3>
                <div class="mb-4">
                    <label class="block text-xs font-bold mb-1">Digitalización</label>
                    <div class="text-xs space-y-1">
                        <div><span class="checkbox-box"></span> Procesos manuales</div>
                        <div><span class="checkbox-box"></span> Automatización parcial</div>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold mb-1">Herramientas</label>
                    <div class="input-line mt-2"></div>
                </div>
            </div>
        </div>
        <div class="border-t-2 border-dark pt-6 mt-8">
            <h3 class="text-sm font-bold uppercase mb-4">Evaluación: Madurez Digital</h3>
            <div class="grid grid-cols-3 gap-4 text-xs font-bold text-center text-gray-500 mb-2">
                <div>Baja</div><div>Media</div><div>Alta</div>
            </div>
            <div class="input-line"></div><div class="input-line"></div><div class="input-line"></div><div class="input-line"></div>
        </div>
        <div class="page-number">Página 5</div>
    </div>

    <!-- PÁGINA 6: HOJA DE RUTA -->
    <div class="page-a4">
        <div class="flex items-center mb-6">
            <div class="w-10 h-10 rounded-full bg-body text-white flex items-center justify-center font-bold mr-3">3</div>
            <h2 class="text-2xl font-bold text-dark">Propuesta de Valor</h2>
        </div>
        <div class="space-y-6">
            <div class="grid grid-cols-2 gap-6">
                <div>
                    <h3 class="text-sm font-bold text-mind uppercase mb-2">Oportunidades</h3>
                    <div class="border rounded-lg p-4 bg-white min-h-[150px]">
                        <div class="input-line"></div><div class="input-line"></div><div class="input-line"></div><div class="input-line"></div>
                    </div>
                </div>
                <div>
                    <h3 class="text-sm font-bold text-heart uppercase mb-2">Riesgos / Amenazas</h3>
                    <div class="border rounded-lg p-4 bg-white min-h-[150px]">
                        <div class="input-line"></div><div class="input-line"></div><div class="input-line"></div><div class="input-line"></div>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="text-sm font-bold text-dark uppercase mb-2">Estrategia de Implementación</h3>
                <div class="border-l-4 border-dark pl-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-r-lg">
                    <div class="input-line"></div><div class="input-line"></div><div class="input-line"></div><div class="input-line"></div>
                </div>
            </div>
        </div>
        <div class="page-number">Página 6</div>
    </div>

    <!-- PÁGINA 7: ROADMAP -->
    <div class="page-a4">
        <div class="watermark" style="font-size: 60px;">ROADMAP</div>
        <h2 class="text-3xl font-bold text-dark mb-6">Roadmap de Ejecución</h2>
        <div class="space-y-4 relative">
             <div class="absolute left-6 top-4 bottom-4 w-1 bg-gray-200 z-0"></div>
            <div class="relative z-10 pl-16 mb-4">
                <div class="absolute left-3 top-0 w-7 h-7 rounded-full bg-body border-4 border-white shadow"></div>
                <h3 class="text-body font-bold uppercase">Fase 1: Diagnóstico (Semana 1-2)</h3>
                <div class="bg-body-soft p-4 rounded-lg text-sm border border-body"><p>Análisis profundo de sistemas y entrevistas con equipo.</p></div>
            </div>
            <div class="relative z-10 pl-16 mb-4">
                <div class="absolute left-3 top-0 w-7 h-7 rounded-full bg-mind border-4 border-white shadow"></div>
                <h3 class="text-mind font-bold uppercase">Fase 2: Desarrollo / MVP (Mes 1-3)</h3>
                <div class="bg-mind-soft p-4 rounded-lg text-sm border border-mind"><p>Implementación iterativa de soluciones prioritarias.</p></div>
            </div>
             <div class="relative z-10 pl-16 mb-4">
                <div class="absolute left-3 top-0 w-7 h-7 rounded-full bg-heart border-4 border-white shadow"></div>
                <h3 class="text-heart font-bold uppercase">Fase 3: Despliegue y Escala (Mes 4+)</h3>
                <div class="bg-heart-soft p-4 rounded-lg text-sm border border-heart"><p>Puesta en producción y formación de usuarios.</p></div>
            </div>
        </div>
        <div class="page-number">Página 7</div>
    </div>

    <!-- PÁGINA 8: REGISTRO DE REUNIÓN -->
    <div class="page-a4">
        <div class="bg-dark text-white p-4 rounded-t-xl flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold uppercase tracking-wider">Bitácora de Reunión</h2>
        </div>
        <div class="flex gap-4 mb-6 border-b border-gray-200 pb-4">
            <div class="flex-1"><label class="text-xs text-gray-400 uppercase font-bold">Cliente</label><div class="input-line"></div></div>
            <div class="w-24"><label class="text-xs text-gray-400 uppercase font-bold">Fecha</label><div class="input-line"></div></div>
        </div>
        <div class="grid grid-cols-2 gap-8 mb-6">
            <div>
                 <h3 class="text-mind font-bold text-xs uppercase mb-2 border-b-2 border-mind pb-1">Temas Tratados (Agenda)</h3>
                 <div class="space-y-2 text-xs">
                    <div><span class="checkbox-box"></span> Revisión KPIs</div>
                    <div><span class="checkbox-box"></span> Bloqueos / Riesgos</div>
                    <div><span class="checkbox-box"></span> Planificación Sprint</div>
                    <div><span class="checkbox-box"></span> Feedback Usuario</div>
                </div>
            </div>
             <div>
                <h3 class="text-body font-bold text-xs uppercase mb-2 border-b-2 border-body pb-1">Acuerdos / Action Items</h3>
                <div class="mt-4"><div class="input-line"></div><div class="input-line"></div><div class="input-line"></div></div>
            </div>
        </div>
        <div class="mb-6">
            <h3 class="text-xs font-bold text-dark uppercase mb-2">Minuta de la Reunión</h3>
            <div class="w-full h-40 border border-gray-300 rounded p-2 bg-[linear-gradient(transparent_1.9rem,#f0f0f0_2rem)] bg-[length:100%_2rem] leading-[2rem]"></div>
        </div>
        <div class="page-number">Página 8</div>
    </div>
    
     <!-- PÁGINA 9: NOTAS -->
    <div class="page-a4 lined-paper">
        <h2 class="text-2xl font-bold text-dark uppercase tracking-widest mb-8">NOTAS TÉCNICAS / ARQUITECTURA</h2>
        <div class="page-number">Página 9</div>
    </div>

</body>
</html>`;
