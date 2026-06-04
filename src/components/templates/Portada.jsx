import React from 'react';
import TextRenderer from '../TextRenderer';
import FooterLogos from '../FooterLogos';

function Portada({ titulo, texto, imagen, formatotexto }) {
  return (
    <div className="slide">
      <div className="slide-body template-portada">
        {imagen && <img src={imagen} alt={titulo} />}
        <h1>{titulo}</h1>
        <TextRenderer texto={texto} formatotexto={formatotexto} />
      </div>
      <FooterLogos />
    </div>
  );
}

export default Portada;
