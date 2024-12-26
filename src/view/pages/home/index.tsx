import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ResponseProduct } from "../../../app/models/product";
import { Container } from "../../components/container";
import { HomeCategories } from "./components/home-categories";
import { HomeFilters } from "./components/home-filters";
import { HomeList } from "./components/home-list";

const PRODUCTS_API_URL = "http://localhost:3300/products";

export function Home() {
  const [products, setProducts] = useState<ResponseProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const category = searchParams.get("categoria") || "todos";
  const search = searchParams.get("search") || "";

  const handleSetCategory = useCallback(
    (category: string) => {
      setSearchParams({ categoria: category, page: "1" });
    },
    [setSearchParams],
  );

  const handleSetPage = useCallback(
    (newPage: number) => {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        page: newPage.toString(),
      });
    },
    [setSearchParams],
  );

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const url = new URL(PRODUCTS_API_URL);
      url.searchParams.set("page", page.toString());
      url.searchParams.set("categoria", category);
      if (search) url.searchParams.set("search", search);

      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("Erro ao buscar produtos");

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page, category, search]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container>
      <HomeCategories category={category} onSetCategory={handleSetCategory} />
      <HomeFilters
        onSetPage={handleSetPage}
        pagesQuantity={products?.numberOfPages ?? 1}
        currentPage={page}
        onIncreasePage={() => handleSetPage(page + 1)}
        onDecreasePage={() => handleSetPage(page - 1)}
      />
      <HomeList isLoading={loading} products={products?.products ?? []} />
    </Container>
  );
}
