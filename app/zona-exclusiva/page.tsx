'use client'
import { useState } from 'react'

export default function ZonaExclusiva() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const ACCESS_PASSWORD = 'aquazone2025' // puedes cambiarla

  const handleLogin = () => {
    if (password === ACCESS_PASSWORD) {
      setLoggedIn(true)
    } else {
      alert('Contraseña incorrecta')
    }
  }

  if (loggedIn) {
    return (
      <section className="min-h-screen bg-slate-900 text-white p-10">
        <h1 className="text-3xl font-bold mb-4">Zona Exclusiva</h1>
        <p className="text-lg mb-6">Bienvenido. Aquí puedes gestionar tu contenido, fechas y clientes.</p>
        {/* Aquí puedes añadir calendarios, gestor de usuarios, etc. */}
      </section>
    )
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-slate-800 text-white px-4">
      <h2 className="text-2xl font-semibold mb-4">Acceso exclusivo</h2>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 px-4 py-2 rounded bg-slate-700 border border-slate-600 text-white"
      />
      <button
        onClick={handleLogin}
        className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-2 rounded font-bold"
      >
        Entrar
      </button>
    </section>
  )
}
