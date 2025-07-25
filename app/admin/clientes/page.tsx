'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  notas: string;
}

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [nuevoCliente, setNuevoCliente] = useState<Cliente>({
    id: Date.now(),
    nombre: '',
    email: '',
    telefono: '',
    notas: '',
  });

  const handleInputChange = (field: keyof Cliente, value: string) => {
    setNuevoCliente({ ...nuevoCliente, [field]: value });
  };

  const agregarCliente = () => {
    if (!nuevoCliente.nombre || !nuevoCliente.email) return;
    setClientes([...clientes, { ...nuevoCliente, id: Date.now() }]);
    setNuevoCliente({
      id: 0,
      nombre: '',
      email: '',
      telefono: '',
      notas: '',
    });
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Clientes</h2>

      <Card className="p-4">
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Nombre"
              value={nuevoCliente.nombre}
              onChange={(e) => handleInputChange('nombre', e.target.value)}
            />
            <Input
              placeholder="Email"
              value={nuevoCliente.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <Input
              placeholder="Teléfono"
              value={nuevoCliente.telefono}
              onChange={(e) => handleInputChange('telefono', e.target.value)}
            />
            <Textarea
              placeholder="Notas"
              value={nuevoCliente.notas}
              onChange={(e) => handleInputChange('notas', e.target.value)}
            />
          </div>
          <Button onClick={agregarCliente}>Añadir cliente</Button>
        </CardContent>
      </Card>

      <Separator />

      <ScrollArea className="h-[400px] rounded-md border p-4">
        <div className="space-y-4">
          {clientes.length === 0 ? (
            <p className="text-muted-foreground">No hay clientes aún.</p>
          ) : (
            clientes.map((cliente) => (
              <Card key={cliente.id}>
                <CardContent className="p-4 space-y-1">
                  <h3 className="text-lg font-semibold">{cliente.nombre}</h3>
                  <p>Email: {cliente.email}</p>
                  <p>Teléfono: {cliente.telefono}</p>
                  {cliente.notas && (
                    <p className="text-muted-foreground text-sm">
                      Notas: {cliente.notas}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
