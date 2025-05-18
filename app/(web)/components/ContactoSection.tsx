"use client"

export default function ContactoSection() {
  return (
    <section id="contacto" className="py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            rows={5}
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
