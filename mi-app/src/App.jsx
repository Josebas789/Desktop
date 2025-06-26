import React, { useState, useEffect } from 'react';
import FormularioNotas from "./components/FormularioNotas.jsx";
import ListaNotas      from "./components/ListaNotas.jsx";
import './App.css';

const fondosPorDefecto = [
  'https://picsum.photos/id/1018/1920/1080',
  'https://picsum.photos/id/1025/1920/1080',
  'https://picsum.photos/id/1035/1920/1080'
];

export default function App() {
  const [notas, setNotas] = useState(() => JSON.parse(localStorage.getItem('notas')) || []);
  const [fondo, setFondo] = useState(() => 
    localStorage.getItem('fondoNotas') ||
    fondosPorDefecto[Math.floor(Math.random() * fondosPorDefecto.length)]
  );
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  useEffect(() => {
    localStorage.setItem('fondoNotas', fondo);
  }, [fondo]);

  const agregarNota = nota  => setNotas(n => [...n, nota]);
  const borrarNota  = id    => setNotas(n => n.filter(x => x.id !== id));

  const fondoAleatorio = () =>
    setFondo(fondosPorDefecto[Math.floor(Math.random() * fondosPorDefecto.length)]);

  const handleBgUpload = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setFondo(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <h1 className="header">Sticky Notes App</h1>

      <div className="bg-controls">
        <label className="bg-upload">
          Fondo personalizado:
          <input type="file" accept="image/*" onChange={handleBgUpload} />
        </label>
        <button className="bg-button" onClick={fondoAleatorio}>
          Fondo aleatorio
        </button>
      </div>

      <button
        className="toggle-bar"
        onClick={() => setMostrarFormulario(v => !v)}
      >
        {mostrarFormulario ? '✕ Cerrar' : '+ Agregar Nota'}
      </button>

      {mostrarFormulario && (
        <FormularioNotas agregarNota={agregarNota} />
      )}

      <ListaNotas notas={notas} borrarNota={borrarNota} />
    </div>
  );
}
