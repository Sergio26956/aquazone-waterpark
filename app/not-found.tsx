'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-lg mb-6">La página que buscas no existe o fue movida.</p>
      <Link href="/" className="text-white bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition">
        Volver al Inicio
      </Link>
    </div>
  );
}
