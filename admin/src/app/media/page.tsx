"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { UploadCloud, Loader2, Trash } from "lucide-react";

interface MediaItem {
  id: string;
  url: string;
  tipo: "imagen" | "video";
}

export default function MediaPage() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch("/api/media")
      .then((res) => res.json())
      .then((data) => {
        setMedia(data);
        setLoading(false);
      });
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/media", {
      method: "POST",
      body: formData,
    });

    const newItem = await res.json();
    setMedia((prev) => [...prev, newItem]);
    setUploading(false);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/media/${id}`, { method: "DELETE" });
    setMedia((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-black to-indigo-950 text-white">
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gestor Multimedia
      </motion.h1>

      <Card className="bg-slate-900/80 border border-indigo-400/20 rounded-2xl shadow-xl mb-8">
        <CardContent className="p-6">
          <label className="block mb-2">Subir archivo</label>
          <div className="flex gap-4 items-center">
            <Input type="file" accept="image/*,video/*" onChange={handleUpload} />
            <Button disabled={uploading} className="gap-2">
              {uploading ? (
                <>
                  <Loader2 className="animate-spin w-4 h-4" /> Subiendo...
                </>
              ) : (
                <>
                  <UploadCloud className="w-4 h-4" /> Subir
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full flex justify-center py-10">
            <Loader2 className="animate-spin w-8 h-8 text-indigo-300" />
          </div>
        ) : media.length === 0 ? (
          <p className="text-gray-400 col-span-full">No hay medios subidos aún.</p>
        ) : (
          media.map((item) => (
            <motion.div
              key={item.id}
              className="relative group rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {item.tipo === "imagen" ? (
                <img src={item.url} alt="" className="w-full h-64 object-cover" />
              ) : (
                <video
                  src={item.url}
                  controls
                  className="w-full h-64 object-cover bg-black"
                />
              )}
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-md hidden group-hover:block transition"
              >
                <Trash className="h-4 w-4 text-white" />
              </button>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
