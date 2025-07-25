'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FechaEvento {
  id: number;
  fecha: Date;
  cliente: string;
  descripcion: string;
}

export default function CalendarioAdminPage() {
  const [eventos, setEventos] = useState<FechaEvento[]>([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | undefined>();
  const [cliente, setCliente] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const agregarEvento = () => {
    if (!fechaSeleccionada || !cliente) return;
    const nuevoEvento: FechaEvento = {
      id: Date.now(),
      fecha: fechaSeleccionada,
      cliente,
      descripcion,
    };
    setEventos([...eventos, nuevoEvento]);
    setCliente('');
    setDescripcion('');
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Calendario de Eventos</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 space-y-4">
            <Calendar
              mode="single"
              selected={fechaSeleccionada}
              onSelect={setFechaSeleccionada}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 p-4">
            <Input
              placeholder="Nombre del cliente"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
            <Textarea
              placeholder="Descripción del evento"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <Button onClick={agregarEvento}>Añadir Evento</Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-xl">Fechas Contratadas</h3>
        {eventos.length === 0 ? (
          <p className="text-muted-foreground">No hay fechas añadidas.</p>
        ) : (
          <ul className="space-y-1">
            {eventos.map((evento) => (
              <li key={evento.id} className="border rounded-md p-2">
                <p><strong>{evento.fecha.toDateString()}</strong> - {evento.cliente}</p>
                <p className="text-sm text-muted-foreground">{evento.descripcion}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
