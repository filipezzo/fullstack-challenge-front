import { HomeCategoriesBtn } from "./home-categories-btn";

interface HomeCategoriesProps {
  category: string;
  onSetCategory: (category: string) => void;
}

const categoriesBtn = [
  {
    text: "TODOS OS PRODUTOS",
    category: "todos",
  },

  {
    text: "CAMISETAS",
    category: "camisetas",
  },
  {
    text: "CANECAS",
    category: "canecas",
  },
];

export function HomeCategories({
  category,
  onSetCategory,
}: HomeCategoriesProps) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center">
        <div className="flex items-center gap-10 max-sm:my-4">
          {categoriesBtn.map((cat) => (
            <HomeCategoriesBtn
              categoryUrl={category}
              category={cat.category}
              key={cat.category}
              onClick={() => onSetCategory(cat.category)}
            >
              {cat.text}
            </HomeCategoriesBtn>
          ))}
        </div>
      </div>
    </section>
  );
}
