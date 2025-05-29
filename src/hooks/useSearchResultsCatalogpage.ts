import { useEffect, useState } from "react";
import { supabase } from "../helper/supabaseClient";
import { TableProductType } from "../types/TableProductType";
import { useComputeProductsPerPage } from "./useComputeProductsPerPage";

type QueryMapEntry = [string, [string, string | number | boolean]];

const queriesAssigned: QueryMapEntry[] = [
  ["2023 Год", ["year", 2023]],
  ["AM4", ["socket", "AM4"]],
  ["LGA 1700", ["socket", "LGA 1700"]],
  ["6 Ядер", ["coresNumber", 6]],
  ["8 Ядер", ["coresNumber", 8]],
  ["12 Потоков", ["threads", 12]],
  ["Свободный множитель", ["multiplier", false]],
  ["Частота RAM: 3200МГц", ["frequency", 3.2]],
  ["Встроенный видеочип", ["integratedGPU", true]],
  ["Amd", ["brand", "amd"]],
  ["Intel", ["brand", "intel"]],
];

const queriesMap = new Map<string, [string, string | number | boolean]>(
  queriesAssigned,
);

export function useSearchResultsCatalogpage(
  query: string | null,
  page: number | null,
) {
  const [productList, setProductList] = useState<TableProductType[]>([]);
  const [productListLoading, setProductListLoading] = useState<boolean>(false);
  const [paginationTotalCount, setPaginationTotalCount] = useState(1);
  const { productsPerPage } = useComputeProductsPerPage();

  useEffect(() => {
    fetchCurrentPageProducts();
  }, [page, query, productsPerPage]);

  useEffect(() => {});

  async function fetchCurrentPageProducts() {
    setProductListLoading(true);
    const from = ((page || 1) - 1) * productsPerPage;
    const to = from + productsPerPage - 1;

    try {
      if (!query?.trim()) {
        const { data, error } = await supabase
          .from("cpu")
          .select(
            "cpuName, id, img, price, socket, coresNumber, frequency, cacheL2, cacheL3",
          )
          .range(from, to);

        if (data) {
          setProductList(data);
        } else {
          throw error;
        }
        return;
      }

      const mappedQuery = queriesMap.get(query);

      if (!mappedQuery) {
        const { data, error } = await supabase
          .from("cpu")
          .select(
            "cpuName, id, img, price, socket, coresNumber, frequency, cacheL2, cacheL3",
          )
          .range(from, to);

        if (data) {
          setProductList(data);
        } else {
          throw error;
        }

        return;
      }

      const [column, value] = mappedQuery;

      let queryBuilder = supabase
        .from("cpu")
        .select(
          "cpuName, id, img, price, socket, coresNumber, frequency, cacheL2, cacheL3",
        )
        .range(from, to);

      if (typeof value === "string") {
        queryBuilder = queryBuilder.ilike(column, `%${value}%`);
      } else {
        queryBuilder = queryBuilder.eq(column, value);
      }

      const { data, error } = await queryBuilder;

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
