'use client';

const users = [
  { name: 'Usuario 1', email: 'user1@example.com' },
  { name: 'Usuario 2', email: 'user2@example.com' },
];

export default function UserManager() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Gestión de Usuarios</h3>
      <ul className="space-y-2">
        {users.map((user, i) => (
          <li key={i} className="bg-gray-100 p-2 rounded shadow">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
