import React, { useEffect, useState } from "react";
import classes from "./CatalogTable.module.css";
import { supabase } from "../../../helper/supabaseClient";
import { useSelector } from "react-redux";
import { selectSelectedQuery } from "../../../features/catalogSlice";
import imgFavorite from "../../../img/favorite.svg";
import starImg from "../../../img/searchPage/star.svg";

interface Product {
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

const CatalogTable = () => {
  const selectedQuery = useSelector(selectSelectedQuery);
  const [catalogData, setCatalogData] = useState<Product[]>([]);

  useEffect(() => {
    fetchFilteredData();
  }, [selectedQuery]);

  const fetchFilteredData = async () => {
    let query = supabase.from("cpu").select();

    switch (selectedQuery) {
      case "2023 Год":
        query = query.eq("year", "2023");
        break;
      case "AM4":
        query = query.eq("socket", "AM4");
        break;
      case "6 Ядер":
        query = query.eq("coresNumber", 6);
        break;
      case "8 Ядер":
        query = query.eq("coresNumber", 8);
        break;
      case "12 Потоков":
        query = query.eq("threads", 12);
        break;
      case "Свободный множитель":
        query = query.eq("multiplier", true);
        break;
      case "Частота RAM: 3200МГц":
        query = query.eq("ramFrequency", 3200);
        break;
      case "Встроенный видеочип":
        query = query.eq("integratedGPU", true);
    }
    const { data, error } = await query;
    if (error) {
      console.error(error);
    } else {
      console.log(data);
      setCatalogData(data);
    }
  };

  const handlePurchaseClick = (productId: number) => {
    console.log("Navigating to product:", productId);
  };
  const handleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("favorite");
  };

  return (
    <div className={classes.catalog__table_wrapper}>
      <div className={classes.results_list}>
        {catalogData.map((product) => (
          <div
            className={classes.result}
            onClick={() => handlePurchaseClick(product.id)}
          >
            <div className={classes.result__product_image}>
              <img src={product.img} alt="product img" />
            </div>

            <div className={classes.result_description}>
              <h3 className={classes.product_info}>
                {product.cpuName} <br />[{product.socket}, {product.coresNumber}{" "}
                x {product.frequency} ГГц, L2 - {product.cacheL2} МБ, L3 -{" "}
                {product.cacheL3} МБ]
              </h3>
              <div className={classes.purchase}>
                <h2>{product.price}</h2>

                <button
                  className={classes.purchase_button}
                  onClick={() => handlePurchaseClick(product.id)}
                >
                  <h3>Купить</h3>
                </button>

                <button className={classes.fav_button} onClick={handleFavorite}>
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
  );
};

export default CatalogTable;
