import classes from "./SearchPage.module.css";
import { useSearchParams } from "react-router-dom";
import { useSearchResultsCount } from "../../hooks/useSearchResultsCount";
import { useSearchResultsSearchpage } from "../../hooks/useSearchResultsSearchpage";
import SearchNoResults from "./searchPage components/no results/SearchNoResults";
import ProductsTable from "../../components/shared/tables/ProductsTable";
import Pagination from "../../components/shared/pagination/Pagination";
import { useFetchTotalPages } from "../../hooks/useFetchTotalPages";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  let page = Number(searchParams.get("page"));
  if (page === 0) {
    page = 1;
  }
  const query = searchParams.get("q");

  const { resultsCount, resultsCountLoading } = useSearchResultsCount(query);
  const { productList } = useSearchResultsSearchpage(query, page);
  const { totalPagesInQuery } = useFetchTotalPages("cpuName", query || "");

  return (
    <div className={classes.searchpage_background}>
      {resultsCountLoading ? (
        <div />
      ) : resultsCount && resultsCount > 0 ? (
        <div>
          <ProductsTable productList={productList} />
          <Pagination page={page} totalPages={totalPagesInQuery} />
        </div>
      ) : (
        <SearchNoResults searchResult={query} />
      )}
    </div>
  );
}
