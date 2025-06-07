'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const AdminDashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Link href="/admin/editor">
        <Card className="hover:shadow-lg cursor-pointer">
          <CardContent className="p-6 text-center font-bold">Editor de Contenido</CardContent>
        </Card>
      </Link>
      <Link href="/admin/campañas">
        <Card className="hover:shadow-lg cursor-pointer">
          <CardContent className="p-6 text-center font-bold">Gestor de Campañas</CardContent>
        </Card>
      </Link>
      <Link href="/admin/builder">
        <Card className="hover:shadow-lg cursor-pointer">
          <CardContent className="p-6 text-center font-bold">Editor Visual</CardContent>
        </Card>
      </Link>
      <Link href="/admin/social">
        <Card className="hover:shadow-lg cursor-pointer">
          <CardContent className="p-6 text-center font-bold">Redes Sociales</CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default AdminDashboard;
