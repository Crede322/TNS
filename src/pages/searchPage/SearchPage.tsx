import React from "react";
import Header from "../../components/global/header/Header";
import classes from "./SearchPage.module.css";
import { selectSearchResult } from "../../features/searchSlice";
import { selectSupabaseData } from "../../features/supabaseDataSlice";
import { useSelector } from "react-redux";
import BlueButton from "../../components/divided/BlueButton";
import noResultsImg from "../../img/searchPage/no results illust.jpg";

interface product {
  id: number;
  cpuName: string;
}

const SearchPage = () => {
  const searchResult = useSelector(selectSearchResult);
  const supabaseData: product[] = useSelector(selectSupabaseData);

  const filteredData = supabaseData.filter((product: product) =>
    Object.values(product).some((value) =>
      product.cpuName.toLowerCase().includes(searchResult.toLowerCase()),
    ),
  );

  return (
    <div>
      <Header />
      <div className={classes.top_line} />
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
              />
              <BlueButton
                width={119}
                height={44}
                text="На главную"
                fontWeight={500}
                fontColor="#000"
                borderRadius={8}
                background="#F7F7F7"
              />
            </div>
          </div>
          <img src={noResultsImg} alt="no results img" />
        </div>
        <div
          className={classes.received_items}
          style={{ display: filteredData.length >= 1 ? "block" : "none" }}
        >
          <h2>Процессоры</h2>
          <ul className={classes.result_list}>
            {filteredData.map((product, index) => (
              <li className={classes.result} key={product.id}>
                <h3>{product.cpuName}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
