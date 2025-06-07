'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Contacto</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Tu nombre"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Tu email"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Tu mensaje"
        className="w-full p-2 border border-gray-300 rounded"
        rows={4}
      />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
        Enviar
      </button>
      {submitted && <p className="text-green-600">Mensaje enviado correctamente.</p>}
    </form>
  );
}
