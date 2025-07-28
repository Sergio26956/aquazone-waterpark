"use client";

import { Menu, UserCircle } from "lucide-react"; import { Button } from "@/components/ui/button"; import { useState } from "react";

export default function Header() { const [open, setOpen] = useState(false);

return ( <header className="w-full h-16 flex items-center justify-between px-6 bg-zinc-900 border-b border-zinc-800 shadow-lg relative z-10"> <div className="flex items-center gap-4"> <Button variant="ghost" className="p-2 hover:bg-zinc-800" onClick={() => setOpen(!open)} > <Menu className="w-6 h-6 text-zinc-400" /> </Button> <h1 className="text-xl font-semibold tracking-tight text-white"> Panel Administrativo </h1> </div> <div className="flex items-center gap-4"> <span className="text-sm text-zinc-400">Administrador</span> <UserCircle className="w-7 h-7 text-cyan-400" /> </div> </header> ); }

