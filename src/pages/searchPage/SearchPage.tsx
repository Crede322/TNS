import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
import starImg from "../../img/searchPage/star.svg";
import imgFavorite from "../../img/favorite.svg";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [currentSearchResult, setCurrentSearchResult] = useState(0);
  // тут 0 = дефолт, 1 = ошибка, 2 = показ товаров

  // функции на кнопки
  const handleHoverPrev = () => {
    setHoverPrev(!hoverPrev);
  };
  const handleHoverNext = () => {
    setHoverNext(!hoverNext);
  };
  const handlePurchaseClick = (productId: number) => {
    console.log("Navigating to product:", productId);
  };
  const handleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("favorite");
  };
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
      <div ref={scrollRef} />
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
          <div className={classes.results_list}>
            {filteredData.slice(startIdx, endIdx).map((product, index) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div
                  className={classes.result}
                  onClick={() => handlePurchaseClick(product.id)}
                >
                  <div className={classes.result__product_image}>
                    <img src={product.img} alt="product img" />
                  </div>

                  <div className={classes.result_description}>
                    <h3 className={classes.product_info}>
                      {product.cpuName} <br />[{product.socket},{" "}
                      {product.coresNumber} x {product.frequency} ГГц, L2 -{" "}
                      {product.cacheL2} МБ, L3 - {product.cacheL3} МБ]
                    </h3>
                    <div className={classes.purchase}>
                      <h2>{product.price}</h2>

                      <button
                        className={classes.purchase_button}
                        onClick={() => handlePurchaseClick(product.id)}
                      >
                        <h3>Купить</h3>
                      </button>

                      <button
                        className={classes.fav_button}
                        onClick={handleFavorite}
                      >
                        <img src={imgFavorite} alt="imgFavorite" />
                      </button>
                    </div>

                    <div className={classes.product_subInfo}>
                      <div className={classes.stars}>
                        <img src={starImg} alt="rating img" />
                        <img src={starImg} alt="rating img" />
                        <img src={starImg} alt="rating img" />
                        <img src={starImg} alt="rating img" />
                        <img src={starImg} alt="rating img" />
                        <h4>10</h4>
                      </div>
                      <div>
                        <h4>В наличии</h4>
                        <h3>Послезавтра</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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
      </div>
    </div>
  );
};

export default SearchPage;
