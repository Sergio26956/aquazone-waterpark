'use client';
import { useState } from 'react';

export default function HiddenContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="text-green-500 text-center py-8">¡Gracias por tu mensaje!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="hidden">
      <input type="text" name="nombre" placeholder="Nombre" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="mensaje" placeholder="Mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}
