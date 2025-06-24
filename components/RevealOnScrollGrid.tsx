import ScrollReveal from "./ScrollReveal";

const texts = [
  "Vive la experiencia AQUAZONE",
  "Atracciones únicas",
  "Diversión para toda la familia",
  "Tecnología y agua en armonía",
];

export default function RevealOnScrollGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 px-4">
      {texts.map((text, i) => (
        <ScrollReveal key={i} delay={i * 0.3}>
          <div className="bg-white/10 p-8 rounded-xl text-white text-center shadow-lg border border-white/10">
            <h3 className="text-xl font-semibold">{text}</h3>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
