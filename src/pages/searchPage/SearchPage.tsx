import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// компоненты
import Header from "../../components/global/header/Header";
import SearchNoResults from "./searchPage components/no results/SearchNoResults";
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

//img
import noResultsImg from "../../img/searchPage/no results illust.jpg";
import Pagination from "../../components/shared/pagination/CatalogPagination";
import SearchPagination from "../../components/shared/pagination/SearchPagination";

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
  const dispatch = useDispatch();

  // тут 0 = дефолт, 1 = ошибка, 2 = показ товаров
  const [currentSearchResult, setCurrentSearchResult] = useState(0);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
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
          <SearchPagination />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
