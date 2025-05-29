import classes from "./Pagination.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowImg from "../../../img/arrowBlue.svg";

interface PaginationProps {
  page: number;
  totalPages: number;
}

export default function Pagination({ page, totalPages }: PaginationProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const changePage = (newPage: number) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", String(newPage));

    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  const handlePagePrev = () => {
    if (page - 1 > 0) {
      changePage(page - 1);
    }
  };

  const handlePageNext = () => {
    if (page < totalPages) {
      changePage(page + 1);
    }
  };

  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={classes.pagination}>
      <div className={classes.pagination_row}>
        <button
          className={page - 1 <= 0 ? classes.cursor_off : ""}
          onClick={handlePagePrev}
        >
          <img src={ArrowImg} alt="prev page" />
        </button>
        {pagesArray.map((productPage) => (
          <button
            key={productPage}
            className={`${productPage === page ? classes.button_active : ""}`}
            onClick={() => {
              changePage(productPage);
            }}
          >
            {productPage}
          </button>
        ))}
        <button
          className={page === totalPages ? classes.cursor_off : ""}
          onClick={handlePageNext}
        >
          <img src={ArrowImg} alt="next page" />
        </button>
      </div>
    </div>
  );
}
