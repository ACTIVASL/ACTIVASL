import { jsPDF } from 'jspdf';

export const generatePDFTemplate = (fileName: string) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;

  // --- HEADER HELPER ---
  const addHeader = (title: string, subtitle?: string) => {
    // Logo placeholder (Brand Color Rectangle)
    doc.setFillColor(236, 0, 140); // #EC008C
    doc.rect(0, 0, pageWidth, 5, 'F');

    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(33, 33, 33);
    doc.text(title, margin, 40);

    if (subtitle) {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);
      doc.text(subtitle, margin, 48);
    }

    doc.setDrawColor(200, 200, 200);
    doc.line(margin, 55, pageWidth - margin, 55);
  };

  // --- FOOTER HELPER ---
  const addFooter = () => {
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text('Documento Oficial - Activa Digital © 2026', pageWidth / 2, pageHeight - 10, {
      align: 'center',
    });
  };

  // --- GENERATORS ---

  if (fileName.includes('Consentimiento Informado')) {
    addHeader('Acuerdo de Servicios', 'Consultoría Estratégica y Tecnología');

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    const body = `
YO, ____________________________________________________________________,
con DNI/NIE: ________________________, actuando en nombre propio o como representante legal de:

PACIENTE: ________________________________________________________________

Declaro haber sido informado/a sobre:
1. La naturaleza del servicio de Consultoría Tecnológica.
2. Los objetivos específicos (transformación digital, optimización de procesos).
3. La confidencialidad de la información y protección de datos (NDA).
4. El derecho a revisar el alcance del proyecto.

Por la presente, autorizo el inicio del proyecto.

En ____________________, a ____ de _______________ de 202__.


__________________________                  __________________________
Firma del Cliente / Rep.                Firma del Consultor
    `;
    doc.text(body, margin, 70);
  } else if (fileName.includes('Hoja de Registro')) {
    addHeader('Registro de Proyecto', 'Bitácora de Ejecución Diaria');

    doc.setFontSize(11);
    doc.text(
      `Cliente: _______________________________________  Fecha: ____/____/____`,
      margin,
      70,
    );
    doc.text(`Nº Sprint: _______  Fase del Proyecto: ______________________`, margin, 80);

    // Box 1
    doc.setFillColor(245, 245, 245);
    doc.rect(margin, 95, pageWidth - margin * 2, 30, 'F');
    doc.setFont('helvetica', 'bold');
    doc.text('Objetivos del Sprint/Reunión:', margin + 5, 105);

    // Box 2
    doc.rect(margin, 135, pageWidth - margin * 2, 60, 'F');
    doc.text('Desarrollo y Actividades (Respuesta Musical/Cognitiva):', margin + 5, 145);

    // Box 3
    doc.rect(margin, 205, pageWidth - margin * 2, 40, 'F');
    doc.text('Plan de Acción y Siguientes Pasos:', margin + 5, 215);
  } else if (fileName.includes('MOCA')) {
    addHeader('Montreal Cognitive Assessment (MOCA)', 'Versión Española - Hoja de Puntuación');

    doc.setFontSize(10);
    doc.text(
      'Nombre: _______________________  Nivel Estudios: _________  Fecha: ________',
      margin,
      70,
    );

    // Table Simulation
    let y = 85;
    const row = (label: string, score: string) => {
      doc.rect(margin, y, 140, 10);
      doc.rect(margin + 140, y, 30, 10);
      doc.text(label, margin + 2, y + 7);
      doc.text(score, margin + 142, y + 7);
      y += 10;
    };

    doc.setFont('helvetica', 'bold');
    row('DOMINIO EVALUADO', 'PUNTOS');
    doc.setFont('helvetica', 'normal');
    row('VISUOESPACIAL / EJECUTIVA (Alternancia, Cubo, Reloj)', '     / 5');
    row('IDENTIFICACIÓN (Animales)', '     / 3');
    row('ATENCIÓN (Dígitos, Letras, Resta de 7)', '     / 6');
    row('LENGUAJE (Repetición, Fluidez)', '     / 3');
    row('ABSTRACCIÓN (Similitudes)', '     / 2');
    row('RECUERDO DIFERIDO (Palabras sin pistas)', '     / 5');
    row('ORIENTACIÓN (Tiempo y Lugar)', '     / 6');

    y += 5;
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL:         / 30', margin + 142, y + 7);

    doc.setFontSize(9);
    doc.text('Normal >= 26 / 30. Añadir 1 punto si estudios <= 12 años.', margin, y + 25);
  } else if (fileName.includes('Cuestionario de Ingreso')) {
    addHeader('Ficha de Cliente', 'Perfil Corporativo y Tecnológico');

    const lines = [
      '1. PERFIL EMPRESARIAL',
      'Sector / Industria: __________________________________________________',
      '____________________________________________________________________',
      'Tecnologías actuales: __________________________________________',
      '¿Infraestructura Cloud? ¿Cuál? ______________________________________',
      '',
      '2. HISTORIAL DIGITAL',
      'Principales desafíos: _______________________________________________',
      'Restricciones de seguridad: _____________________________________________',
      'Nivel de madurez digital: ____________________________________________',
      '',
      '3. OBJETIVOS Y EXPECTATIVAS',
      '¿Ha realizado consultoría antes?  SI / NO',
      'Objetivos principales del Cliente:',
      '____________________________________________________________________',
      '____________________________________________________________________',
    ];

    let y = 70;
    lines.forEach((line) => {
      if (line === '') {
        y += 10;
      } else if (line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.')) {
        doc.setFont('helvetica', 'bold');
        doc.text(line, margin, y);
        doc.setFont('helvetica', 'normal');
        y += 10;
      } else {
        doc.text(line, margin, y);
        y += 12;
      }
    });
  }

  addFooter();
  doc.save(fileName);
};
