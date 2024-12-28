import { useCallback, useState } from "react";
import { toast } from "sonner";
import { ResponseProduct } from "../../app/models/product";
import { ApiError } from "../../app/services/errors";
import ProductService from "../../app/services/ProductService";
import { ProductParams } from "../../app/types/product";

export function useProducts() {
  const [products, setProducts] = useState<ResponseProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchProducts = useCallback(async (p: ProductParams) => {
    try {
      setLoading(true);
      const params = {
        page: p.page,
        categoria: p.categoria,
        search: p.search,
      };

      const data = await ProductService.listProducts(params);

      setProducts(data);
    } catch (error) {
      console.log(error);
      if (error instanceof ApiError) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    products,
    loading,
    fetchProducts,
  };
}
