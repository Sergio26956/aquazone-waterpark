import ListaUsuarios from '@/components/admin/ListaUsuarios';
import RegistroUsuario from '@/components/admin/RegistroUsuario';

export default function UsuariosPage() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen space-y-6">
      <ListaUsuarios />
      <RegistroUsuario />
    </main>
  );
}
