"use client";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function HighlightCard({ title, description, icon }: HighlightCardProps) {
  return (
    <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-xl transition-transform hover:scale-105">
      <div className="mb-4 text-4xl text-yellow-300">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
    </div>
  );
}
