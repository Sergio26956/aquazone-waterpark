"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === "admin@aquazone.com" && pass === "1234") {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return <p className="text-green-600">Acceso concedido al panel de administración.</p>;
  }

  return (
    <div className="p-4 max-w-sm mx-auto border rounded bg-white shadow">
      <h3 className="mb-2 font-bold text-xl">Panel Administrativo</h3>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-2 px-3 py-2 border"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="w-full mb-2 px-3 py-2 border"
      />
      <button onClick={handleLogin} className="bg-blue-600 text-white w-full py-2">Entrar</button>
    </div>
  );
}
