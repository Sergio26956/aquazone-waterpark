import "@/styles/globals.css";
import { ReactNode } from "react";
import { AdminNav } from "@/admin/src/components/AdminNav";
import { AdminFooter } from "@/admin/src/components/AdminFooter";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Panel de Administración | AQUAZONE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-neutral-950 text-white">
        <AdminNav />
        <main className="min-h-screen p-4 pt-24">{children}</main>
        <AdminFooter />
      </body>
    </html>
  );
}
