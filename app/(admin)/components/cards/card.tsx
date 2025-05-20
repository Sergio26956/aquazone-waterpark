import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn("rounded-2xl border bg-card text-card-foreground shadow", className)}>
      {children}
    </div>
  );
}
