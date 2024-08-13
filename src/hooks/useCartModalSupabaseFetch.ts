import { useState, useEffect } from "react";
import { supabase } from "../helper/supabaseClient";

interface Product {
  cpuName: string;
  img: string;
  price: string;
}

const useCartModalSupabaseFetch = (productId: number) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("cpu")
          .select("*")
          .eq("id", `${productId}`);

        if (error) throw error;

        if (data) {
          setProduct(data[0]);
        }
      } catch (error) {
        console.error("Error fetching supabase data", error);
      }
    };
    fetchData();
  }, [productId]);

  return { product };
};

export default useCartModalSupabaseFetch;
