import React from 'react';
import TextRenderer from '../TextRenderer';
import FooterLogos from '../FooterLogos';

function DosColumnas({ titulo, texto, imagen, formatotexto }) {
  return (
    <div className="slide">
      <div className="slide-body">
        <h1>{titulo}</h1>
        <div className="template-dos-columnas">
          <div className="columna">
            <TextRenderer texto={texto} formatotexto={formatotexto} />
          </div>
          <div className="columna">
            {imagen && <img src={imagen} alt={titulo} />}
          </div>
        </div>
      </div>
      <FooterLogos />
    </div>
  );
}

export default DosColumnas;
