import React from "react";
import Header from "../../components/global/header/Header";
import classes from "./SearchPage.module.css";
import { selectSearchResult } from "../../features/searchSlice";
import { selectSupabaseData } from "../../features/supabaseDataSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlueButton from "../../components/divided/BlueButton";
import noResultsImg from "../../img/searchPage/no results illust.jpg";
import starImg from "../../img/searchPage/star.svg";
import imgFavorite from "../../img/favorite.svg";
import {
  buttonPageClick,
  selectCurrentPage,
} from "../../features/searchPaginationSlice";
import { useDispatch } from "react-redux";

interface product {
  id: number;
  cpuName: string;
  price: string;
  socket: string;
  coresNumber: number;
  frequency: string;
  cacheL2: string;
  cacheL3: string;
  img: string;
}

const SearchPage = () => {
  const searchResult = useSelector(selectSearchResult);
  const supabaseData: product[] = useSelector(selectSupabaseData);
  const togglePage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mainPageRedirect = () => {
    navigate("/");
  };

  const filteredData = supabaseData.filter((product: product) =>
    Object.values(product).some((value) =>
      product.cpuName.toLowerCase().includes(searchResult.toLowerCase()),
    ),
  );

  const numItemsPerPage = 10;
  const numPages = Math.ceil(filteredData.length / numItemsPerPage);

  const cases = Array.from({ length: numPages }, (_, i) => i + 1).map(
    (page) => (
      <button
        key={page}
        onClick={() => {
          dispatch(buttonPageClick(page));
          console.log(togglePage);
        }}
      >
        {page}
      </button>
    ),
  );

  const handlePurchaseClick = () => {
    console.log("purchased");
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

  return (
    <div>
      <Header />
      <div style={{ background: "#f6f6f6", padding: "25px 0" }}>
        <div
          className={classes.search_wrapper}
          style={{ display: filteredData.length !== 0 ? "none" : "flex" }}
        >
          <div>
            <h2>Странно, но по запросу "{searchResult}" ничего нет</h2>
            <h3>Попробуйте изменить критерии поиска</h3>
            <div>
              <BlueButton
                width={105}
                height={44}
                text="В каталог"
                fontWeight={500}
                borderRadius={8}
                margin="0 10px 0 0"
                onClick={mainPageRedirect}
              />
              <BlueButton
                width={119}
                height={44}
                text="На главную"
                fontWeight={500}
                fontColor="#000"
                borderRadius={8}
                background="#F7F7F7"
                onClick={mainPageRedirect}
              />
            </div>
          </div>
          <img src={noResultsImg} alt="no results img" />
        </div>
        <div
          className={classes.received_items}
          style={{ display: filteredData.length >= 1 ? "block" : "none" }}
        >
          <div className={classes.results_list}>
            {filteredData.slice(startIdx, endIdx).map((product, index) => (
              <div
                className={classes.result}
                key={product.id}
                onClick={handlePurchaseClick}
              >
                <div className={classes.result__product_image}>
                  <img src={product.img} alt="product img" />
                </div>
                <div className={classes.result_description}>
                  <h3 className={classes.product_info}>
                    {product.cpuName} <br />[{product.socket},{" "}
                    {product.coresNumber}x{product.frequency}, L2 -{" "}
                    {product.cacheL2}, L3 -{product.cacheL3}]
                  </h3>
                  <div className={classes.purchase}>
                    <h2>{product.price}</h2>
                    <button
                      className={classes.purchase_button}
                      onClick={handlePurchaseClick}
                    >
                      <h3>Купить</h3>
                    </button>
                    <button className={classes.fav_button}>
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
            ))}
          </div>
          <div className={classes.pagination_row}>{cases}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
