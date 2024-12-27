import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../view/layouts/layout";
import { Checkout } from "../../view/pages/checkout";
import { Details } from "../../view/pages/details";
import { Home } from "../../view/pages/home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produto/:id" element={<Details />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
