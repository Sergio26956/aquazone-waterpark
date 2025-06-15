import { useState } from "react";

export function useToast() {
  const [message, setMessage] = useState("");

  function show(msg: string) {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  }

  return { message, show };
}
