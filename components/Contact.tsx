export default function Contacto() {
  return (
    <section className="p-6 bg-white mt-8 rounded shadow">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <form className="grid gap-4 max-w-md">
        <input type="text" placeholder="Nombre" className="border p-2 rounded" required />
        <input type="email" placeholder="Correo electrónico" className="border p-2 rounded" required />
        <textarea placeholder="Mensaje" className="border p-2 rounded h-32" required />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Enviar</button>
      </form>
    </section>
  );
}
