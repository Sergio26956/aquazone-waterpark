'use client';
import { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
}

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', message: 'Interesado en parque flotante.' },
    { id: 2, name: 'María López', email: 'maria@example.com', message: 'Consulta sobre precios.' },
  ]);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Lista de Contactos</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-left">Nombre</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, email, message }) => (
            <tr key={id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{name}</td>
              <td className="border px-4 py-2">{email}</td>
              <td className="border px-4 py-2">{message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
