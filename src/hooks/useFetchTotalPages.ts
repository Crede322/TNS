import { useEffect, useState } from "react";
import { supabase } from "../helper/supabaseClient";
import { useComputeProductsPerPage } from "./useComputeProductsPerPage";

export function useFetchTotalPages(
  field: string,
  query: string | number | boolean | null,
) {
  const [totalPagesInQuery, setTotalPagesInQuery] = useState(1);
  const [totalProductsInQuery, setTotalProductsInQuery] = useState(0);
  const { productsPerPage } = useComputeProductsPerPage();

  async function fetchCurrentPageProducts() {
    if (query === null) return;

    try {
      let queryBuilder = supabase.from("cpu").select("id");

      if (typeof query === "string") {
        queryBuilder = queryBuilder.ilike(field, `%${query}%`);
      } else {
        queryBuilder = queryBuilder.eq(field, query);
      }

      const { data, error } = await queryBuilder;

      if (data) {
        setTotalPagesInQuery(Math.ceil(data.length / productsPerPage));
        setTotalProductsInQuery(data.length);
      } else {
        throw error;
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCurrentPageProducts();
  }, [field, query, productsPerPage]);

  return { totalPagesInQuery, totalProductsInQuery };
}
