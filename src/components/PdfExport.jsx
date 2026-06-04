import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import slides from '../data/slides.json';
import PdfSlide from './PdfSlide';

function PdfExport() {
  const containerRef = useRef(null);

  const handleExport = async () => {
    const container = containerRef.current;
    if (!container) return;

    const pdf = new jsPDF('l', 'mm', 'a4');
    const slidesElements = container.children;

    for (let i = 0; i < slidesElements.length; i++) {
      if (i > 0) pdf.addPage();

      const canvas = await html2canvas(slidesElements[i], {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');

      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210, undefined, 'FAST');
    }

    pdf.save('presentacion-agroecologia.pdf');
  };

  return (
    <div className="pdf-export">
      <button className="btn-pdf" onClick={handleExport}>
        Descargar PDF
      </button>

      <div className="pdf-container" ref={containerRef}>
        {slides.map((slide) => (
          <PdfSlide key={slide.id} slide={slide} />
        ))}
      </div>
    </div>
  );
}

export default PdfExport;
