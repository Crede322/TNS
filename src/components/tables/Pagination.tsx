"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

interface PaginationTypes {
  pages: number;
  page: number;
}

export default function Pagination({ page, pages }: PaginationTypes) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);
  const currentPage = Number(searchParams.get("page")) || 1;

  const goToPage = (pageNumber: number) => {
    console.log("go to page", pageNumber);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const prevPage = () => {
    goToPage(currentPage - 1);
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  return (
    <div className="h-[50px] w-fit flex items-center justify-center mx-auto shadow-1 px-[60px] bg-white rounded-[12px]">
      <button
        disabled={page === 1}
        onClick={prevPage}
        className={`h-full px-[24px] hover:bg-[var(--color-lightblue)] filter grayscale hover:grayscale-0 ${
          page === 1 ? "!cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <Image
          src="/icons/arrowBlue.svg"
          className={`rotate-[-90deg]`}
          width={14}
          height={14}
          alt="prev"
        />
      </button>
      {pagesArray.map((togglePage) => (
        <button
          className={`h-full px-[28px] hover:bg-[var(--color-lightblue)] ${
            page === togglePage && "border-b-[3px] border-[var(--color-main)]"
          }`}
          key={togglePage}
          onClick={() => {
            goToPage(togglePage);
          }}
        >
          {togglePage}
        </button>
      ))}
      <button
        disabled={page + 1 > pages}
        onClick={nextPage}
        className={`h-full px-[24px] hover:bg-[var(--color-lightblue)] filter grayscale hover:grayscale-0 ${
          page + 1 > pages ? "!cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <Image
          src="/icons/arrowBlue.svg"
          className={`rotate-[90deg]`}
          width={14}
          height={14}
          alt="prev"
        />
      </button>
    </div>
  );
}
