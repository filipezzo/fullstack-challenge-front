import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Product } from "../models/product";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextValues {
  cart: Product[];
  cartLength: number;
  totalShopValue: number;
  onAddToCart: (newProduct: Product) => void;
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
  onDeleteProduct: (id: string) => void;
}

export const CartContext = createContext({} as CartContextValues);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);
  const cartLength = cart.length;
  const totalShopValue = useMemo(() => {
    return cart.reduce((acc, item) => {
      const total = item.quantity * item.price_in_cents;
      return acc + total;
    }, 0);
  }, [cart]);

  const handleAddToCart = useCallback(
    (newProduct: Product) => {
      const findProduct = cart.find((product) => product.id === newProduct.id);
      if (findProduct) {
        return;
      }
      const newCart = [...cart, { ...newProduct, quantity: 1 }];
      setCart(newCart);
    },
    [cart],
  );

  const handleIncrementQuantity = useCallback(
    (id: string) => {
      const updatedValue = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setCart(updatedValue);
    },
    [cart],
  );

  const handleDecreaseQuantity = useCallback(
    (id: string) => {
      const updatedQuantity = cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      );
      setCart(updatedQuantity);
    },
    [cart],
  );

  const handleDeleteProduct = useCallback(
    (id: string) => {
      const filteredProduct = cart.filter((product) => product.id !== id);
      setCart(filteredProduct);
    },
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartLength,
        totalShopValue,
        onAddToCart: handleAddToCart,
        onIncreaseQuantity: handleIncrementQuantity,
        onDecreaseQuantity: handleDecreaseQuantity,
        onDeleteProduct: handleDeleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
