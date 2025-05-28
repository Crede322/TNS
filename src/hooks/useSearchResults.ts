import { useEffect, useMemo, useState } from "react";
import { supabase } from "../helper/supabaseClient";
import { TableProductType } from "../types/TableProductType";
import { useComputeProductsPerPage } from "./useComputeProductsPerPage";

export function useSearchResults(page: number | null, query: string | null) {
  const [productList, setProductList] = useState<TableProductType[]>([]);
  const [productListLoading, setProductListLoading] = useState<boolean>(false);
  const { productsPerPage } = useComputeProductsPerPage();

  useEffect(() => {
    fetchCurrentPageProducts();
  }, [page, productsPerPage]);

  async function fetchCurrentPageProducts() {
    setProductListLoading(true);
    const from = ((page || 1) - 1) * productsPerPage;
    const to = from + productsPerPage - 1;

    try {
      const { data, error } = await supabase
        .from("cpu")
        .select(
          "cpuName, id, img, price, socket, coresNumber, frequency, cacheL2, cacheL3",
        )
        .ilike("cpuName", `%${query}%`)
        .range(from, to);

      if (data) {
        setProductList(data);
      } else {
        throw error;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setProductListLoading(false);
    }
  }

  return { productList, productListLoading };
}
