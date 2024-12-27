import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { generateRandomNumbers } from "../../../app/helpers/generateRandomNumbers";
import { Container } from "../../components/container";
import { useCart } from "../../hooks/useCart";
import { DetailsHeader } from "../details/details-header";
import { OrderItem } from "./components/order-item";
import { OrderLine } from "./components/order-line";

export function Checkout() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { cart, totalShopValue, onClearCart } = useCart();
  const freeShipping = totalShopValue >= 900 ? 0 : 40;
  const totalCheckout = totalShopValue + freeShipping;

  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (cart.length === 0) {
      toast.error("Seu carrinho está vazio!", {
        position: "top-center",
        duration: 1500,
      });
      return;
    }
    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      onClearCart();
      navigate("/pedido-confirmado", {
        state: {
          orderNumber: generateRandomNumbers(),
          total: totalCheckout,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };
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
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="mt-10 h-11 w-full rounded-lg bg-[#51B853] text-center uppercase text-[#F5F5FA] transition-all hover:opacity-80 disabled:opacity-50"
          >
            {isProcessing ? "Finalizando..." : "Finalizar a compra"}
          </button>
        </div>
      </section>
    </Container>
  );
}
