'use client';

const users = [
  { id: 1, name: 'Carlos Pérez', email: 'carlos@mail.com', role: 'admin' },
  { id: 2, name: 'Laura Gómez', email: 'laura@mail.com', role: 'user' },
];

export default function UsersManager() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Gestión de usuarios</h2>
      <table className="w-full text-left border">
        <thead>
          <tr>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
