import { ReactNode } from "react";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function HighlightCard({ title, description, icon }: HighlightCardProps) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 text-white shadow-md hover:shadow-lg transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
}
