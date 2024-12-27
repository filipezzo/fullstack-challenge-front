import { Container } from "../../components/container";
import { useCart } from "../../hooks/useCart";
import { DetailsHeader } from "../details/details-header";
import { OrderItem } from "./components/order-item";
import { OrderLine } from "./components/order-line";

export function Checkout() {
  const { cart, totalShopValue } = useCart();
  const freeShipping = totalShopValue >= 900 ? 0 : 40;
  const totalCheckout = totalShopValue + freeShipping;
  return (
    <Container>
      <DetailsHeader />
      <section className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1 overflow-y-auto">
          <h2 className="my-6 text-xl font-medium text-[#41414D]">
            SEU CARRINHO
          </h2>
          <ul className="space-y-4">
            {cart.length > 0 ? (
              cart.map((product) => (
                <OrderItem key={product.id} product={product} />
              ))
            ) : (
              <p>Seu carrinho está vazio</p>
            )}
          </ul>
        </div>

        <div className="sticky top-4 h-fit min-w-[352px] rounded-lg bg-white px-6 py-4 shadow-sm">
          <h3 className="mb-8 text-xl font-semibold text-[#41414D]">
            RESUMO DO PEDIDO
          </h3>
          <OrderLine heading="Subtotal de produtos" value={totalShopValue} />
          <OrderLine heading="Entrega" value={freeShipping} />
          <hr className="mb-2 mt-6" />
          <OrderLine weight="medium" heading="Total" value={totalCheckout} />
          <button className="mt-10 h-11 w-full rounded-lg bg-[#51B853] text-center uppercase text-[#F5F5FA] transition-all hover:opacity-80">
            Finalizar a compra
          </button>
        </div>
      </section>
    </Container>
  );
}
