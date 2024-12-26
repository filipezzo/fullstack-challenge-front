export const formatCurrency = (currency: number) => {
  if (typeof currency !== "number") {
    return;
  }
  return currency.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  });
};
