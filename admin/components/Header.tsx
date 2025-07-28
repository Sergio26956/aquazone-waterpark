"use client";

import { Bell, UserCircle2 } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-zinc-950 shadow-md border-b border-zinc-800">
      <h1 className="text-xl font-semibold text-white tracking-wide">Zona Administrativa</h1>

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell className="w-6 h-6 text-white" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2 text-white">
          <UserCircle2 className="w-7 h-7" />
          <div className="text-sm font-medium">
            {session?.user?.name ?? "Admin"}
          </div>
        </div>
      </div>
    </header>
  );
}
