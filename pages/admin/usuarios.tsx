import UsuariosRegistrados from "@/components/admin/UsuariosRegistrados";

export default function Usuarios() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Gestión de Usuarios - AQUAZONE
      </h1>
      <UsuariosRegistrados />
    </div>
  );
}
