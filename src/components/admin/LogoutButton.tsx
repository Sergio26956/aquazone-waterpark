"use client";

export default function LogoutButton() {
  function handleLogout() {
    window.location.href = "/admin";
  }

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
      Cerrar sesión
    </button>
  );
}
