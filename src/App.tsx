import { CartProvider } from "./app/contexts/cart-context";
import { Router } from "./app/router/router";

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}

export default App;
