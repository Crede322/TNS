import classes from "./CatalogPage.module.css";
import Pagination from "../../components/shared/pagination/Pagination";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useSearchResultsCatalogpage } from "../../hooks/useSearchResultsCatalogpage";
import { useFetchTotalPages } from "../../hooks/useFetchTotalPages";
import filterListRaw from "../../assets/filterList.json";
import ProductsTable from "../../components/shared/tables/ProductsTable";
import { useTransformQuery } from "../../hooks/useTransformQuery";
import { useEffect } from "react";

const CatalogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const filterList = filterListRaw.queries;

  // ниже до следующего комментария в основном всё что связано с кнопками фильтров и роутом
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

  // ниже в основном код про products list
  const searchParamsQueryControlled = new URLSearchParams(location.search);
  const rawQuery = searchParamsQueryControlled.get("q");
  const decodedQuery = decodeURIComponent(rawQuery || "cpuName").replace(
    /\+/g,
    " ",
  );
  const { productList } = useSearchResultsCatalogpage(decodedQuery, 1);

  const { transformedQuery } = useTransformQuery(decodedQuery, "catalog");

  const { paginationTotalCount } = useFetchTotalPages(
    transformedQuery[0],
    transformedQuery[1],
  );

  const [searchParams] = useSearchParams();
  let page = Number(searchParams.get("page"));

  return (
    <main className={classes.catalog_background}>
      {paginationTotalCount}
      <div className={classes.catalog_container}>
        <div className={classes.filterlist}>
          {filterList.map((filter) => {
            const isSelected = compareFilters(filter);
            return (
              <button
                key={filter}
                onClick={() =>
                  !isSelected
                    ? handleChangeQuery(filter)
                    : handleChangeQuery("")
                }
                className={`${classes.button_filter} ${isSelected ? classes.filter_active : ""}`}
              >
                {filter} {isSelected ? "✕" : ""}
              </button>
            );
          })}
        </div>
        <ProductsTable productList={productList} />
        <Pagination page={page} totalPages={paginationTotalCount} />
        {paginationTotalCount}
      </div>
    </main>
  );
};

export default CatalogPage;
