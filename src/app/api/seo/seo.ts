import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    title: 'AQUAZONE Water Park - Diversión sin límites',
    description:
      'Explora nuestros parques acuáticos hinchables y vive experiencias únicas en playas, piscinas y ciudades. Reservas abiertas para la temporada.',
    keywords: [
      'AQUAZONE',
      'parque acuático',
      'hinchables',
      'verano',
      'eventos',
      'diversión',
      'flotantes',
      'urbano',
    ],
    url: 'https://aquazone.com',
    author: 'AQUAZONE Team',
    publisher: 'AQUAZONE',
    robots: 'index, follow',
  });
}
