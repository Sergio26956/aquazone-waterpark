"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (user === "admin" && pass === "1234") {
      router.push("/admin/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Acceso Administrativo</h2>
        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Usuario"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 mb-4 border rounded"
          placeholder="Contraseña"
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={login} className="w-full bg-blue-800 text-white py-2 rounded">
          Entrar
        </button>
      </div>
    </div>
  );
}
