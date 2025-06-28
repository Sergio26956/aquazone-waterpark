"use client";
import React from "react";

export default function Estadisticas() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-xl text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Estadísticas generales</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg">Reservas: 123</div>
        <div className="bg-green-100 p-4 rounded-lg">Usuarios: 78</div>
        <div className="bg-yellow-100 p-4 rounded-lg">Eventos: 15</div>
        <div className="bg-red-100 p-4 rounded-lg">Visitas: 3200</div>
      </div>
    </div>
  );
}
