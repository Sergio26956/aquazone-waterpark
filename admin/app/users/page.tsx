"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Title } from "@/components/ui/admin/common/Title";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Sergio", email: "sergio@example.com" },
    { id: 2, name: "Cliente 1", email: "cliente1@example.com" },
  ]);

  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");

  useEffect(() => {
    document.title = "Gestión de Usuarios | AQUAZONE 2030";
  }, []);

  const addUser = () => {
    if (newUserName.trim() && newUserEmail.trim()) {
      const newUser: User = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name: newUserName.trim(),
        email: newUserEmail.trim(),
      };
      setUsers([...users, newUser]);
      setNewUserName("");
      setNewUserEmail("");
    }
  };

  const removeUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <motion.div
      className="p-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title text="Gestión de Usuarios" />
      <div className="mt-6 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nombre"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <Button onClick={addUser} disabled={!newUserName.trim() || !newUserEmail.trim()}>
        Añadir Usuario
      </Button>

      <ul className="mt-6 space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center p-3 border border-gray-300 rounded"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <button
              onClick={() => removeUser(user.id)}
              className="text-red-600 hover:text-red-800 font-bold"
              aria-label="Eliminar usuario"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
