"use client";

import ScrollReveal from "./ScrollReveal";
import HighlightCard from "./HighlightCard";
import { Sparkles, Rocket, Star } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      title: "Diseño Impactante",
      description: "Cada sección está creada con efectos visuales únicos y tecnología de última generación.",
      icon: <Sparkles className="w-10 h-10" />,
    },
    {
      title: "Contenido Dinámico",
      description: "Gestión de textos, imágenes y vídeos desde el panel sin tocar el código.",
      icon: <Rocket className="w-10 h-10" />,
    },
    {
      title: "Experiencia Inmersiva",
      description: "Animaciones suaves y fluidas que cautivan al usuario en cada interacción.",
      icon: <Star className="w-10 h-10" />,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0d1b2a] to-[#1b263b] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">¿Por qué elegir Aquazone?</h2>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.3}>
              <HighlightCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
