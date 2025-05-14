import "./globals.css"
import { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingCallButton from "@/components/FloatingCallButton"
import ScrollToTop from "@/components/ScrollToTop"

export const metadata = {
  title: "AQUAZONE Water Park",
  description: "Parques acuáticos flotantes y terrestres",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="relative">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
        <ScrollToTop />
      </body>
    </html>
  )
}
