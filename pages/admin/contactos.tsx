import { useState } from 'react';

interface Contacto {
  id: number;
  nombre: string;
  email: string;
  mensaje: string;
}

const contactosDemo: Contacto[] = [
  { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', mensaje: 'Consulta sobre parque flotante.' },
  { id: 2, nombre: 'María López', email: 'maria@example.com', mensaje: 'Solicitud de presupuesto.' },
  { id: 3, nombre: 'Carlos Ruiz', email: 'carlos@example.com', mensaje: 'Información sobre actividades urbanas.' },
];

const Contactos = () => {
  const [contactos] = useState<Contacto[]>(contactosDemo);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Listado de Contactos</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#007acc', color: '#fff' }}>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Nombre</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Email</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((c) => (
            <tr key={c.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.nombre}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.email}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.mensaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contactos;
