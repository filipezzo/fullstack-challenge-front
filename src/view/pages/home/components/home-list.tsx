import { HeartCrack } from "lucide-react";
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

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center gap-4">
        <HeartCrack />
        <p className="text-2xl"> Não encontramos nenhum produto</p>
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
