"use client";

import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

export default function CallToActionSection() {
  return (
    <section className="relative bg-[#0d1b2a] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <h2 className="mb-6 text-4xl font-bold">¿Estás listo para vivir la experiencia AQUAZONE?</h2>
          <p className="mb-8 text-lg text-white/80">
            Explora nuestros parques, sumérgete en las atracciones más espectaculares y reserva tu aventura.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Button size="lg" className="text-lg">
            Ver Parques Acuáticos
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
