import { useEffect } from "react";
import { supabase } from "../../../../helper/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedQuery } from "../../../../features/catalogSlice";
import { putFilteredData } from "../../../../features/supabaseDataSlice";
import CatalogPagination from "../../../../components/shared/pagination/CatalogPagination";

const CatalogTable = () => {
  const selectedQuery = useSelector(selectSelectedQuery);
  const dispatch = useDispatch();

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
      case "LGA 1700":
        query = query.eq("socket", "LGA 1700");
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
        break;
      case "Amd":
        query = query.eq("brand", "amd");
        break;
      case "Intel":
        query = query.eq("brand", "intel");
        break;
    }
    const { data, error } = await query;
    if (error) {
      console.error(error);
    } else {
      dispatch(putFilteredData(data));
    }
  };

  return (
    <div>
      <CatalogPagination />
    </div>
  );
};

export default CatalogTable;
