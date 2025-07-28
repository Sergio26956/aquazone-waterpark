import "@/styles/globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zona Administrativa | AQUAZONE 2030",
  description: "Panel de gestión interna para parques acuáticos AQUAZONE.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-white antialiased">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main className="p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
