import { Product } from "../../../../app/models/product";
import { Loading } from "../../../components/loading";
import { HomeListItem } from "./home-list-item";

interface HomeListProps {
  products: Product[];
  isLoading: boolean;
}

export function HomeList({ products, isLoading }: HomeListProps) {
  if (isLoading) {
    <Loading />;
  }
  return (
    <ul className="flex flex-wrap justify-center gap-4 lg:grid lg:grid-cols-4 lg:gap-8">
      {products.map((product) => (
        <HomeListItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
