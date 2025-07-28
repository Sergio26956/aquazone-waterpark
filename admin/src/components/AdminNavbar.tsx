import React from 'react';
import { LogOut } from 'lucide-react';

const AdminNavbar: React.FC<{ onLogout: () => void }> = ({ onLogout }) => (
  <nav className="flex justify-between items-center bg-gradient-to-r from-cyan-700 to-blue-900 text-white p-4 shadow-xl rounded-b-2xl animate-fade-in-down">
    <h1 className="text-2xl font-bold tracking-wide">Panel de Administración</h1>
    <button
      onClick={onLogout}
      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-xl"
    >
      <LogOut size={18} />
      Cerrar sesión
    </button>
  </nav>
);

export default AdminNavbar;
