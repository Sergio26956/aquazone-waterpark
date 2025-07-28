import { useState } from 'react';

interface Contacto {
  id: number;
  nombre: string;
  email: string;
  mensaje: string;
  fecha: string;
}

const contactosDemo: Contacto[] = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    mensaje: 'Consulta sobre parque flotante.',
    fecha: '2025-07-28',
  },
  {
    id: 2,
    nombre: 'María López',
    email: 'maria@example.com',
    mensaje: 'Interesada en el parque urbano.',
    fecha: '2025-07-27',
  },
];

const Contactos = () => {
  const [contactos, setContactos] = useState<Contacto[]>(contactosDemo);

  const eliminarContacto = (id: number) => {
    setContactos(contactos.filter(c => c.id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Lista de Contactos</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#007acc', color: '#fff' }}>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Nombre</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Email</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Mensaje</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Fecha</th>
            <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map(c => (
            <tr key={c.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.nombre}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.email}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.mensaje}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{c.fecha}</td>
              <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'center' }}>
                <button
                  onClick={() => eliminarContacto(c.id)}
                  style={{
                    backgroundColor: '#e63946',
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
          {contactos.length === 0 && (
            <tr>
              <td colSpan={5} style={{ padding: '1rem', textAlign: 'center' }}>
                No hay contactos registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contactos;
