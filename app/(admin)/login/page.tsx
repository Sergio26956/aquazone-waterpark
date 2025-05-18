"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      router.push("/admin")
    } else {
      setError("Contraseña incorrecta")
    }
  }

  return (
    <main className="h-screen flex items-center justify-center bg-neutral-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Área privada</h2>
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border border-gray-300 p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </div>
    </main>
  )
}
