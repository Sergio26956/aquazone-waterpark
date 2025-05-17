import { parques } from "@/lib/data";

export default function SectionParques() {
  return (
    <section className="p-6 bg-white rounded shadow-xl">
      <h2 className="text-3xl font-bold mb-4">Parques Acuáticos</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Flotantes: Piscinas</h3>
          {parques.flotantes.piscinas.map((p, i) => (
            <div key={i} className="mb-3">
              <img src={p.imagen} alt={p.nombre} className="rounded w-full mb-1" />
              <p className="font-bold">{p.nombre}</p>
              <p>{p.descripcion}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Flotantes: Playas</h3>
          {parques.flotantes.playas.map((p, i) => (
            <div key={i} className="mb-3">
              <img src={p.imagen} alt={p.nombre} className="rounded w-full mb-1" />
              <p className="font-bold">{p.nombre}</p>
              <p>{p.descripcion}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Urbanos: Actividades</h3>
          {parques.urbanos.actividades.map((p, i) => (
            <div key={i} className="mb-3">
              <img src={p.imagen} alt={p.nombre} className="rounded w-full mb-1" />
              <p className="font-bold">{p.nombre}</p>
              <p>{p.descripcion}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Kamikaze Jump</h3>
          {parques.urbanos.kamikazeJump.map((p, i) => (
            <div key={i} className="mb-3">
              <img src={p.imagen} alt={p.nombre} className="rounded w-full mb-1" />
              <p className="font-bold">{p.nombre}</p>
              <p>{p.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
