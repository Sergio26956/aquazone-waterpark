"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    setTimeout(() => {
      setEnviado(true);
    }, 500);
  };

  return (
    <section className="w-full bg-gradient-to-b from-blue-900 to-blue-700 py-10 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Contacta con Nosotros
        </h2>

        {enviado ? (
          <div className="text-center text-green-300 text-xl font-semibold">
            ¡Mensaje enviado con éxito!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="p-3 rounded-xl text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-xl text-black"
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded-xl text-black"
            />
            <button
              type="submit"
              className="bg-white text-blue-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
