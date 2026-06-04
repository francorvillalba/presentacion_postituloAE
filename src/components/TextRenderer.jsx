import React from 'react';

function TextRenderer({ texto, formatotexto }) {
  if (formatotexto === 'parrafos') {
    return (
      <div className="texto-contenido">
        {Array.isArray(texto) && texto.map((parrafo, i) => (
          <p key={i}>{parrafo}</p>
        ))}
      </div>
    );
  }

  if (formatotexto === 'lista') {
    return (
      <div className="texto-contenido">
        <ul>
          {Array.isArray(texto) && texto.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (formatotexto === 'tabla') {
    if (!Array.isArray(texto) || texto.length === 0) return null;
    const headers = Object.keys(texto[0]);

    return (
      <div className="texto-contenido">
        <table>
          <thead>
            <tr>
              {headers.map((h, i) => <th key={i}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {texto.map((row, i) => (
              <tr key={i}>
                {headers.map((h, j) => <td key={j}>{row[h]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

export default TextRenderer;
