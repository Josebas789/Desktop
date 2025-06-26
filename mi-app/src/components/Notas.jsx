import React from 'react';
import '../App.css';

function Notas({ nota, borrarNota }) {
  return (
    <div className={`note-card ${nota.importante ? 'important' : ''}`}>
      <button onClick={() => borrarNota(nota.id)} className="delete-button">✕</button>
      {nota.titulo && <h2 className="note-title">{nota.titulo}</h2>}
      <p className="note-text">{nota.descripcion}</p>
    </div>
  );
}

export default Notas;
