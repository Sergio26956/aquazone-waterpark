// app/dashboard/page.tsx

import { Card, CardContent } from "@/components/ui/card"; import { Calendar } from "@/components/ui/calendar"; import { eventos } from "@/data/eventos"; import { format } from "date-fns";

export default function DashboardPage() { return ( <div className="p-4"> <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">Calendario de Contrataciones</h2>
        <Calendar
          mode="single"
          selected={undefined}
          modifiers={{
            contratado: eventos.map((ev) => new Date(ev.fecha)),
          }}
          modifiersClassNames={{ contratado: "bg-red-500 text-white" }}
        />
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">Próximas Contrataciones</h2>
        <ul>
          {eventos.map((ev) => (
            <li key={ev.id} className="mb-2">
              <span className="font-medium">{format(new Date(ev.fecha), "dd/MM/yyyy")}:</span> {ev.descripcion}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
</div>

); }

