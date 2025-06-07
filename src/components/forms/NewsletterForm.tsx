'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubscribe} className="space-y-2 p-4 bg-gray-100 rounded">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu correo electrónico"
        className="w-full border p-2 rounded"
        required
      />
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
        Suscribirse
      </button>
      {submitted && <p className="text-green-600 text-sm">¡Gracias por suscribirte!</p>}
    </form>
  );
}
