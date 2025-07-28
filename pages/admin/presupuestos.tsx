import { useState } from 'react';

interface Presupuesto {
  id: number;
  cliente: string;
  descripcion: string;
  monto: number;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
}

const presupuestosDemo: Presupuesto[] = [
  {
    id: 1,
    cliente: 'Empresa XYZ',
    descripcion: 'Presupuesto para parque flotante modular',
    monto: 15000,
    estado: 'pendiente',
  },
  {
    id: 2,
    cliente: 'Ayuntamiento ABC',
    descripcion: 'Presupuesto parque urbano móvil',
    monto: 22000,
    estado: 'aprobado',
  },
];

const Presupuestos = () => {
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>(presupuestosDemo);
  const [cliente, setCliente] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState<number | ''>('');
  const [estado, setEstado] = useState<'pendiente' | 'aprobado' | 'rechazado'>('pendiente');

  const agregarPresupuesto = () => {
    if (!cliente || !descripcion || monto === '' || !estado) {
      alert('Completa todos los campos');
      return;
    }
    const nuevo: Presupuesto = {
      id: presupuestos.length + 1,
      cliente,
      descripcion,
      monto: Number(monto),
      estado,
    };
    setPresupuestos([...presupuestos, nuevo]);
    setCliente('');
    setDescripcion('');
    setMonto('');
    setEstado('pendiente');
  };

  const eliminarPresupuesto = (id: number) => {
    setPresupuestos(presupuestos.filter(p => p.id !== id));
  };

  const cambiarEstado = (id: number, nuevoEstado: 'pendiente' | 'aprobado' | 'rechazado') => {
    setPresupuestos(
      presupuestos.map(p => (p.id === id ? { ...p, estado: nuevoEstado } : p))
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Gestión de Presupuestos</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Cliente"
          value={cliente}
          onChange={e => setCliente(e.target.value)}
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
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={e => setMonto(e.target.value === '' ? '' : Number(e.target.value))}
          style={{ marginRight: '0.5rem', padding: '0.5rem', width: '15%' }}
        />
        <select
          value={estado}
          onChange={e => setEstado(e.target.value as 'pendiente' | 'aprobado' | 'rechazado')}
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        >
          <option value="pendiente">Pendiente</option>
          <option value="aprobado">Aprobado</option>
          <option value="rechazado">Rechazado</option>
        </select>
        <button
          onClick={agregarPresupuesto}
          style={{
            backgroundColor: '#2a9d8f',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Añadir Presupuesto
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#264653', color: '#fff' }}>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Cliente</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Descripción</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Monto (€)</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Estado</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {presupuestos.map(p => (
            <tr key={p.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.cliente}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.descripcion}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.monto.toFixed(2)}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc', textTransform: 'capitalize' }}>
                {p.estado}
              </td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'center' }}>
                <button
                  onClick={() => eliminarPresupuesto(p.id)}
                  style={{
                    backgroundColor: '#e76f51',
                    color: 'white',
                    border: 'none',
                    padding: '0.25rem 0.5rem',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    marginRight: '0.5rem',
                  }}
                >
                  Eliminar
                </button>
                <select
                  value={p.estado}
                  onChange={e => cambiarEstado(p.id, e.target.value as 'pendiente' | 'aprobado' | 'rechazado')}
                  style={{ padding: '0.25rem' }}
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="aprobado">Aprobado</option>
                  <option value="rechazado">Rechazado</option>
                </select>
              </td>
            </tr>
          ))}
          {presupuestos.length === 0 && (
            <tr>
              <td colSpan={5} style={{ padding: '1rem', textAlign: 'center' }}>
                No hay presupuestos registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Presupuestos;
