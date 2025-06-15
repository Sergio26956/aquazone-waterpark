import { useState } from "react";

export default function LoginForm() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded" />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} className="w-full border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Iniciar sesión</button>
    </form>
  );
}
