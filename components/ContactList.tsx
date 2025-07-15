'use client';
import { useState } from 'react';

interface Contacto {
  nombre: string;
  email: string;
  telefono: string;
}

export default function ContactList() {
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const agregarContacto = () => {
    if (nombre && email && telefono) {
      const nuevo: Contacto = { nombre, email, telefono };
      setContactos([...contactos, nuevo]);
      setNombre('');
      setEmail('');
      setTelefono('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Agenda de Contactos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 rounded"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          className="border p-2 rounded"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <button
        onClick={agregarContacto}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Añadir contacto
      </button>

      <ul className="mt-6 space-y-2">
        {contactos.map((c, idx) => (
          <li key={idx} className="bg-white p-4 rounded shadow">
            <strong>{c.nombre}</strong><br />
            📧 {c.email}<br />
            📞 {c.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
}
