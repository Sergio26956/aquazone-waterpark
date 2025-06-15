import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Suscripción:", email);
    setSubscribed(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <button type="submit" className="bg-green-600 text-white px-4 rounded">Suscribirme</button>
      {subscribed && <span className="text-sm text-green-700 ml-2">¡Gracias por suscribirte!</span>}
    </form>
  );
}
