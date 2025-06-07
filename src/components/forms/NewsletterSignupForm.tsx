'use client';
import { useState } from 'react';

export default function NewsletterSignupForm() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Suscríbete al Boletín</h2>
      <input
        type="email"
        required
        placeholder="Tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Suscribirme
      </button>
      {success && <p className="text-green-600">¡Gracias por suscribirte!</p>}
    </form>
  );
}
