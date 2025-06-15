import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
      <textarea name="message" placeholder="Mensaje" value={form.message} onChange={handleChange} className="w-full border p-2 rounded" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
      {sent && <p className="text-green-600">Mensaje enviado correctamente.</p>}
    </form>
  );
}
