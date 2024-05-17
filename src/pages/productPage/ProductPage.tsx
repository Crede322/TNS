import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../helper/supabaseClient";
import Header from "../../components/global/header/Header";
import classes from "./ProductPage.module.css";
import starImg from "../../img/searchPage/star.svg";

interface Product {
  id: string;
  cpuName: string;
  img: string;
  socket: string;
  frequency: number;
  cacheL2: number;
  cacheL3: number;
  coresNumber: number;
  DDR: string;
  ramFrequency: number;
  TDP: number;
}

const ProductPage: React.FC = () => {
  const { productId }: { productId?: string } = useParams();
  const parsedProductId = parseInt(productId || "", 10);
  const [product, setProduct] = useState<Product | null>(null);

  const fetchData = async (parsedProductId: number) => {
    console.log(parsedProductId);
    try {
      const { data } = await supabase
        .from("cpu")
        .select("*")
        .eq("id", `${parsedProductId}`);
      if (data) {
        setProduct(data[0]);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching supabase data", error);
    }
  };

  useEffect(() => {
    fetchData(parsedProductId);
    console.log("effect");
  }, [parsedProductId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className={classes.product_background}>
        <div className={classes.product_container}>
          <h1>Процессор {product.cpuName}</h1>
          <div className={classes.product_card}>
            <div className={classes.product_card_main}>
              <img
                src={product.img}
                alt="product img"
                className={classes.product_img}
              />
              <div className={classes.product_characteristics}>
                <h3>
                  {product.socket}, {product.coresNumber} x {product.frequency}{" "}
                  ГГц, L2 - {product.cacheL2} МБ, L3 - {product.cacheL3} МБ, 2 x{" "}
                  {product.DDR}-{product.ramFrequency} МГц, TDP {product.TDP} Вт
                </h3>
                <div className={classes.stars}>
                  <img src={starImg} alt="rating img" />
                  <img src={starImg} alt="rating img" />
                  <img src={starImg} alt="rating img" />
                  <img src={starImg} alt="rating img" />
                  <img src={starImg} alt="rating img" />
                  <h4>10</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
