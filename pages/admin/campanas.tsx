import { useState } from 'react';

interface Campana {
  id: number;
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  activo: boolean;
}

const campanasDemo: Campana[] = [
  {
    id: 1,
    nombre: 'Verano 2025',
    descripcion: 'Campaña especial para temporada de verano',
    fechaInicio: '2025-06-01',
    fechaFin: '2025-08-31',
    activo: true,
  },
  {
    id: 2,
    nombre: 'Oferta Invierno',
    descripcion: 'Descuentos especiales para invierno',
    fechaInicio: '2025-12-01',
    fechaFin: '2026-01-31',
    activo: false,
  },
];

const Campanas = () => {
  const [campanas, setCampanas] = useState<Campana[]>(campanasDemo);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [activo, setActivo] = useState(true);

  const agregarCampana = () => {
    if (!nombre || !descripcion || !fechaInicio || !fechaFin) {
      alert('Completa todos los campos');
      return;
    }
    const nueva: Campana = {
      id: campanas.length + 1,
      nombre,
      descripcion,
      fechaInicio,
      fechaFin,
      activo,
    };
    setCampanas([...campanas, nueva]);
    setNombre('');
    setDescripcion('');
    setFechaInicio('');
    setFechaFin('');
    setActivo(true);
  };

  const eliminarCampana = (id: number) => {
    setCampanas(campanas.filter(c => c.id !== id));
  };

  const toggleActivo = (id: number) => {
    setCampanas(
      campanas.map(c => (c.id === id ? { ...c, activo: !c.activo } : c))
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Gestión de Campañas</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.5rem', width: '20%' }}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.5rem', width: '30%' }}
        />
        <input
          type="date"
          value={fechaInicio}
          onChange={e => setFechaInicio(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <input
          type="date"
          value={fechaFin}
          onChange={e => setFechaFin(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <label style={{ marginRight: '0.5rem' }}>
          Activo:
          <input
            type="checkbox"
            checked={activo}
            onChange={e => setActivo(e.target.checked)}
            style={{ marginLeft: '0.25rem' }}
          />
        </label>
        <button
          onClick={agregarCampana}
          style={{
            backgroundColor: '#2a9d8f',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Añadir Campaña
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#264653', color: '#fff' }}>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Nombre</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Descripción</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Fecha Inicio</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Fecha Fin</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Activo</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {campanas.map(c => (
            <tr key={c.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.nombre}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.descripcion}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.fechaInicio}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.fechaFin}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'center' }}>
                <input
                  type="checkbox"
                  checked={c.activo}
                  onChange={() => toggleActivo(c.id)}
                />
              </td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'center' }}>
                <button
                  onClick={() => eliminarCampana(c.id)}
                  style={{
                    backgroundColor: '#e76f51',
                    color: 'white',
                    border: 'none',
                    padding: '0.25rem 0.5rem',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {campanas.length === 0 && (
            <tr>
              <td colSpan={6} style={{ padding: '1rem', textAlign: 'center' }}>
                No hay campañas registradas.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Campanas;
