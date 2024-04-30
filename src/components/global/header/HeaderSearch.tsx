import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  clearSearchTerm,
  setSearchTerm,
  selectSearchTerm,
} from "../../../features/counter/searchSlice";
import classes from "./HeaderSearch.module.css";
import { supabase } from "../../../helper/supabaseClient";
import searchImg from "../../../img/search.svg";
import crossImg from "../../../img/header images/cross.svg";
import { useDispatch } from "react-redux";

const HeaderSearch = () => {
  const [data, setData] = useState<products[]>([]);
  const [overlay, changeOverlay] = useState<boolean>(false);
  const [hover, changeHover] = useState<boolean>(false);
  const searchTerm = useSelector(selectSearchTerm);

  interface products {
    id: number;
    cpuName: string;
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    changeOverlay(true);
  };

  const inputBlur = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
    changeOverlay(false);
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
    dispatch(setSearchTerm(event.target.value));
  };

  const filteredData = data.filter((product) =>
    Object.values(product).some((value) =>
      product.cpuName.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );
  return (
    <div>
      <div
        className={classes.search_overlay}
        onClick={inputBlur}
        style={{ display: overlay ? "block" : "none" }}
      />
      <div
        className={classes.search_wrapper}
        onClick={handleWrapperClick}
        style={{ background: hover ? "#fff" : overlay ? "#fff" : "#f7f7f7" }}
        onMouseEnter={() => {
          changeHover(!hover);
        }}
        onMouseLeave={() => {
          changeHover(!hover);
        }}
      >
        <input
          ref={inputRef}
          className={classes.search_input}
          type="search"
          placeholder="Поиск по сайту"
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul
          className={classes.result_list}
          style={{ display: searchTerm.length > 0 ? "block" : "none" }}
        >
          {filteredData.map((product, index) => (
            <li
              className={classes.result}
              key={index}
              style={{ display: overlay ? "flex" : "none" }}
            >
              <img src={searchImg} alt="search img" />
              <h3>{product.cpuName}</h3>
            </li>
          ))}
        </ul>
        <div className={classes.search_buttons}>
          <button
            className={classes.button_one}
            style={{ display: searchTerm.length > 0 ? "inline-block" : "none" }}
            onClick={() => {
              dispatch(clearSearchTerm());
            }}
          >
            <img src={crossImg} alt="cross img" />
          </button>
          <button className={classes.button_two}>
            <img src={searchImg} alt="search img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
