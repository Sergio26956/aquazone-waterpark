export default function Stats() {
  const datos = [
    { label: "Eventos Activos", value: 12 },
    { label: "Clientes Registrados", value: 320 },
    { label: "Parques Montados", value: 45 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {datos.map((d) => (
        <div key={d.label} className="bg-white p-4 rounded shadow text-center">
          <h4 className="text-2xl font-bold text-blue-600">{d.value}</h4>
          <p>{d.label}</p>
        </div>
      ))}
    </div>
  );
}
