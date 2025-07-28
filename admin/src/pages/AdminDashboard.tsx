import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('usuarios');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-950 to-sky-900 text-white">
      <AdminSidebar active={activeSection} setActive={setActiveSection} />
      <main className="flex-1 p-6 overflow-auto">
        <AdminNavbar onLogout={handleLogout} />
        <div className="mt-6">
          {activeSection === 'usuarios' && <p className="text-xl">Gestión de usuarios (proximamente)</p>}
          {activeSection === 'calendario' && <p className="text-xl">Calendario (proximamente)</p>}
          {activeSection === 'galeria' && <p className="text-xl">Galería multimedia (proximamente)</p>}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
