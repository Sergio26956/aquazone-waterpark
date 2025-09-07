import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const { type } = req.query;

      if (type === "events") {
        const events = await prisma.event.findMany({
          include: { user: true },
          orderBy: { createdAt: "desc" }
        });
        return res.status(200).json(events);
      }

      if (type === "users") {
        const users = await prisma.user.findMany({
          include: { events: true }
        });
        return res.status(200).json(users);
      }

      return res.status(400).json({ error: "Parámetro 'type' inválido" });
    }

    if (req.method === "POST") {
      const { type, data } = req.body;

      if (type === "event") {
        const newEvent = await prisma.event.create({
          data: {
            title: data.title,
            date: new Date(data.date),
            user: { connect: { id: data.userId } }
          }
        });
        return res.status(201).json({ message: "Evento creado", newEvent });
      }

      if (type === "user") {
        const newUser = await prisma.user.create({
          data: {
            name: data.name,
            email: data.email
          }
        });
        return res.status(201).json({ message: "Usuario creado", newUser });
      }

      return res.status(400).json({ error: "Tipo inválido" });
    }

    return res.status(405).json({ error: "Método no permitido" });
  } catch (error) {
    console.error("Error en API:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
