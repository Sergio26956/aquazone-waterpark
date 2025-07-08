import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export default async function handler(req: any, res: any) {
  try {
    const result = await cloudinary.search
      .expression('folder:default') // Cambia si usas otra carpeta
      .sort_by('created_at', 'desc')
      .max_results(30)
      .execute();

    const urls = result.resources.map((file: any) => file.secure_url);
    res.status(200).json({ urls });
  } catch (err) {
    res.status(500).json({ error: 'Error al cargar medios' });
  }
}
