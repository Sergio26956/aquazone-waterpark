'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Formulario enviado correctamente');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow max-w-md">
      <input name="name" type="text" placeholder="Nombre" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="email" type="email" placeholder="Correo electrónico" onChange={handleChange} required className="w-full p-2 border rounded" />
      <textarea name="message" placeholder="Mensaje" rows={4} onChange={handleChange} required className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow">Enviar</button>
    </form>
  );
}
