'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mensaje enviado:', form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        className="w-full border px-4 py-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        className="w-full border px-4 py-2 rounded"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Escribe tu mensaje..."
        rows={4}
        className="w-full border px-4 py-2 rounded"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
}
