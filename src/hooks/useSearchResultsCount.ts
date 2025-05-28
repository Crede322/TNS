import { useEffect, useState } from "react";
import { supabase } from "../helper/supabaseClient";

export function useSearchResultsCount(query: string | null) {
  const [resultsCount, setResultsCount] = useState<number | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [resultsCountLoading, setResultsCountLoading] = useState<boolean>(true);
  //   0 = loading
  //   1 = результат найден
  //   2 = error

  async function fetchCountByQuery() {
    setResultsCountLoading(true);
    setError(false);
    try {
      const { count, error } = await supabase
        .from("cpu")
        .select("id", { count: "exact", head: true })
        .ilike("cpuName", `%${query}%`);

      if (error) {
        throw error;
      }

      setResultsCount(count);
      setResultsCountLoading(false);
    } catch (error) {
      console.error(error);
      setResultsCount(null);
      setError(true);
    } finally {
      setResultsCountLoading(false);
    }
  }

  useEffect(() => {
    if (!query) {
      setResultsCount(null);
      setError(true);
      return;
    }
    fetchCountByQuery();
  }, []);

  return { resultsCount, resultsCountLoading, error };
}
