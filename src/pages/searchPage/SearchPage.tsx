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
  const navigate = useNavigate();

  const mainPageRedirect = () => {
    navigate("/");
  };

  const filteredData = supabaseData.filter((product: product) =>
    Object.values(product).some((value) =>
      product.cpuName.toLowerCase().includes(searchResult.toLowerCase()),
    ),
  );

  const handlePurchaseClick = () => {
    console.log("purchased");
  };

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
            {filteredData.map((product, index) => (
              <div
                className={classes.result}
                key={product.id}
                onClick={handlePurchaseClick}
              >
                <div className={classes.result__product_image}>
                  <img src={product.img} alt="product img" />
                </div>
                <div className={classes.result_description}>
                  <h3>
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
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
