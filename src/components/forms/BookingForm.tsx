'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', date: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        className="w-full border px-4 py-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        className="w-full border px-4 py-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        className="w-full border px-4 py-2 rounded"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Reservar
      </button>
    </form>
  );
}
