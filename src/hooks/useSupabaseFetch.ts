import { useState, useEffect } from "react";
import { supabase } from "../helper/supabaseClient";

interface Product {
  id: string;
  cpuName: string;
  socket: string;
  price: string;
  year: number;
  coresNumber: number;
  threads: number;
  cacheL2: number;
  cacheL3: number;
  frequency: number;
  overclockedFrequency: string;
  img: string;
  DDR: string;
  maxRam: string;
  multiplier: boolean;
  ramFrequency: number;
  TDP: number;
  maxHeat: number;
  integratedGPU: boolean;
  ramChannels: number;
}

const useSupabaseFetch = (productId: number) => {
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

export default useSupabaseFetch;
