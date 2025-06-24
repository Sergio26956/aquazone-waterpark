import FeatureCard from "./FeatureCard";
import { FaWater, FaSun, FaSwimmer, FaUmbrellaBeach } from "react-icons/fa";

export default function FeatureGrid() {
  const features = [
    {
      title: "Atracciones Acuáticas",
      description: "Disfruta de parques flotantes, piscinas y más.",
      icon: <FaSwimmer />,
    },
    {
      title: "Zonas de Sombra",
      description: "Áreas cómodas con sombra y descanso.",
      icon: <FaUmbrellaBeach />,
    },
    {
      title: "Climatización Natural",
      description: "Ambientes frescos gracias al agua y brisa.",
      icon: <FaSun />,
    },
    {
      title: "Diversión Asegurada",
      description: "Actividades para todas las edades.",
      icon: <FaWater />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
      {features.map((f, i) => (
        <FeatureCard key={i} {...f} />
      ))}
    </div>
  );
}
