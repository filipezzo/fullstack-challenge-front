import { cn } from "../../../../app/utils/cn";

interface HomeFiltersItemProps {
  num: number;
  onSetPage: (num: number) => void;
  currentPage: number;
}

export function HomeFiltersItem({
  num,
  currentPage,
  onSetPage,
}: HomeFiltersItemProps) {
  return (
    <li>
      <button
        onClick={() => onSetPage(num)}
        className={cn(
          "grid size-8 place-items-center rounded-lg bg-[#E9E9F0] text-[#737380] hover:opacity-80",
          {
            "border border-[#FFA585]": currentPage === num,
          },
        )}
      >
        {num}
      </button>
    </li>
  );
}
