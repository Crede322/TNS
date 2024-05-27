import React, { useEffect, useState } from "react";
import { supabase } from "../../../helper/supabaseClient";

interface RecentItemProps {
  historyObj: number;
}

interface ProductTypes {
  img: string;
}

const RecentItem: React.FC<RecentItemProps> = ({ historyObj }) => {
  const [productData, setProductData] = useState<ProductTypes>();

  useEffect(() => {
    const fetchFilteredData = async (historyObj: number) => {
      try {
        const { data } = await supabase
          .from("cpu")
          .select("*")
          .eq("id", historyObj);
        if (data) {
          setProductData(data[0]);
        }
      } catch (error) {
        console.error("ошибка supabase из истории товаров", error);
      }
    };
    fetchFilteredData(historyObj);
  }, []);

  return <div>{<img src={productData?.img} alt="" />}</div>;
};

export default RecentItem;
