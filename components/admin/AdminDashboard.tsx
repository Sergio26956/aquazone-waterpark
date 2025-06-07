import React from 'react';
import SocialFeed from './SocialFeed';

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Zona Administrativa Privada</h1>
      
      {/* Otros bloques que ya tengas */}

      {/* Bloque Redes Sociales */}
      <SocialFeed />
    </div>
  );
};

export default AdminDashboard;
