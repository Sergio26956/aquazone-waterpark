'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <Card className="hover:shadow-lg cursor-pointer" onClick={() => router.push('/admin/editor')}>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1">Editor de Contenido</h3>
          <p className="text-sm text-muted-foreground">Edita el contenido visual de la web.</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg cursor-pointer" onClick={() => router.push('/admin/campañas')}>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1">Campañas</h3>
          <p className="text-sm text-muted-foreground">Gestiona campañas de publicidad y redes sociales.</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg cursor-pointer" onClick={() => router.push('/admin/seo')}>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1">SEO</h3>
          <p className="text-sm text-muted-foreground">Optimización de motores de búsqueda.</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg cursor-pointer" onClick={() => router.push('/admin/feed')}>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1">Redes Sociales</h3>
          <p className="text-sm text-muted-foreground">Vista en tiempo real de redes sociales.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
