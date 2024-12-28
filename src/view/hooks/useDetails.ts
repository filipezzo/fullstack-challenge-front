import { useCallback, useState } from "react";
import { toast } from "sonner";
import { ApiError } from "../../app/services/errors";
import ProductService from "../../app/services/ProductService";

export function useDetails() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchDetails = useCallback(async (id: string | undefined) => {
    if (!id) return;
    try {
      setLoading(true);
      const data = await ProductService.productDetails(id);
      setDetails(data);
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
    fetchDetails,
    details,
    loading,
  };
}
