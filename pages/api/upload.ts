import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: 'Error en el servidor' });

    const file = files.file as formidable.File;

    if (!file) return res.status(400).json({ message: 'Archivo no proporcionado' });

    try {
      const result = await cloudinary.v2.uploader.upload(file.filepath, {
        folder: 'aquazone',
        resource_type: 'auto', // soporta imagen o vídeo
      });

      // 🧹 Borrar archivo temporal
      fs.unlinkSync(file.filepath); // borrar temp

      return res.status(200).json({ url: result.secure_url });
    } catch (error) {
      console.error('Error al subir a Cloudinary:', error);
      return res.status(500).json({ message: 'Error al subir archivo' });
    }
  });
}
