'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';

const contactos = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    mensaje: 'Hola, quiero información sobre el parque acuático flotante.',
    fecha: '2025-05-01',
  },
  {
    id: 2,
    nombre: 'Lucía Gómez',
    email: 'lucia@example.com',
    mensaje: '¿Tienen fechas disponibles en julio?',
    fecha: '2025-05-10',
  },
];

export default function AdminContactosPage() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Mensajes Recibidos</h2>
      <div className="space-y-4">
        {contactos.map((contacto) => (
          <Card key={contacto.id}>
            <CardContent className="p-4">
              <p><strong>Nombre:</strong> {contacto.nombre}</p>
              <p><strong>Email:</strong> {contacto.email}</p>
              <p><strong>Mensaje:</strong> {contacto.mensaje}</p>
              <p className="text-sm text-gray-500"><strong>Fecha:</strong> {contacto.fecha}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
}
