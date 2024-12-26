import { ReactNode } from "react";
import { cn } from "../../app/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-6xl p-5", className)}>{children}</div>
  );
}
