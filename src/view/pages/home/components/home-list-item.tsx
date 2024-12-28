import { Link } from "react-router-dom";
import { formatCurrency } from "../../../../app/helpers/formatCurrency";
import { Product } from "../../../../app/models/product";

interface HomeListProps {
  product: Product;
}

export function HomeListItem({ product }: HomeListProps) {
  return (
    <li className="overflow-hidden rounded-md" key={product.id}>
      <Link
        to={`/produto/${product.id}`}
        className="h-[378px] w-full transition-all hover:opacity-80 md:max-w-64"
      >
        <img
          className="h-[300px] w-full object-cover"
          src={product.image_url}
          alt={`imagem do produto ${product.name}`}
        />
        <div className="bg-white px-3 py-2">
          <h3 className="text-[#41414D]">{product.name}</h3>
          <hr className="my-2" />
          <strong className="text-sm">
            {formatCurrency(product.price_in_cents)}
          </strong>
        </div>
      </Link>
    </li>
  );
}
