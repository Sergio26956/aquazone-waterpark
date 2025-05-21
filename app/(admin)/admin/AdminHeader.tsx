"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

const AdminHeader = () => {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <header className="w-full bg-slate-900 text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Panel de Administración</h1>
      <Button variant="ghost" className="text-white" onClick={handleLogout}>
        <LogOut className="mr-2 h-4 w-4" />
        Cerrar sesión
      </Button>
    </header>
  )
}

export default AdminHeader
