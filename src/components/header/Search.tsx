"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import OverlayPortal from "../shared/OverlayPortal";
import SearchOverlay from "./SearchOverlay";
import useHeaderSearchStore from "@/store/HeaderSearchStore";
import Image from "next/image";
import Link from "next/link";

export default function Search() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const query = useHeaderSearchStore((state) => state.query);
  const results = useHeaderSearchStore((state) => state.results);
  const setQuery = useHeaderSearchStore((state) => state.setQuery);
  const [inputHover, changeFormHover] = useState<boolean>(false);
  const [inputFocus, changeInputFocus] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (query.length < 2) return;

    changeInputFocus(false);
    inputRef.current?.blur();

    router.push(`/search/?q=${query}`);
  };

  return (
    <search className="grow-1 z-6">
      <form
        onMouseEnter={() => {
          changeFormHover(true);
        }}
        onMouseLeave={() => {
          changeFormHover(false);
        }}
        className="h-full max-w-[800px]  relative"
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          type="text"
          name="search"
          id="search"
          placeholder="Поиск по сайту"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className={`h-full w-full rounded-[8px] bg-[var(--color-lightgray)] px-[16px] focus:bg-white transition ease-in 
            ${
              inputHover && !inputFocus
                ? "shadow-[0_4px_8px_-2px_#091e4240] bg-white transition ease-in"
                : "transition ease-in"
            }
            
            ${inputFocus && results.length > 0 ? "rounded-b-none" : ""}`}
          onFocus={() => {
            changeInputFocus(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              changeInputFocus(false);
            }, 150);
          }}
        />
        <ul
          className={`${
            inputFocus && query.length > 1 ? "block" : "hidden"
          } overflow-hidden rounded-b-[8px]`}
        >
          {results.map((result) => (
            <li key={result.id}>
              <Link
                href={`/product/${result.id}`}
                className="w-full flex justify-between bg-white py-[8px] pl-[14px] pr-[24px] hover:bg-[var(--color-lightgray)]"
              >
                <div className="flex gap-[12px]">
                  <Image
                    src="/icons/search.svg"
                    width={20}
                    height={20}
                    alt="search"
                  />
                  {result.cpuName}
                </div>
                <Image
                  src="/icons/arrow-right-top.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`${
            query.length > 0 ? "flex" : "hidden"
          } absolute top-1/2 -translate-y-1/2 right-[72px] border-r border-[var(--color-gray)] items-center justify-center px-[10px]`}
        >
          <button
            className="cursor-pointer p-[10px] rounded-[6px] hover:bg-[var(--color-lightgray)]"
            type="button"
            onClick={() => {
              setQuery("");
            }}
          >
            <Image src="/icons/cross.svg" width={26} height={26} alt="search" />
          </button>
        </div>
        <button
          type="submit"
          className="cursor-pointer hover:bg-[var(--color-lightgray)] p-[10px] rounded-[6px] absolute top-1/2 -translate-y-1/2 right-[14px]"
        >
          <Image src="/icons/search.svg" width={26} height={26} alt="search" />
        </button>
      </form>
      <OverlayPortal>
        <SearchOverlay isVisible={inputFocus} />
      </OverlayPortal>
    </search>
  );
}
