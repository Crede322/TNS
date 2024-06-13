import { useEffect, useRef, useState } from "react";
import classes from "./Pagination.module.css";
import { selectFilteredSBData } from "../../../features/supabaseDataSlice";
import { useSelector, useDispatch } from "react-redux";
import TableProduct from "../table product/TableProduct";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const filteredData = useSelector(selectFilteredSBData) as product[];
  let togglePage = useSelector(selectCurrentPage);
  const numItemsPerPage = 10;
  let numPages = Math.ceil(filteredData.length / numItemsPerPage);
  let isLastPage = togglePage === numPages - 1;

  useEffect(() => {
    numPages = Math.ceil(filteredData.length / numItemsPerPage);
    isLastPage = togglePage === numPages - 1;
    if (filteredData.length < 11) {
      dispatch(buttonPageClick(1));
    }
  }, [filteredData]);

  useEffect(() => {
    console.log("togglePage changed to", togglePage);
  }, [togglePage]);

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

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div>
      <div className={classes.results_list}>
        {filteredData.slice(startIdx, endIdx).map((product) => (
          <TableProduct product={product} key={product.id} />
        ))}
      </div>
      <div className={classes.pagination_row}>
        <button
          onMouseEnter={handleHoverPrev}
          onMouseLeave={handleHoverPrev}
          className={classes.button_prev}
          style={{ cursor: togglePage === 1 ? "not-allowed" : "pointer" }}
          onClick={() => {
            if (togglePage !== 1) {
              dispatch(buttonPagePrev());
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
