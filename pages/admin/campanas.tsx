// /pages/admin/campanas.tsx
import { useState } from 'react';

interface Campana {
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
}

const campanasDemo: Campana[] = [
  { id: 1, nombre: 'Campaña Verano 2030', descripcion: 'Promoción especial para parques flotantes.', activo: true },
  { id: 2, nombre: 'Campaña Urbana', descripcion: 'Eventos en parques urbanos.', activo: false },
];

const Campanas = () => {
  const [campanas, setCampanas] = useState<Campana[]>(campanasDemo);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');

  const agregarCampana = () => {
    if (nuevoNombre.trim() && nuevaDescripcion.trim()) {
      const nuevaCampana: Campana = {
        id: campanas.length + 1,
        nombre: nuevoNombre,
        descripcion: nuevaDescripcion,
        activo: false,
      };
      setCampanas([...campanas, nuevaCampana]);
      setNuevoNombre('');
      setNuevaDescripcion('');
    }
  };

  const toggleActivo = (id: number) => {
    setCampanas(
      campanas.map(c =>
        c.id === id ? { ...c, activo: !c.activo } : c
      )
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Gestión de Campañas</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Nombre campaña"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={nuevaDescripcion}
          onChange={(e) => setNuevaDescripcion(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={agregarCampana} style={{ padding: '0.5rem 1rem', backgroundColor: '#007acc', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Añadir Campaña
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#007acc', color: '#fff' }}>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Nombre</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Descripción</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Activo</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {campanas.map(c => (
            <tr key={c.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.nombre}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.descripcion}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'center' }}>
                <input
                  type="checkbox"
                  checked={c.activo}
                  onChange={() => toggleActivo(c.id)}
                />
              </td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>
                {/* Aquí podrías agregar botones para editar o borrar */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Campanas;
