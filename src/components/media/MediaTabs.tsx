import { useState } from "react";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";

type MediaTabsProps = {
  images: string[];
  videos: string[];
};

export default function MediaTabs({ images, videos }: MediaTabsProps) {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button onClick={() => setActiveTab("images")} className={activeTab === "images" ? "font-bold" : ""}>
          Imágenes
        </button>
        <button onClick={() => setActiveTab("videos")} className={activeTab === "videos" ? "font-bold" : ""}>
          Videos
        </button>
      </div>

      {activeTab === "images" ? <ImageGallery images={images} /> : <VideoGallery videos={videos} />}
    </div>
  );
}
