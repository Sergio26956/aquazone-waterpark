import { NextApiRequest, NextApiResponse } from "next";

// Datos simulados para pruebas
let events: string[] = [];
let users = [
  { id: 1, name: "Sergio", email: "sergio@example.com" },
  { id: 2, name: "Cliente 1", email: "cliente1@example.com" },
];

// Maneja GET y POST para eventos y usuarios
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { type } = req.query;
    if (type === "events") {
      return res.status(200).json({ events });
    } else if (type === "users") {
      return res.status(200).json({ users });
    }
    return res.status(400).json({ error: "Parámetro 'type' inválido" });
  }

  if (req.method === "POST") {
    const { type, data } = req.body;

    if (type === "event") {
      if (!data?.event) return res.status(400).json({ error: "Evento inválido" });
      events.push(data.event);
      return res.status(201).json({ message: "Evento añadido", events });
    }

    if (type === "user") {
      if (!data?.name || !data?.email)
        return res.status(400).json({ error: "Datos de usuario incompletos" });

      const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name: data.name,
        email: data.email,
      };
      users.push(newUser);
      return res.status(201).json({ message: "Usuario añadido", users });
    }

    return res.status(400).json({ error: "Tipo inválido" });
  }

  return res.status(405).json({ error: "Método no permitido" });
}
