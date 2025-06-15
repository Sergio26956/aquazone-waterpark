import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Math.floor(Math.random() * 10000));
  }, []);

  return (
    <div className="bg-yellow-100 p-4 rounded shadow">
      <h2 className="text-md font-semibold">Visitantes hoy</h2>
      <p className="text-2xl">{count}</p>
    </div>
  );
}
