import React from "react";
import Header from "../../components/global/header/Header";
import classes from "./SearchPage.module.css";
import { selectSearchResult } from "../../features/searchSlice";
import { selectSupabaseData } from "../../features/supabaseDataSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlueButton from "../../components/divided/BlueButton";
import noResultsImg from "../../img/searchPage/no results illust.jpg";
import starsImg from "../../img/searchPage/stars.svg";

interface product {
  id: number;
  cpuName: string;
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
          <div className={classes.result_list}>
            {filteredData.map((product, index) => (
              <div className={classes.result} key={product.id}>
                <div className={classes.result_inner}>
                  <img src={product.img} alt="product img" />
                </div>
                <div className={classes.result_description}>
                  <h3>
                    {product.cpuName} <br />[{product.socket},{" "}
                    {product.coresNumber}x{product.frequency}, L2 -{" "}
                    {product.cacheL2}, L3 -{product.cacheL3}]
                  </h3>
                  <img src={starsImg} alt="rating img" />
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
