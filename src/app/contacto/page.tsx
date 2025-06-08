'use client';
export default function ContactoPage() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Mensaje"
          className="w-full p-2 border rounded"
          rows={4}
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}
