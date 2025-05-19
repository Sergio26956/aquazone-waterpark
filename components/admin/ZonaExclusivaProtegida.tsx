'use client';

import { useState } from 'react';
import ZonaExclusiva from './ZonaExclusiva';

export default function ZonaExclusivaProtegida() {
  const [accesoPermitido, setAccesoPermitido] = useState(false);
  const [clave, setClave] = useState('');

  const CLAVE_CORRECTA = 'aquazone123';

  const verificarClave = () => {
    if (clave === CLAVE_CORRECTA) {
      setAccesoPermitido(true);
    } else {
      alert('Clave incorrecta');
    }
  };

  if (accesoPermitido) return <ZonaExclusiva />;

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Acceso privado</h2>
      <input
        type="password"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        placeholder="Introduce la clave"
        className="p-2 border rounded w-full max-w-sm text-center"
      />
      <button
        onClick={verificarClave}
        className="mt-4 px-4 py-2 bg-blue-700 text-white rounded"
      >
        Entrar
      </button>
    </div>
  );
}
