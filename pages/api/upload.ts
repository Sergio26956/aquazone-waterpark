import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs';

cloudinary.config({
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
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = '/tmp';
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error al procesar el archivo' });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file) {
      return res.status(400).json({ error: 'Archivo no encontrado' });
    }

    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        folder: 'aquazone',
      });

      // Borrar temp
      fs.unlinkSync(file.filepath);

      return res.status(200).json({ url: result.secure_url });
    } catch (uploadError) {
      return res.status(500).json({ error: 'Error al subir a Cloudinary' });
    }
  });
}
