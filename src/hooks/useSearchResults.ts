import { useEffect, useState } from "react";
import { supabase } from "../helper/supabaseClient";
import { TableProductType } from "../types/TableProductType";
import { useComputeProductsPerPage } from "./useComputeProductsPerPage";

export function useSearchResults(
  column: string,
  query: string | number | boolean | null,
  page: number,
) {
  const [productList, setProductList] = useState<TableProductType[]>([]);
  const [productListLoading, setProductListLoading] = useState<boolean>(false);
  const { productsPerPage } = useComputeProductsPerPage();

  useEffect(() => {
    let isCancelled = false;

    async function fetchData() {
      setProductListLoading(true);
      const from = ((page || 1) - 1) * productsPerPage;
      const to = from + productsPerPage - 1;

      function applyFilter(
        builder: any,
        column: string,
        value: string | number | boolean,
      ) {
        return typeof value === "string"
          ? builder.ilike(column, `%${value}%`)
          : builder.eq(column, value);
      }

      try {
        const queryBuilder = applyFilter(
          supabase
            .from("cpu")
            .select(
              "cpuName, id, img, price, socket, coresNumber, frequency, cacheL2, cacheL3",
            )
            .range(from, to),
          query ? column : "cpuName",
          query ?? "",
        );

        const { data, error } = await queryBuilder;
        if (!isCancelled) {
          if (data) setProductList(data);
          else throw error;
        }
      } catch (error) {
        if (!isCancelled) console.error(error);
      } finally {
        if (!isCancelled) setProductListLoading(false);
      }
    }

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [page, productsPerPage, column, query]);

  return { productList, productListLoading };
}
