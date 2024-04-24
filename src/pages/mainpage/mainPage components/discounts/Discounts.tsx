import React, { useState, useEffect } from "react";
import { supabase } from "../../../../helper/supabaseClient";

interface Item {
  id: number;
  cpuName: string;
  socket: string;
  threads: number;
  cacheL2: string;
}

const Discounts = () => {
  const cpuIds = [15, 18, 8, 17, 16, 12];
  const [cpus, setCpus] = useState<Item[]>([]);

  useEffect(() => {
    getCpusByIds(cpuIds);
  }, []);

  async function getCpusByIds(ids: number[]) {
    try {
      const { data, error } = await supabase.from("cpu").select().in("id", ids);

      if (error) {
        throw error;
      }

      if (data) {
        setCpus(data);
      }
    } catch (error) {
      console.error("Ошибка получения данных:", (error as Error).message);
    }
  }

  return (
    <ul>
      {cpus.map((cpus) => (
        <li key={cpus.id}>{cpus.cpuName}</li>
      ))}
    </ul>
  );
};

export default Discounts;
