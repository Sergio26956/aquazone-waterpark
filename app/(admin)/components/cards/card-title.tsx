import { cn } from "@/lib/utils";

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h3 className={cn("text-lg font-medium", className)}>
      {children}
    </h3>
  );
}
