import { Toaster } from "sonner";
import { CartProvider } from "./app/contexts/cart-context";
import { Router } from "./app/router/router";

function App() {
  return (
    <CartProvider>
      <Router />
      <Toaster />
    </CartProvider>
  );
}

export default App;
