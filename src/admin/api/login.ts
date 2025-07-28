import type { NextApiRequest, NextApiResponse } from 'next';
import { signToken } from '../auth';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    const token = signToken({ role: 'admin' });
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=7200; SameSite=Strict; Secure`);
    return res.status(200).json({ message: 'Login correcto' });
  }

  return res.status(401).json({ message: 'Contraseña incorrecta' });
}
