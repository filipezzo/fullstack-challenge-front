import { useContext } from "react";
import { CartContext } from "../../app/contexts/cart-context";

export const useCart = () => {
  return useContext(CartContext);
};
