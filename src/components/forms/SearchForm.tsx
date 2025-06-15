import { useState } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscar:", query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar..." className="border p-2 rounded w-full" />
      <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded">Buscar</button>
    </form>
  );
}
