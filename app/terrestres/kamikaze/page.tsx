import React from "react";
import Image from "next/image";

const KamikazePage = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-5xl font-bold mb-6">Kamikaze Jump</h1>
      <p className="mb-4 text-lg max-w-4xl">
        Kamikaze Jump es una atracción extrema diseñada para los más valientes. 
        Este parque acuático terrestre incluye una impresionante rampa vertical desde la que los participantes se lanzan a gran velocidad hacia una piscina inflable gigante. 
        Perfecto para eventos urbanos, ferias o fiestas acuáticas, garantiza adrenalina pura y diversión máxima.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image src="/images/kamikaze-1.jpg" alt="Kamikaze Jump" width={800} height={600} className="rounded-xl shadow-xl" />
        <Image src="/images/kamikaze-2.jpg" alt="Kamikaze Jump Action" width={800} height={600} className="rounded-xl shadow-xl" />
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Características:</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Altura: 8 metros</li>
          <li>Requiere una superficie de 12 x 5 metros</li>
          <li>Incluye piscina de recepción inflable</li>
          <li>Personal de seguridad y monitores incluidos</li>
          <li>Ideal para mayores de 10 años</li>
        </ul>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Galería de Video:</h2>
        <video controls className="w-full rounded-xl shadow-xl">
          <source src="/videos/kamikaze-highlight.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    </div>
  );
};

export default KamikazePage;
