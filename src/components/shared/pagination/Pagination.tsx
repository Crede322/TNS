import { useEffect, useState } from "react";
import classes from "./Pagination.module.css";
import { selectFilteredSBData } from "../../../features/supabaseDataSlice";
import TableProduct from "../table product/TableProduct";
import { useSelector, useDispatch } from "react-redux";
import {
  buttonPageClick,
  buttonPagePrev,
  buttonPageNext,
  selectCurrentPage,
} from "../../../features/searchPaginationSlice";
import arrowBlue from "../../../img/arrowBlue.svg";
import arrow from "../../../img/arrow.svg";

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

const Pagination = () => {
  const dispatch = useDispatch();
  const filteredData = useSelector(selectFilteredSBData) as product[];
  let togglePage = useSelector(selectCurrentPage);
  const numItemsPerPage = 10;
  let numPages = Math.ceil(filteredData.length / numItemsPerPage);
  let isLastPage = togglePage === numPages - 1;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    numPages = Math.ceil(filteredData.length / numItemsPerPage);
    isLastPage = togglePage === numPages - 1;
    if (filteredData.length < 11) {
      dispatch(buttonPageClick(1));
    }
  }, [filteredData]);

  const cases = Array.from({ length: numPages }, (_, i: number) => i + 1).map(
    (page) => (
      <button
        key={page}
        onClick={() => {
          dispatch(buttonPageClick(page));
          scrollToTop();
        }}
        className={togglePage === page ? classes.currentPage : ""}
      >
        {page}
      </button>
    ),
  );

  let startIdx = 0;
  let endIdx = 10;
  switch (togglePage) {
    case 1:
      startIdx = 0;
      endIdx = 10;
      break;
    case 2:
      startIdx = 10;
      endIdx = 20;
      break;
  }

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
              dispatch(buttonPagePrev());
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
          style={{ cursor: isLastPage ? "pointer" : "not-allowed" }}
          onClick={() => {
            if (isLastPage === true) {
              dispatch(buttonPageNext());
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

export default Pagination;
