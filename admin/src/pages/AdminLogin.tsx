import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const correctPassword = 'Saioa6122012';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-sky-800 to-blue-950 text-white animate-fade-in">
      <form onSubmit={handleLogin} className="bg-blue-800 p-10 rounded-2xl shadow-2xl space-y-6">
        <h2 className="text-3xl font-bold">Acceso Privado</h2>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-blue-600 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
