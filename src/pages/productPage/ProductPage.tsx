import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../helper/supabaseClient";
import Header from "../../components/global/header/Header";

interface Product {
  id: string;
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
        .select("id")
        .eq("id", `${parsedProductId}`);
      if (data && data.length > 0) {
        setProduct(data[0]);
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
      <h2>qwrefasd</h2>
      <h3>{product.id + 1}</h3>
    </div>
  );
};

export default ProductPage;
