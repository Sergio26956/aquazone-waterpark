import "../src/styles/globals.css";
import AdminLayout from "../src/components/ui/admin/layout/AdminLayout";
import { ReactNode } from "react";

export const metadata = {
  title: "Panel de Administración | AQUAZONE 2030",
  description: "Zona privada de control total del proyecto AQUAZONE Water Park",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}
