import * as React from "react";
import { ToastProvider, ToastViewport } from "@radix-ui/react-toast";
import { cn } from "@/lib/utils";

function ToastRoot({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      {children}
      <ToastViewport className={cn("fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-96 max-w-full z-[100] outline-none")} />
    </ToastProvider>
  );
}

export { ToastRoot };
