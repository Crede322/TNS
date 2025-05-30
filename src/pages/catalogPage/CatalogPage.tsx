import classes from "./CatalogPage.module.css";
import Pagination from "../../components/shared/pagination/Pagination";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useSearchResults } from "../../hooks/useSearchResults";
import { useFetchTotalPages } from "../../hooks/useFetchTotalPages";
import filterListRaw from "../../assets/filterList.json";
import ProductsTable from "../../components/shared/tables/ProductsTable";
import { useTransformQuery } from "../../hooks/useTransformQuery";

const CatalogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const filterList = filterListRaw.queries;

  const handleChangeQuery = (incomingQuery: string) => {
    const searchParamsQueryControlled = new URLSearchParams(location.search);
    searchParamsQueryControlled.set("q", incomingQuery);
    searchParamsQueryControlled.set("page", "1");

    navigate({
      pathname: location.pathname,
      search: searchParamsQueryControlled.toString(),
    });
  };

  const compareFilters = (incomingFilter: string) => {
    const searchParamsQueryControlled = new URLSearchParams(location.search);
    const rawQuery = searchParamsQueryControlled.get("q");

    if (!rawQuery) return false;

    const decodedQuery = decodeURIComponent(rawQuery).replace(/\+/g, " ");
    return decodedQuery === incomingFilter;
  };

  const searchParamsQueryControlled = new URLSearchParams(location.search);
  const rawQuery = searchParamsQueryControlled.get("q");
  const decodedQuery = decodeURIComponent(rawQuery || "null").replace(
    /\+/g,
    " ",
  );
  const { transformedQuery } = useTransformQuery(decodedQuery, "catalog");

  const { totalPagesInQuery } = useFetchTotalPages(
    transformedQuery[0],
    transformedQuery[1],
  );

  const [searchParams] = useSearchParams();
  let page = Number(searchParams.get("page"));

  const { productList } = useSearchResults(
    transformedQuery[0],
    transformedQuery[1],
    page,
  );

  return (
    <main className={classes.catalog_background}>
      <div className={classes.catalog_container}>
        <h1>
          {decodedQuery === "null" || null || ""
            ? "Все процессоры"
            : `Фильтр: ${decodedQuery}`}
        </h1>
        <div className={classes.filterlist}>
          {filterList.map((filter) => {
            const isSelected = compareFilters(filter);
            return (
              <button
                key={filter}
                onClick={() =>
                  !isSelected
                    ? handleChangeQuery(filter)
                    : handleChangeQuery("null")
                }
                className={`${classes.button_filter} ${isSelected ? classes.filter_active : ""}`}
              >
                {filter} {isSelected ? "✕" : ""}
              </button>
            );
          })}
        </div>
        <ProductsTable productList={productList} />
        <Pagination page={page} totalPages={totalPagesInQuery} />
      </div>
    </main>
  );
};

export default CatalogPage;
