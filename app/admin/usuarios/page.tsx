'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  fechaRegistro: string;
}

export default function UsuariosAdminPage() {
  const [usuarios] = useState<Usuario[]>([
    {
      id: 1,
      nombre: 'Carlos Rivera',
      email: 'carlos@ejemplo.com',
      fechaRegistro: '2025-07-15',
    },
    {
      id: 2,
      nombre: 'Laura Gómez',
      email: 'laura@ejemplo.com',
      fechaRegistro: '2025-07-20',
    },
  ]);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Usuarios Registrados</h2>

      <Card>
        <CardContent className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Fecha de Registro</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usuarios.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell>{usuario.nombre}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>{usuario.fechaRegistro}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
