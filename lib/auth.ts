export function verifyPassword(password: string) {
  return password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
}
