'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

export default function AdminTabs() {
  return (
    <Tabs defaultValue="reservas" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="reservas">Reservas</TabsTrigger>
        <TabsTrigger value="usuarios">Usuarios</TabsTrigger>
        <TabsTrigger value="facturacion">Facturación</TabsTrigger>
      </TabsList>
      <TabsContent value="reservas">
        <p>Contenido de reservas aquí.</p>
      </TabsContent>
      <TabsContent value="usuarios">
        <p>Lista de usuarios activos y registrados.</p>
      </TabsContent>
      <TabsContent value="facturacion">
        <p>Resumen de ingresos y facturas emitidas.</p>
      </TabsContent>
    </Tabs>
  );
}
