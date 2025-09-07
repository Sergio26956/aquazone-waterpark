import { PrismaClient } from "@prisma/client";

declare global {
  // Permite reutilizar Prisma en desarrollo sin crear múltiples instancias
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
