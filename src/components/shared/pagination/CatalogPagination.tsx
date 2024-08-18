import { useEffect, useState } from "react";
import classes from "./Pagination.module.css";
import { selectFilteredSBData } from "../../../features/supabaseDataSlice";
import TableProduct from "../table product/TableProduct";
import { useSelector, useDispatch } from "react-redux";
import {
  catalogPaginationButtonPageClick,
  catalogPaginationButtonPagePrev,
  catalogPaginationButtonPageNext,
  selectCatalogPagination,
} from "../../../features/catalogPaginationSlice";
import arrowBlue from "../../../img/arrowBlue.svg";
import arrow from "../../../img/arrow.svg";
import useWindowWidth from "../../../hooks/useWindowWidth";

interface product {
  id: number;
  cpuName: string;
  price: string;
  socket: string;
  coresNumber: number;
  frequency: string;
  cacheL2: number;
  cacheL3: number;
  img: string;
}

const CatalogPagination = () => {
  const dispatch = useDispatch();
  const filteredData = useSelector(selectFilteredSBData) as product[];
  const [numItemsPerPage, setNumItemsPerPage] = useState(10);

  // Пагинация
  let togglePage = useSelector(selectCatalogPagination);
  const startIdx = (togglePage - 1) * numItemsPerPage;
  const endIdx = togglePage * numItemsPerPage;
  let numPages = Math.ceil(filteredData.length / numItemsPerPage);
  let isLastPage = togglePage === numPages;

  const windowWidth = useWindowWidth();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (windowWidth > 1360) {
      setNumItemsPerPage(10);
      console.log(windowWidth, "1400 +");
    }
    if (windowWidth < 1360) {
      setNumItemsPerPage(8);
      console.log(windowWidth, "1400 -");
    }
    if (windowWidth < 1100) {
      setNumItemsPerPage(6);
    }
  }, [windowWidth]);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    numPages = Math.ceil(filteredData.length / numItemsPerPage);
    isLastPage = togglePage === numPages;
    if (filteredData.length <= 10) {
      dispatch(catalogPaginationButtonPageClick(1));
    }
  }, [filteredData]);

  const cases = Array.from({ length: numPages }, (_, i: number) => i + 1).map(
    (page) => (
      <button
        key={page}
        onClick={() => {
          dispatch(catalogPaginationButtonPageClick(page));
          scrollToTop();
        }}
        className={togglePage === page ? classes.currentPage : ""}
      >
        {page}
      </button>
    ),
  );

  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  const handleHoverPrev = () => {
    setHoverPrev(!hoverPrev);
  };
  const handleHoverNext = () => {
    setHoverNext(!hoverNext);
  };

  return (
    <div className={classes.pagination_wrapper}>
      <div className={classes.results_list}>
        {filteredData.slice(startIdx, endIdx).map((product) => (
          <TableProduct product={product} key={product.id} />
        ))}
      </div>
      <div
        className={classes.pagination_row}
        style={{ display: filteredData.length > 0 ? "flex" : "none" }}
      >
        <button
          onMouseEnter={handleHoverPrev}
          onMouseLeave={handleHoverPrev}
          className={classes.button_prev}
          style={{ cursor: togglePage === 1 ? "not-allowed" : "pointer" }}
          onClick={() => {
            if (togglePage !== 1) {
              dispatch(catalogPaginationButtonPagePrev());
              scrollToTop();
            }
          }}
        >
          <img src={hoverPrev ? arrowBlue : arrow} alt="arrow img" />
        </button>
        {cases}
        <button
          className={classes.button_next}
          onMouseEnter={handleHoverNext}
          onMouseLeave={handleHoverNext}
          style={{ cursor: isLastPage ? "not-allowed" : "pointer" }}
          onClick={() => {
            if (!isLastPage) {
              dispatch(catalogPaginationButtonPageNext());
              scrollToTop();
            }
          }}
        >
          <img src={hoverNext ? arrowBlue : arrow} alt="arrow img" />
        </button>
      </div>
    </div>
  );
};

export default CatalogPagination;
