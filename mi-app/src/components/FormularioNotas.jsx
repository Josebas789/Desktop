import React, { useState } from 'react';
import '../App.css';

export default function FormularioNotas({ agregarNota }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);
  const [error, setError] = useState('');

  const manejarEnvio = e => {
    e.preventDefault();
    if (!descripcion.trim()) {
      setError('La descripción es obligatoria');
      return;
    }
    const nuevaNota = {
      id: crypto.randomUUID(),
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      importante
    };
    agregarNota(nuevaNota);
    setTitulo('');
    setDescripcion('');
    setImportante(false);
    setError('');
  };

  return (
    <form className="note-form" onSubmit={manejarEnvio}>
      {error && <p className="error-text">{error}</p>}
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
          placeholder="Opcional"
        />
      </div>
      <div className="form-group">
        <label>Descripción *</label>
        <textarea
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
          rows={3}
        />
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={importante}
            onChange={e => setImportante(e.target.checked)}
          /> Importante
        </label>
      </div>
      <button type="submit" className="note-button">
        Agregar Nota
      </button>
    </form>
  );
}

