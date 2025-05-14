// Archivo: components/ContactModal.tsx

"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-xl z-50"
      >
        Contactar
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded bg-white p-6">
            <Dialog.Title className="text-xl font-bold mb-4">Contáctanos</Dialog.Title>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Mensaje"
                className="border p-2 rounded h-24"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Enviar
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
