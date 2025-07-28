import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret_2030_aquazone';

export function signToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: '2h' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}
