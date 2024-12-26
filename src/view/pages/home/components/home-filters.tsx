import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../../../../app/utils/cn";
import { HomeFiltersItem } from "./home-filters-item";

interface HomeFiltersProps {
  pagesQuantity: number;
  onSetPage: (page: number) => void;
  onIncreasePage: () => void;
  onDecreasePage: () => void;
  className?: string;
  currentPage: number;
}

export function HomeFilters({
  pagesQuantity,
  currentPage,
  onSetPage,
  className,
  onDecreasePage,
  onIncreasePage,
}: HomeFiltersProps) {
  const numOfPages = Array.from(
    { length: pagesQuantity },
    (_, index) => index + 1,
  );

  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <ul className="mb-8 flex items-center gap-0.5 self-end">
        {numOfPages.map((num) => (
          <HomeFiltersItem
            currentPage={currentPage}
            onSetPage={onSetPage}
            key={num}
            num={num}
          />
        ))}

        <li>
          <button
            onClick={onDecreasePage}
            className="grid size-8 place-items-center rounded-lg bg-[#E9E9F0] text-[#737380] hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentPage <= 1}
          >
            <ArrowLeft />
          </button>
        </li>

        <li>
          <button
            onClick={onIncreasePage}
            className="grid size-8 place-items-center rounded-lg bg-[#E9E9F0] text-[#737380] hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentPage >= numOfPages.length}
          >
            <ArrowRight />
          </button>
        </li>
      </ul>
    </section>
  );
}
