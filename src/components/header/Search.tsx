"use client";
import { useState } from "react";
import OverlayPortal from "../shared/OverlayPortal";
import SearchOverlay from "./SearchOverlay";

export default function Search() {
  const [searchInput, searchInputType] = useState<string>("");
  const [inputHover, changeInputHover] = useState<boolean>(false);
  const [inputFocus, changeInputFocus] = useState<boolean>(false);

  return (
    <search className="grow-1 z-6">
      <form className="h-full " action="">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Поиск по сайту"
          className={`h-full rounded-[8px] bg-[var(--color-lightgray)] w-full px-[16px] transition ease-in ${
            inputHover && !inputFocus
              ? "shadow-[0_4px_8px_-2px_#091e4240] bg-white transition ease-in"
              : "transition ease-in"
          }`}
          onMouseEnter={() => {
            changeInputHover(true);
          }}
          onMouseLeave={() => {
            changeInputHover(false);
          }}
          onFocus={() => {
            changeInputFocus(true);
          }}
          onBlur={() => {
            changeInputFocus(false);
          }}
        />
      </form>
      <h2>{inputHover ? "hover" : "unhover"}</h2>
      <h2>{inputFocus ? "focus" : "blur"}</h2>
      <OverlayPortal>
        <SearchOverlay isVisible={inputFocus} />
      </OverlayPortal>
    </search>
  );
}
