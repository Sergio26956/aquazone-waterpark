import { useState } from 'react';

interface Campana {
  id: number;
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
}

const campanasDemo: Campana[] = [
  {
    id: 1,
    nombre: 'Campaña Verano 2025',
    descripcion: 'Promoción especial para parques flotantes en verano.',
    fechaInicio: '2025-06-01',
    fechaFin: '2025-08-31',
  },
  {
    id: 2,
    nombre: 'Campaña Urbana',
    descripcion: 'Descuentos para parques urbanos en zonas metropolitanas.',
    fechaInicio: '2025-07-15',
    fechaFin: '2025-09-15',
  },
];

const Campanas = () => {
  const [campanas, setCampanas] = useState<Campana[]>(campanasDemo);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const agregarCampana = () => {
    if (!nombre || !descripcion || !fechaInicio || !fechaFin) {
      alert('Rellena todos los campos');
      return;
    }
    const nueva = {
      id: campanas.length + 1,
      nombre,
      descripcion,
      fechaInicio,
      fechaFin,
    };
    setCampanas([...campanas, nueva]);
    setNombre('');
    setDescripcion('');
    setFechaInicio('');
    setFechaFin('');
  };

  const eliminarCampana = (id: number) => {
    setCampanas(campanas.filter(c => c.id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Gestión de Campañas</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Nombre de campaña"
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
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Acción</th>
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
              <td colSpan={5} style={{ padding: '1rem', textAlign: 'center' }}>
                No hay campañas activas.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Campanas;
