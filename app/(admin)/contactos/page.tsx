export default function ContactsPage() {
  const messages = [
    { id: 1, name: "Cliente 1", email: "cliente1@email.com", message: "Consulta sobre parque." },
    { id: 2, name: "Cliente 2", email: "cliente2@email.com", message: "Solicito presupuesto." },
  ]

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contactos</h2>
      <ul className="space-y-4">
        {messages.map((msg) => (
          <li key={msg.id} className="border rounded p-4">
            <p><strong>Nombre:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Mensaje:</strong> {msg.message}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
