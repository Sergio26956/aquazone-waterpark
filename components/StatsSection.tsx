"use client";
export default function StatsSection() {
  const stats = [
    { label: "Usuarios registrados", value: 2870 },
    { label: "Parques activos", value: 14 },
    { label: "Reservas confirmadas", value: 6240 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/10 p-6 rounded-xl shadow-xl">
      {stats.map((stat, idx) => (
        <div key={idx} className="text-center text-white">
          <p className="text-4xl font-bold">{stat.value}</p>
          <p className="text-sm mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
