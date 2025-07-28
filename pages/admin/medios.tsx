"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type MediaFile = {
  name: string;
  type: string;
  url: string;
};

export default function Medios() {
  const router = useRouter();
  const [archivos, setArchivos] = useState<MediaFile[]>([]);

  useEffect(() => {
    const auth = localStorage.getItem("aquazone_auth");
    if (auth !== "true") router.push("/admin/login");

    const stored = localStorage.getItem("aquazone_medios");
    if (stored) setArchivos(JSON.parse(stored));
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const nuevos: MediaFile[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        const url = reader.result as string;
        const nuevoArchivo: MediaFile = {
          name: file.name,
          type: file.type,
          url,
        };

        const actualizados = [...archivos, nuevoArchivo];
        setArchivos(actualizados);
        localStorage.setItem("aquazone_medios", JSON.stringify(actualizados));
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-white to-blue-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">
        Gestor de Medios AQUAZONE
      </h1>

      <div className="mb-6 text-center">
        <input
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleUpload}
          className="text-sm p-2 border rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {archivos.map((file, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md overflow-hidden bg-white"
          >
            {file.type.startsWith("image/") ? (
              <img src={file.url} alt={file.name} className="w-full h-48 object-cover" />
            ) : (
              <video controls className="w-full h-48 object-cover">
                <source src={file.url} type={file.type} />
              </video>
            )}
            <div className="p-2 text-center text-sm text-gray-600">{file.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
