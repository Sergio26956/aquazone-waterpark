import { useState } from 'react';

const diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

const generarDiasDelMes = (año: number, mes: number) => {
  const fechaInicio = new Date(año, mes, 1);
  const fechaFin = new Date(año, mes + 1, 0);
  const dias = [];

  for (let i = 1; i <= fechaFin.getDate(); i++) {
    dias.push(i);
  }

  return dias;
};

const Calendario = () => {
  const hoy = new Date();
  const [mesActual, setMesActual] = useState(hoy.getMonth());
  const [añoActual, setAñoActual] = useState(hoy.getFullYear());

  const avanzarMes = () => {
    const nuevoMes = mesActual === 11 ? 0 : mesActual + 1;
    const nuevoAño = mesActual === 11 ? añoActual + 1 : añoActual;
    setMesActual(nuevoMes);
    setAñoActual(nuevoAño);
  };

  const retrocederMes = () => {
    const nuevoMes = mesActual === 0 ? 11 : mesActual - 1;
    const nuevoAño = mesActual === 0 ? añoActual - 1 : añoActual;
    setMesActual(nuevoMes);
    setAñoActual(nuevoAño);
  };

  const dias = generarDiasDelMes(añoActual, mesActual);
  const nombreMes = new Date(añoActual, mesActual).toLocaleString('es-ES', { month: 'long' });

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem' }}>Calendario</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button onClick={retrocederMes}>← Mes anterior</button>
        <span>{nombreMes.toUpperCase()} {añoActual}</span>
        <button onClick={avanzarMes}>Mes siguiente →</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
        {diasSemana.map((dia, index) => (
          <div key={index} style={{ fontWeight: 'bold', textAlign: 'center' }}>{dia}</div>
        ))}
        {dias.map((dia, index) => (
          <div key={index} style={{ padding: '1rem', border: '1px solid #ccc', textAlign: 'center' }}>
            {dia}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendario;
