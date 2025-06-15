import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({ date: "", name: "", people: 1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reserva:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
      <input name="name" type="text" placeholder="Nombre" onChange={handleChange} className="w-full border p-2 rounded" />
      <input name="date" type="date" onChange={handleChange} className="w-full border p-2 rounded" />
      <input name="people" type="number" min="1" onChange={handleChange} className="w-full border p-2 rounded" />
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Reservar</button>
    </form>
  );
}
