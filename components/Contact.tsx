"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviado correctamente");
  };

  return (
    <div id="contacto" className="max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Nombre" className="w-full border px-4 py-2" required />
        <input type="email" placeholder="Correo" className="w-full border px-4 py-2" required />
        <textarea placeholder="Mensaje" className="w-full border px-4 py-2" rows={4} required />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2">Enviar</button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
}
