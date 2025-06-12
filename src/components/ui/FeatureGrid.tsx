type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  { title: 'Modular', description: 'Diseño adaptable a cualquier espacio.', icon: '🧩' },
  { title: 'Seguro', description: 'Cumple con todas las normativas.', icon: '🛡️' },
  { title: 'Divertido', description: 'Garantía de diversión para todas las edades.', icon: '🎉' },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-10">
      {features.map((f, i) => (
        <div key={i} className="p-4 bg-white shadow rounded">
          <div className="text-4xl mb-2">{f.icon}</div>
          <h4 className="text-xl font-bold">{f.title}</h4>
          <p className="text-gray-600">{f.description}</p>
        </div>
      ))}
    </div>
  );
}
