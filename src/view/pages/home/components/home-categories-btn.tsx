import { ComponentProps, ReactNode } from "react";
import { cn } from "../../../../app/utils/cn";

interface HomeCategoriesBtnProps extends ComponentProps<"button"> {
  category: string;
  categoryUrl: string;
  children: ReactNode;
}

export function HomeCategoriesBtn({
  category,
  categoryUrl,
  children,
  ...rest
}: HomeCategoriesBtnProps) {
  return (
    <button
      className={cn({
        "border-b border-b-[#FFA585]": category === categoryUrl,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
