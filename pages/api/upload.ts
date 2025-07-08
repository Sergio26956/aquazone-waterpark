import type { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
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
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const form = new IncomingForm();

  form.parse(req, async (err, fields, files: any) => {
    if (err) return res.status(500).json({ error: 'Error al procesar el archivo' });

    const file = files.file[0];
    const data = fs.readFileSync(file.filepath);

    try {
      const upload = await cloudinary.v2.uploader.upload_stream(
        { folder: 'aquazone' },
        (error, result) => {
          if (error || !result) return res.status(500).json({ error: 'Fallo en subida' });
          return res.status(200).json({ url: result.secure_url });
        }
      );

      // subir el archivo al stream
      const readable = fs.createReadStream(file.filepath);
      readable.pipe(upload);

      // borrar temp
      fs.unlinkSync(file.filepath);
    } catch (e) {
      res.status(500).json({ error: 'Error al subir a Cloudinary' });
    }
  });
}
