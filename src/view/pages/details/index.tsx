import { CircleArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/container";

export function Details() {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <header className="col-span-full">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[#617480]"
          >
            <CircleArrowLeft />
            Voltar
          </Link>
        </header>
        <section className="flex gap-8">
          <div className="max-h-[580px] min-w-[640px] overflow-hidden rounded-md border">
            <img
              src="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#41414D]">Caneca</h4>
              <h2 className="text-3xl text-[#41414D]">
                Caneca de cerâmica rústica
              </h2>
              <strong className="text-lg text-[#09090A]">R$ 40,00</strong>
              <small className="text-[#41414D]">
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </small>
            </div>
            <div>
              <h3>Descrição</h3>
              <p>
                Aqui vem um texto descritivo do produto, esta caixa de texto
                servirá apenas de exemplo para que simule algum texto que venha
                a ser inserido nesse campo, descrevendo tal produto.
              </p>
            </div>
            <button>
              <ShoppingBag />
              adicionar ao carrinho
            </button>
          </div>
        </section>
      </div>
    </Container>
  );
}
