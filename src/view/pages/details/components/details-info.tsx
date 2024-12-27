import { Check, ShoppingBag } from "lucide-react";
import { formatCurrency } from "../../../../app/helpers/formatCurrency";
import { Product } from "../../../../app/models/product";
import { Loading } from "../../../components/loading";
import { useCart } from "../../../hooks/useCart";

interface DetailsInfoProps {
  isLoading: boolean;
  details: Product | null;
}

export function DetailsInfo({ isLoading, details }: DetailsInfoProps) {
  const { onAddToCart, cart } = useCart();

  if (!details) {
    return;
  }

  const isAddedToCart = cart.find((p) => p.id === details.id);

  const handleAddToCart = () => {
    onAddToCart(details);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col gap-8 md:flex-row">
      <div className="overflow-hidden rounded-md border md:max-h-[580px] md:min-w-[640px]">
        <img
          src={details.image_url}
          alt={`imagem do produto ${details.name}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          <h4 className="text-[#41414D]">{details.category}</h4>
          <h2 className="text-3xl text-[#41414D]">{details.name}</h2>
          <strong className="text-lg text-[#09090A]">
            {formatCurrency(details.price_in_cents)}
          </strong>
          <small className="text-[#41414D]">
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </small>
        </div>
        <div className="my-10">
          <h3>Descrição</h3>
          <p>
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá
            apenas de exemplo para que simule algum texto que venha a ser
            inserido nesse campo, descrevendo tal produto.
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!!isAddedToCart}
          className="mt-auto flex h-11 items-center justify-center gap-5 rounded-md bg-[#115D8C] py-2.5 font-medium text-[#F5F5FA] transition-all hover:opacity-80 disabled:opacity-50"
        >
          {isAddedToCart ? <Check /> : <ShoppingBag />}
          {isAddedToCart ? "Adicionado" : "Adicionar ao carrinho"}
        </button>
      </div>
    </section>
  );
}
