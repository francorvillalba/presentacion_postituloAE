import React from 'react';
import Portada from './templates/Portada';
import TextoIzquierda from './templates/TextoIzquierda';
import TextoDerecha from './templates/TextoDerecha';
import DosColumnas from './templates/DosColumnas';
import FooterLogos from './FooterLogos';

const TEMPLATES = {
  portada: Portada,
  'texto-izquierda': TextoIzquierda,
  'texto-derecha': TextoDerecha,
  'dos-columnas': DosColumnas,
};

function SlideViewer({ slide, slideIndex, total, onPrev, onNext }) {
  const Template = TEMPLATES[slide.plantilla];
  if (!Template) {
    return (
      <div className="slide">
        <div className="slide-body">
          <p>Plantilla no reconocida: {slide.plantilla}</p>
        </div>
        <FooterLogos />
      </div>
    );
  }

  return (
    <>
      <Template
        titulo={slide.titulo}
        texto={slide.texto}
        imagen={slide.imagen}
        formatotexto={slide.formatotexto}
      />
      <nav className="navegacion">
        <button onClick={onPrev} disabled={slideIndex === 0}>
          Anterior
        </button>
        <span className="contador">
          {slideIndex + 1} / {total}
        </span>
        <button onClick={onNext} disabled={slideIndex === total - 1}>
          Siguiente
        </button>
      </nav>
    </>
  );
}

export default SlideViewer;
