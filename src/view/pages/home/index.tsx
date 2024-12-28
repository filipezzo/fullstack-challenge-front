import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "../../components/container";
import { useProducts } from "../../hooks/useProducts";
import { HomeCategories } from "./components/home-categories";
import { HomeFilters } from "./components/home-filters";
import { HomeList } from "./components/home-list";

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchProducts, loading, products } = useProducts();

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

  useEffect(() => {
    fetchProducts({ page, categoria: category, search });
  }, [page, category, search]);

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
