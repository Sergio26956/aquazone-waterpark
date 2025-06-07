"use client"

import { useRouter } from "next/navigation"

const LoginPage = () => {
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular login, luego redirigir al panel
    router.push("/admin/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="space-y-4 bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
        <input type="text" placeholder="Usuario" className="w-full p-2 border rounded" required />
        <input type="password" placeholder="Contraseña" className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default LoginPage
