'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    setLoading(false);

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-cyan-900 to-blue-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-10 w-full max-w-md text-white shadow-lg"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-center drop-shadow-md">Acceso Administrativo</h1>
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 rounded-lg mb-6 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoFocus
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-cyan-500 rounded-lg font-bold hover:bg-cyan-600 transition disabled:opacity-50"
        >
          {loading ? 'Verificando...' : 'Entrar'}
        </button>
      </form>
    </main>
  );
}
