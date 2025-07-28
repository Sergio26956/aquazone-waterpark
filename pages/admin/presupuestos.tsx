import { useState } from 'react';

interface Presupuesto {
  id: number;
  cliente: string;
  servicio: string;
  monto: number;
  aprobado: boolean;
}

const presupuestosDemo: Presupuesto[] = [
  { id: 1, cliente: 'Empresa X', servicio: 'Parque Flotante', monto: 5000, aprobado: false },
  { id: 2, cliente: 'Cliente Y', servicio: 'Parque Urbano', monto: 3000, aprobado: true },
];

const Presupuestos = () => {
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>(presupuestosDemo);
  const [cliente, setCliente] = useState('');
  const [servicio, setServicio] = useState('');
  const [monto, setMonto] = useState<number | ''>('');

  const agregarPresupuesto = () => {
    if (cliente.trim() && servicio.trim() && monto !== '') {
      const nuevoPresupuesto: Presupuesto = {
        id: presupuestos.length + 1,
        cliente,
        servicio,
        monto: Number(monto),
        aprobado: false,
      };
      setPresupuestos([...presupuestos, nuevoPresupuesto]);
      setCliente('');
      setServicio('');
      setMonto('');
    }
  };

  const toggleAprobado = (id: number) => {
    setPresupuestos(
      presupuestos.map(p =>
        p.id === id ? { ...p, aprobado: !p.aprobado } : p
      )
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
          onChange={(e) => setCliente(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Servicio"
          value={servicio}
          onChange={(e) => setServicio(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <input
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value === '' ? '' : Number(e.target.value))}
          style={{ padding: '0.5rem', marginRight: '0.5rem', width: '120px' }}
        />
        <button onClick={agregarPresupuesto} style={{ padding: '0.5rem 1rem', backgroundColor: '#007acc', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Añadir Presupuesto
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#007acc', color: '#fff' }}>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Cliente</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Servicio</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Monto</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Aprobado</th>
          </tr>
        </thead>
        <tbody>
          {presupuestos.map(p => (
            <tr key={p.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.cliente}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.servicio}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.monto.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'center' }}>
                <input
                  type="checkbox"
                  checked={p.aprobado}
                  onChange={() => toggleAprobado(p.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Presupuestos;
