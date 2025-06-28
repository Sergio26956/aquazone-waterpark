"use client";
import React from "react";

export default function EstadisticasPanel() {
  return (
    <section className="p-8 bg-gradient-to-br from-gray-100 to-white rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Panel detallado</h3>
      <ul className="space-y-2">
        <li>✔️ Parque Urbano – 67% capacidad</li>
        <li>✔️ Parque Flotante – 82% capacidad</li>
        <li>✔️ Consultas nuevas – 23 hoy</li>
        <li>✔️ Reservas esta semana – 87</li>
      </ul>
    </section>
  );
}
