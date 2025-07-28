import { useEffect, useState } from 'react';

interface Registro {
  nombre: string;
  correo: string;
  fecha: string;
}

const RegistroPage = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('registros');
    if (data) {
      setRegistros(JSON.parse(data));
    }
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Listado de registros</h1>
      {registros.length === 0 ? (
        <p>No hay registros guardados.</p>
      ) : (
        <ul>
          {registros.map((registro, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <strong>Nombre:</strong> {registro.nombre}<br />
              <strong>Correo:</strong> {registro.correo}<br />
              <strong>Fecha:</strong> {registro.fecha}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegistroPage;
