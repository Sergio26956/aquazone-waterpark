export default function UsersPage() {
  const users = [
    { id: 1, name: "Sergio", email: "sergio@aquazone.com", role: "Admin" },
    { id: 2, name: "Operador", email: "op@aquazone.com", role: "Staff" },
  ]

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Usuarios</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Nombre</th>
            <th className="p-2">Email</th>
            <th className="p-2">Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
