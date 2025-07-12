'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      router.push('/admin');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Acceso Privado</h2>
      <input
        type="password"
        placeholder="Contraseña"
        className="w-full border p-2 rounded mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Entrar
      </button>
    </form>
  );
}
