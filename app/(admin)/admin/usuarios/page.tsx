'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const usuarios = [
  {
    id: 1,
    nombre: 'Administrador Principal',
    email: 'admin@aquazone.com',
    rol: 'Administrador',
    fechaRegistro: '2025-04-01',
  },
  {
    id: 2,
    nombre: 'Carlos Ortega',
    email: 'carlos@cliente.com',
    rol: 'Usuario',
    fechaRegistro: '2025-04-15',
  },
];

export default function AdminUsuariosPage() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Usuarios Registrados</h2>
      <div className="space-y-4">
        {usuarios.map((usuario) => (
          <Card key={usuario.id}>
            <CardContent className="p-4">
              <p><strong>Nombre:</strong> {usuario.nombre}</p>
              <p><strong>Email:</strong> {usuario.email}</p>
              <p><strong>Rol:</strong> {usuario.rol}</p>
              <p className="text-sm text-gray-500"><strong>Registrado:</strong> {usuario.fechaRegistro}</p>
              <div className="mt-2">
                <Button variant="outline">Editar</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
}
