import { useLocation } from "react-router-dom";
import { formatCurrency } from "../../../app/helpers/formatCurrency";

export function Purchase() {
  const location = useLocation();
  const { orderNumber, total } = location.state || {};
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-10">
      <p className="text-lg">Compra realizada com sucesso!</p>
      <strong className="text-lg">Número do pedido : {orderNumber} </strong>
      <strong className="text-lg">Total : {formatCurrency(total)} </strong>
    </div>
  );
}
