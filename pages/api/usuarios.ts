import type { NextApiRequest, NextApiResponse } from "next";

const usuarios = [
  {
    id: 1,
    nombre: "Sergio Fernández",
    email: "sergio@aquazone.com",
    registrado: "2025-06-01",
  },
  {
    id: 2,
    nombre: "Laura Ríos",
    email: "laura@aquazone.com",
    registrado: "2025-06-15",
  },
  {
    id: 3,
    nombre: "David López",
    email: "david@aquazone.com",
    registrado: "2025-07-10",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(usuarios);
}
