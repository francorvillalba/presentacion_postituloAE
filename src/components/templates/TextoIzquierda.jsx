import React from 'react';
import TextRenderer from '../TextRenderer';
import FooterLogos from '../FooterLogos';

function TextoIzquierda({ titulo, texto, imagen, formatotexto }) {
  return (
    <div className="slide">
      <div className="slide-body">
        <div className="template-texto-izquierda">
          <div className="imagen-columna">
            {imagen && <img src={imagen} alt={titulo} />}
          </div>
          <div className="texto-columna">
            <h1>{titulo}</h1>
            <TextRenderer texto={texto} formatotexto={formatotexto} />
          </div>
        </div>
      </div>
      <FooterLogos />
    </div>
  );
}

export default TextoIzquierda;
