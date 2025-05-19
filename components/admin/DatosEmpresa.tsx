'use client';

import { useState } from 'react';

export default function DatosEmpresa() { const [nombre, setNombre] = useState('AQUAZONE WATER PARK'); const [telefono, setTelefono] = useState('+34 600 000 000'); const [email, setEmail] = useState('info@aquazone.es'); const [direccion, setDireccion] = useState('España, Alqueva');

return ( <div className="p-4 max-w-xl mx-auto"> <h2 className="text-xl font-bold text-blue-700 mb-4">Datos de la Empresa</h2>

<div className="space-y-4">
    <input
      className="w-full border p-2 rounded"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      placeholder="Nombre de la empresa"
    />

    <input
      className="w-full border p-2 rounded"
      value={telefono}
      onChange={(e) => setTelefono(e.target.value)}
      placeholder="Teléfono"
    />

    <input
      className="w-full border p-2 rounded"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Correo electrónico"
    />

    <input
      className="w-full border p-2 rounded"
      value={direccion}
      onChange={(e) => setDireccion(e.target.value)}
      placeholder="Dirección"
    />
  </div>
</div>

); }

