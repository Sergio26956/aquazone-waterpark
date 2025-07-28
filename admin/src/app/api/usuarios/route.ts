import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const usuarios = await prisma.usuario.findMany({
    orderBy: { creadoEn: 'desc' }
  });

  return NextResponse.json(usuarios);
}
