import { useEffect, useState } from "react";
import { supabase } from "../helper/supabaseClient";
import { useComputeProductsPerPage } from "./useComputeProductsPerPage";

export function useFetchTotalPages(
  field: string,
  query: string | number | boolean,
) {
  const [paginationTotalCount, setPaginationTotalCount] = useState(1);
  const { productsPerPage } = useComputeProductsPerPage();

  async function fetchCurrentPageProducts() {
    try {
      let queryBuilder = supabase.from("cpu").select("id");

      if (typeof query === "string") {
        queryBuilder = queryBuilder.ilike(field, `%${query}%`);
      } else {
        queryBuilder = queryBuilder.eq(field, query);
      }

      const { data, error } = await queryBuilder;

      if (data) {
        setPaginationTotalCount(Math.ceil(data.length / productsPerPage));

        console.log(
          `общее количество товаров за запрос ${data.length}`,
          `количество страниц ${Math.ceil(data.length / productsPerPage)}`,
          `запрос ${field}, ${query}`,
        );
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

  return { paginationTotalCount };
}
