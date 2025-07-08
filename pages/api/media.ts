import { v2 as cloudinary } from 'cloudinary';
import type { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await cloudinary.search
      .expression('folder:uploads') // carpeta base (puedes cambiarla si subes a otra)
      .sort_by('created_at', 'desc')
      .max_results(30)
      .execute();

    res.status(200).json(result);
  } catch (error) {
    console.error('Error Cloudinary media API:', error);
    res.status(500).json({ error: 'Error al cargar archivos.' });
  }
}
