"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlus, Trash2 } from "lucide-react";

type MediaFile = {
  name: string;
  url: string;
};

export default function MediaManager() {
  const [media, setMedia] = useState<MediaFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("mediaGallery");
    if (stored) setMedia(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("mediaGallery", JSON.stringify(media));
  }, [media]);

  const handleUpload = () => {
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const url = reader.result as string;
      const newFile = { name: selectedFile.name, url };
      setMedia((prev) => [...prev, newFile]);
      setSelectedFile(null);
    };
    reader.readAsDataURL(selectedFile);
  };

  const deleteImage = (name: string) => {
    setMedia((prev) => prev.filter((file) => file.name !== name));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          className="cursor-pointer"
        />
        <Button
          onClick={handleUpload}
          disabled={!selectedFile}
          className="flex gap-2 items-center"
        >
          <ImagePlus size={16} />
          Subir imagen
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {media.map((file, idx) => (
          <Card key={idx} className="relative group overflow-hidden">
            <img
              src={file.url}
              alt={file.name}
              className="w-full h-40 object-cover transition-all group-hover:scale-105"
            />
            <CardContent className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="destructive"
                size="icon"
                onClick={() => deleteImage(file.name)}
              >
                <Trash2 size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
