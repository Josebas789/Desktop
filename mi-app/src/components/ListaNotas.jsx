import React from 'react';
import Notas from './Notas';
import '../App.css';

export default function ListaNotas({ notas, borrarNota }) {
  if (notas.length === 0) {
    return <p className="no-notes">No hay notas aún. ¡Agrega la primera!</p>;
  }
  return (
    <div className="note-list">
      {notas.map(nota => (
        <Notas key={nota.id} nota={nota} borrarNota={borrarNota} />
      ))}
    </div>
  );
}

