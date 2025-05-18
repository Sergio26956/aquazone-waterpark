export default function ContactoPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Contacto</h1>
      <p className="mb-4 text-gray-700">Para más información, rellena el siguiente formulario.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Nombre" className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Correo electrónico" className="w-full p-3 border rounded-md" />
        <textarea placeholder="Mensaje" rows={5} className="w-full p-3 border rounded-md" />
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md">
          Enviar
        </button>
      </form>
    </div>
  )
}
