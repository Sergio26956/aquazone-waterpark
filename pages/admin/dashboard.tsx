"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("aquazone_auth");
    if (auth !== "true") {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 p-10">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
        Panel de Control AQUAZONE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="/admin/usuarios"
          className="bg-blue-200 hover:bg-blue-300 p-6 rounded-2xl text-center shadow-xl text-blue-900 font-semibold transition"
        >
          Usuarios Registrados
        </a>
        <a
          href="/admin/calendario"
          className="bg-blue-200 hover:bg-blue-300 p-6 rounded-2xl text-center shadow-xl text-blue-900 font-semibold transition"
        >
          Calendario de Contrataciones
        </a>
        <a
          href="/admin/medios"
          className="bg-blue-200 hover:bg-blue-300 p-6 rounded-2xl text-center shadow-xl text-blue-900 font-semibold transition"
        >
          Gestión de Medios
        </a>
      </div>
    </div>
  );
}
