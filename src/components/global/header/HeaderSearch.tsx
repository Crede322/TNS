import React, { useRef, useState, useEffect } from "react";
import classes from "./HeaderSearch.module.css";
import { supabase } from "../../../helper/supabaseClient";

const HeaderSearch = () => {
  const [data, setData] = useState<products[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  interface products {
    id: number;
    cpuName: string;
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from("cpu").select();
      if (data) {
        setData(data);
        console.log(data);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((product) =>
    Object.values(product).some((value) =>
      product.cpuName.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );
  return (
    <div className={classes.search_wrapper} onClick={handleWrapperClick}>
      <input
        ref={inputRef}
        className={classes.search_input}
        type="search"
        placeholder="Поиск по сайту"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((product, index) => (
          <li key={index}>{product.cpuName}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderSearch;
