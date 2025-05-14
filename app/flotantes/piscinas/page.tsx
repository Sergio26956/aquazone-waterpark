"use client";

import React from "react";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";

const PiscinasPage = () => {
  return (
    <main className="min-h-screen bg-blue-100 py-10 px-4 md:px-20">
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">Parque Acuático Flotante - Piscinas</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Diseñado para ofrecer diversión sobre el agua con seguridad y adrenalina. Perfecto para piscinas de gran tamaño.
        </p>
      </section>

      <section className="mb-16">
        <VideoPlayer src="/videos/piscinas.mp4" poster="/images/piscinas-cover.jpg" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Características</h2>
          <ul className="list-disc pl-5 text-gray-800">
            <li>Módulos inflables de alta resistencia</li>
            <li>Fácil instalación y adaptabilidad</li>
            <li>Ideal para niños y adultos</li>
            <li>Supervisión sencilla con personal</li>
            <li>Materiales certificados y antideslizantes</li>
          </ul>
        </div>
        <div>
          <Image
            src="/images/piscinas-1.jpg"
            alt="Parque acuático en piscinas"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <Image src="/images/piscinas-2.jpg" alt="Piscina 1" width={400} height={300} className="rounded-lg" />
        <Image src="/images/piscinas-3.jpg" alt="Piscina 2" width={400} height={300} className="rounded-lg" />
        <Image src="/images/piscinas-4.jpg" alt="Piscina 3" width={400} height={300} className="rounded-lg" />
      </section>
    </main>
  );
};

export default PiscinasPage;
