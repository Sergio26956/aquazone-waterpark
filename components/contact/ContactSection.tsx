"use client";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";

const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

export default function ContactSection() {
  return (
    <section id="contacto" className="w-full bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Información de Contacto
          </h2>
          <Card className="mb-6 bg-blue-50 shadow-xl rounded-2xl">
            <CardContent className="p-6 text-blue-800 space-y-3">
              <p><strong>📍 Dirección:</strong> Villanueva del Fresno, Badajoz, España</p>
              <p><strong>📞 Teléfono:</strong> +34 600 000 000</p>
              <p><strong>✉️ Email:</strong> info@aquazonewaterpark.com</p>
              <p><strong>🌐 Web:</strong> www.aquazonewaterpark.com</p>
            </CardContent>
          </Card>
          <div className="rounded-xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              title="Ubicación AQUAZONE"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.805442252353!2d-7.165965884671203!3d38.43148767964195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd187230cc7f7a31%3A0xc0f0df4c5a34dc2a!2sVillanueva%20del%20Fresno%2C%20Badajoz!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
