import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// компоненты
import Header from "../../components/global/header/Header";
import SearchNoResults from "./no results/SearchNoResults";
import classes from "./SearchPage.module.css";

// redux и supabase
import { supabase } from "../../helper/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchResult,
  setReloadedResult,
  setSearchTerm,
} from "../../features/searchSlice";
import {
  putFilteredData,
  selectFilteredSBData,
} from "../../features/supabaseDataSlice";

// пагинация через redux
import {
  buttonPageClick,
  buttonPagePrev,
  buttonPageNext,
  selectCurrentPage,
} from "../../features/searchPaginationSlice";

//img
import arrow from "../../img/arrow.svg";
import arrowBlue from "../../img/arrowBlue.svg";
import noResultsImg from "../../img/searchPage/no results illust.jpg";
import TableProduct from "../../components/shared/table product/TableProduct";
import Pagination from "../../components/shared/pagination/Pagination";

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

const SearchPage = () => {
  const searchResult = useSelector(selectSearchResult);
  const filteredData = useSelector(selectFilteredSBData) as product[];
  const togglePage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  // тут 0 = дефолт, 1 = ошибка, 2 = показ товаров
  const [currentSearchResult, setCurrentSearchResult] = useState(0);

  // функции на кнопки
  const handleHoverPrev = () => {
    setHoverPrev(!hoverPrev);
  };
  const handleHoverNext = () => {
    setHoverNext(!hoverNext);
  };

  // Пагинация
  const numItemsPerPage = 10;
  const numPages = Math.ceil(filteredData.length / numItemsPerPage);
  const isLastPage = togglePage === numPages - 1;

  const cases = Array.from({ length: numPages }, (_, i: number) => i + 1).map(
    (page) => (
      <button
        key={page}
        onClick={() => {
          dispatch(buttonPageClick(page));
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

  // Redux + supabase
  const fetchFilteredData = async (location: string) => {
    try {
      const { data } = await supabase
        .from("cpu")
        .select("*")
        .ilike("cpuName", `%${currentLocation}%`);
      dispatch(putFilteredData(data));
      if (data && data.length <= 0) {
        setCurrentSearchResult(1);
      } else {
        setCurrentSearchResult(2);
      }
    } catch (error) {
      console.error("Error fetching supabase filtered data", error);
    }
  };

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const currentLocation: any = urlParams.get("q");

  useEffect(() => {
    dispatch(setSearchTerm(currentLocation));
    dispatch(setReloadedResult(currentLocation));
    fetchFilteredData(currentLocation);
  }, []);

  return (
    <div>
      <div />
      <div className={classes.searchpage_background}>
        <Header />
        <div
          className={classes.noResults_wrapper}
          style={{
            display: currentSearchResult === 1 ? "flex" : "none",
          }}
        >
          <SearchNoResults
            searchResult={searchResult}
            filteredData={filteredData}
          />
          <img src={noResultsImg} alt="no results img" />
        </div>
        <div
          className={classes.received_items}
          style={{ display: currentSearchResult === 2 ? "block" : "none" }}
        >
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
