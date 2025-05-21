"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginPage = () => {
  const router = useRouter()
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === "1234") {
      document.cookie = `admin-token=1234; path=/`
      router.push("/admin/dashboard")
    } else {
      alert("Acceso denegado")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-sm">
        <h1 className="text-xl font-bold">Acceso Privado</h1>
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default LoginPage
