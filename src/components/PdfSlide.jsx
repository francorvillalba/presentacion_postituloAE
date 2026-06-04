import React from 'react';
import TextRenderer from './TextRenderer';
import FooterLogos from './FooterLogos';

function PdfSlide({ slide }) {
  const Template = ({ titulo, texto, imagen, formatotexto }) => {
    if (slide.plantilla === 'portada') {
      return (
        <div style={{ textAlign: 'center' }}>
          {imagen && <img src={imagen} alt={titulo} style={{ maxWidth: '80%', maxHeight: 300, marginBottom: 16 }} />}
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>{titulo}</h1>
          <TextRenderer texto={texto} formatotexto={formatotexto} />
        </div>
      );
    }
    return (
      <div>
        <h1 style={{ fontSize: 24, marginBottom: 12 }}>{titulo}</h1>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          {(slide.plantilla === 'texto-izquierda' || slide.plantilla === 'dos-columnas') && imagen && (
            <img src={imagen} alt={titulo} style={{ maxWidth: '45%', maxHeight: 250 }} />
          )}
          <div style={{ flex: 1 }}>
            <TextRenderer texto={texto} formatotexto={formatotexto} />
          </div>
          {slide.plantilla === 'texto-derecha' && imagen && (
            <img src={imagen} alt={titulo} style={{ maxWidth: '45%', maxHeight: 250 }} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="pdf-slide">
      <div className="pdf-slide-body">
        <Template
          titulo={slide.titulo}
          texto={slide.texto}
          imagen={slide.imagen}
          formatotexto={slide.formatotexto}
        />
      </div>
      <FooterLogos />
    </div>
  );
}

export default PdfSlide;
