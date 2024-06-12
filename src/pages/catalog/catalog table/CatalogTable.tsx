import React, { useEffect } from "react";
import classes from "./CatalogTable.module.css";
import { supabase } from "../../../helper/supabaseClient";
import { useSelector } from "react-redux";
import { selectSelectedQuery } from "../../../features/catalogSlice";

const CatalogTable = () => {
  const selectedQuery = useSelector(selectSelectedQuery);

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
    }
  };

  return <div className={classes.catalog__table_wrapper}>sad</div>;
};

export default CatalogTable;
