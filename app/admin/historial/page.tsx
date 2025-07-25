'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface EventoHistorial {
  id: number;
  nombre: string;
  fecha: string;
  descripcion: string;
}

export default function HistorialPage() {
  const [eventos, setEventos] = useState<EventoHistorial[]>([]);
  const [nuevoEvento, setNuevoEvento] = useState<EventoHistorial>({
    id: Date.now(),
    nombre: '',
    fecha: '',
    descripcion: '',
  });

  const handleInputChange = (field: keyof EventoHistorial, value: string) => {
    setNuevoEvento({ ...nuevoEvento, [field]: value });
  };

  const agregarEvento = () => {
    if (!nuevoEvento.nombre || !nuevoEvento.fecha) return;
    setEventos([
      ...eventos,
      { ...nuevoEvento, id: Date.now() }
    ]);
    setNuevoEvento({
      id: 0,
      nombre: '',
      fecha: '',
      descripcion: '',
    });
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Historial de Eventos</h2>

      <Card className="p-4">
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Nombre del evento"
              value={nuevoEvento.nombre}
              onChange={(e) => handleInputChange('nombre', e.target.value)}
            />
            <Input
              placeholder="Fecha"
              type="date"
              value={nuevoEvento.fecha}
              onChange={(e) => handleInputChange('fecha', e.target.value)}
            />
            <Textarea
              placeholder="Descripción"
              value={nuevoEvento.descripcion}
              onChange={(e) => handleInputChange('descripcion', e.target.value)}
              className="col-span-2"
            />
          </div>
          <Button onClick={agregarEvento}>Agregar al historial</Button>
        </CardContent>
      </Card>

      <Separator />

      <ScrollArea className="h-[400px] rounded-md border p-4">
        <div className="space-y-4">
          {eventos.length === 0 ? (
            <p className="text-muted-foreground">No hay eventos registrados.</p>
          ) : (
            eventos.map((evento) => (
              <Card key={evento.id}>
                <CardContent className="p-4 space-y-1">
                  <h3 className="text-lg font-semibold">{evento.nombre}</h3>
                  <p>Fecha: {evento.fecha}</p>
                  <p className="text-muted-foreground text-sm">
                    {evento.descripcion}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
