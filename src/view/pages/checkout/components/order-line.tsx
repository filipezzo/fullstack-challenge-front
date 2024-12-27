import { formatCurrency } from "../../../../app/helpers/formatCurrency";
import { cn } from "../../../../app/utils/cn";

interface OrderLineProps {
  heading: string;
  value: number;
  weight?: "normal" | "medium";
}

export function OrderLine({
  heading,
  weight = "normal",
  value,
}: OrderLineProps) {
  return (
    <div
      className={cn("mb-3 flex items-center justify-between", {
        "font-semibold": weight === "medium",
      })}
    >
      <span>{heading}</span>
      <span>{formatCurrency(value)}</span>
    </div>
  );
}
