import React, { useState } from 'react';
import '../App.css';

function Notas({ nota, borrarNota }) {
  const [expandido, setExpandido] = useState(false);
  const maxCaracteres = 150;
  const esLarga = nota.descripcion.length > maxCaracteres;
  const textoMostrar = !expandido && esLarga
    ? nota.descripcion.slice(0, maxCaracteres) + '...'
    : nota.descripcion;

  return (
    <div className={`note-card ${nota.importante ? 'important' : ''}`}>
      <button
        onClick={() => borrarNota(nota.id)}
        className="delete-button"
      >✕</button>
      {nota.titulo && <h2 className="note-title">{nota.titulo}</h2>}
      <p className="note-text">{textoMostrar}</p>
      {esLarga && (
        <button
          className="show-more-button"
          onClick={() => setExpandido(!expandido)}
        >
          {expandido ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </div>
  );
}

export default Notas;
