import { Minus, Plus, Trash2 } from "lucide-react";
import { formatCurrency } from "../../../../app/helpers/formatCurrency";
import { Product } from "../../../../app/models/product";
import { useCart } from "../../../hooks/useCart";

interface OrderItemProps {
  product: Product;
}

export function OrderItem({ product }: OrderItemProps) {
  const total = product.quantity * product.price_in_cents;
  const { onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = useCart();

  return (
    <li className="overflow-hidden rounded-md bg-white shadow-sm md:h-52">
      <figure className="flex">
        <img
          src={product.image_url}
          alt={`imagem do ${product.name}`}
          className="w-full object-cover md:w-64"
        />
        <figcaption className="p-4">
          <div className="flex items-center justify-between">
            <h3>{product.name}</h3>
            <button
              onClick={() => onDeleteProduct(product.id)}
              className="hover:opacity-60"
            >
              <Trash2 className="text-rose-500" />
            </button>
          </div>
          <p className="mb-6 mt-3">
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá
            apenas de exemplo para que simule algum texto que venha a ser
            inserido nesse campo, descrevendo tal produto.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                disabled={product.quantity <= 1}
                onClick={() => onDecreaseQuantity(product.id)}
              >
                <Minus size={14} />
              </button>
              <span className="mx-4">{product.quantity}</span>
              <button onClick={() => onIncreaseQuantity(product.id)}>
                <Plus size={14} />
              </button>
            </div>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
