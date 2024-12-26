import { Product } from "../../../../app/models/product";
import { HomeListItem } from "./home-list-item";

interface HomeListProps {
  products: Product[];
  isLoading: boolean;
}

export function HomeList({ products, isLoading }: HomeListProps) {
  if (isLoading) {
    return (
      <div className="flex h-full w-full flex-1 justify-center">
        <div className="size-12 animate-spin rounded-full border-r border-t border-blue-500" />
      </div>
    );
  }
  return (
    <ul className="flex flex-wrap justify-center gap-4 lg:grid lg:grid-cols-4 lg:gap-8">
      {products.map((product) => (
        <HomeListItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
