import { useRef, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./HeaderSearch.module.css";

import { supabase } from "../../../../helper/supabaseClient";

// Redux
import {
  clearSearchTerm,
  setSearchTerm,
  selectSearchTerm,
  setSearchResult,
  selectSearchHover,
  searchMouseOn,
  searchMouseOff,
} from "../../../../features/searchSlice";
import {
  putData,
  selectSupabaseData,
} from "../../../../features/supabaseDataSlice";

// img
import searchImg from "../../../../img/search.svg";
import crossImg from "../../../../img/header images/cross.svg";

const HeaderSearch = () => {
  //для css
  const [overlay, changeOverlay] = useState<boolean>(false);
  const searchHover = useSelector(selectSearchHover);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTerm = useSelector(selectSearchTerm);
  const supabaseData: product[] = useSelector(selectSupabaseData);

  interface product {
    cpuName: string;
    id: number;
  }

  // => клик на инпут
  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    changeOverlay(true);
  };

  //фокус на инпут
  const inputBlur = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
    changeOverlay(false);
  }, []);

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      getResults();
    }
  };

  // данные полученные с инпута при поиске, только наименования
  const fetchData = async (searchTerm: string) => {
    try {
      const { data } = await supabase
        .from("cpu")
        .select("cpuName, id")
        .ilike("cpuName", `%${searchTerm}%`);
      dispatch(putData(data));
    } catch (error) {
      console.error("Error fetching supabase data", error);
    }
  };

  // поиск и проверка что инпут не пустой
  const getResults = () => {
    if (searchTerm.length > 0) {
      if (inputRef.current) {
        inputRef.current.blur();
      }
      changeOverlay(false);
      const searchQuery = encodeURIComponent(searchTerm);
      navigate(`/search/?q=${searchQuery}`);
      dispatch(setSearchResult());
      window.location.reload();
    }
  };

  // ввод символов в инпут
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    dispatch(setSearchTerm(searchTerm));
    fetchData(searchTerm);
  };

  // клик на элемент из dropdown при поиске
  const handleClickResult = (id: number) => {
    navigate(`/product/${id}`);
    window.location.reload();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className={classes.search}>
      <div
        className={classes.search_overlay}
        onClick={inputBlur}
        style={{ display: overlay ? "block" : "none" }}
      />

      <div
        className={classes.search_wrapper}
        onClick={handleWrapperClick}
        style={{
          background: searchHover ? "#fff" : overlay ? "#fff" : "#f7f7f7",
        }}
        onMouseEnter={() => {
          dispatch(searchMouseOn());
        }}
        onMouseLeave={() => {
          dispatch(searchMouseOff());
        }}
      >
        <input
          id="header_input"
          ref={inputRef}
          className={classes.search_input}
          type="search"
          autoComplete="off"
          placeholder="Поиск по сайту"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeydown}
        />

        <ul
          className={classes.result_list}
          style={{ display: searchTerm.length > 0 ? "block" : "none" }}
        >
          {supabaseData.slice(0, 10).map((product, index) => (
            <li
              className={classes.result}
              key={index}
              style={{ display: overlay ? "flex" : "none" }}
              onClick={() => handleClickResult(product.id)}
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
