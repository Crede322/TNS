import React, { useRef, useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearSearchTerm,
  setSearchTerm,
  selectSearchTerm,
  setSearchResult,
} from "../../../features/searchSlice";
import {
  putData,
  selectSupabaseData,
} from "../../../features/supabaseDataSlice";
import { useDispatch } from "react-redux";
import { supabase } from "../../../helper/supabaseClient";
import classes from "./HeaderSearch.module.css";
import searchImg from "../../../img/search.svg";
import crossImg from "../../../img/header images/cross.svg";

const HeaderSearch = () => {
  const [overlay, changeOverlay] = useState<boolean>(false);
  const [hover, changeHover] = useState<boolean>(false);
  const searchTerm = useSelector(selectSearchTerm);
  const supabaseData: product[] = useSelector(selectSupabaseData);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  interface product {
    cpuName: string;
  }

  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    changeOverlay(true);
  };

  const inputBlur = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
    changeOverlay(false);
  }, []);

  const fetchData = async (searchTerm: string) => {
    try {
      const { data } = await supabase
        .from("cpu")
        .select("cpuName")
        .ilike("cpuName", `%${searchTerm}%`);
      dispatch(putData(data));
      console.log(data);
    } catch (error) {
      console.error("Error fetching supabase data", error);
    }
  };

  //Redux
  const getResults = () => {
    if (searchTerm.length > 0) {
      if (inputRef.current) {
        inputRef.current.blur();
      }
      changeOverlay(false);
      //Router
      const searchQuery = encodeURIComponent(searchTerm);
      navigate(`/search/?q=${searchQuery}`);
      dispatch(setSearchResult());
    }
  };

  useEffect(() => {
    fetchData("amd");
  }, []);

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      getResults();
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    dispatch(setSearchTerm(searchTerm));
    fetchData(searchTerm);
  };

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
          onKeyDown={handleKeydown}
        />
        <ul
          className={classes.result_list}
          style={{ display: searchTerm.length > 0 ? "block" : "none" }}
        >
          {supabaseData.map((product, index) => (
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
          <button className={classes.button_two} onClick={getResults}>
            <img src={searchImg} alt="search img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
