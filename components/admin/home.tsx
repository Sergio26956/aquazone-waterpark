import { AdminCalendar } from "./calendar"
import { AdminUsers } from "./users"
import { AdminStats } from "./stats"
import { AdminMessages } from "./messages"
import { AdminSettings } from "./settings"

export function AdminHome() {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>
      <p className="mb-6 text-neutral-600">Bienvenido. Desde aquí puedes gestionar tus actividades.</p>

      <div className="grid gap-10">
        <AdminStats />
        <AdminCalendar />
        <AdminUsers />
        <AdminMessages />
        <AdminSettings />
      </div>
    </section>
  )
}
