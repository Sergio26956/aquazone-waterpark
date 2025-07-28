"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";

moment.locale("es");
const localizer = momentLocalizer(moment);

type Evento = {
  title: string;
  start: Date;
  end: Date;
};

export default function Calendario() {
  const router = useRouter();
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    const auth = localStorage.getItem("aquazone_auth");
    if (auth !== "true") router.push("/admin/login");

    const stored = localStorage.getItem("aquazone_eventos");
    if (stored) setEventos(JSON.parse(stored));
  }, []);

  const agregarEvento = ({ start, end }: { start: Date; end: Date }) => {
    const titulo = prompt("Título del evento:");
    if (titulo) {
      const nuevoEvento = { title: titulo, start, end };
      const actualizados = [...eventos, nuevoEvento];
      setEventos(actualizados);
      localStorage.setItem("aquazone_eventos", JSON.stringify(actualizados));
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-white to-blue-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">
        Calendario de Contrataciones AQUAZONE
      </h1>
      <div className="bg-white p-4 rounded-2xl shadow-xl">
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={agregarEvento}
          style={{ height: "80vh" }}
          messages={{
            next: "Sig.",
            previous: "Ant.",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            agenda: "Agenda",
            date: "Fecha",
            time: "Hora",
            event: "Evento",
            noEventsInRange: "No hay eventos",
            showMore: (total) => `+ Ver ${total} más`,
          }}
        />
      </div>
    </div>
  );
}
