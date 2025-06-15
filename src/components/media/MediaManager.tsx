import MediaUpload from "./MediaUpload";
import MediaTabs from "./MediaTabs";
import { useState } from "react";

export default function MediaManager() {
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  const handleUpload = (files: File[]) => {
    const imageFiles = files.filter((f) => f.type.startsWith("image"));
    const videoFiles = files.filter((f) => f.type.startsWith("video"));

    setImages((prev) => [...prev, ...imageFiles.map((f) => URL.createObjectURL(f))]);
    setVideos((prev) => [...prev, ...videoFiles.map((f) => URL.createObjectURL(f))]);
  };

  return (
    <div className="space-y-4">
      <MediaUpload onUpload={handleUpload} />
      <MediaTabs images={images} videos={videos} />
    </div>
  );
}
