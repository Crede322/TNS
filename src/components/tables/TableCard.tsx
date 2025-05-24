"use client";

import { QueryResultType } from "@/types/queryResult";
import Image from "next/image";
import TableButtonPurchase from "./TableButtonPurchase";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/CartStore";
import { useEffect } from "react";
import ButtonFavorite from "../shared/ButtonFavorite";
import IndicatorRating from "../shared/IndicatorRating";
import IndicatorStock from "../shared/IndicatorStock";

interface ResultProps {
  result: QueryResultType;
}

export default function TableCard({ result }: ResultProps) {
  const router = useRouter();
  const goToProduct = () => {
    router.push(`/product/${result.id}`);
  };

  const cart = useCartStore((state) => state.cartItemsList);

  useEffect(() => {
    console.log(cart, "cart");
  }, [cart]);

  return (
    <li className="">
      <article
        className="flex flex-col gap-[20px] justify-between items-start p-[12px] bg-white rounded-[12px] h-full overflow-hidden shadow-1"
        onClick={goToProduct}
      >
        {result.img ? (
          <div className="flex items-center w-full justify-center">
            <div className="w-[150px] h-[150px] relative">
              <Image src={result.img} alt="product" fill sizes="100%" />
            </div>
          </div>
        ) : (
          <div className="w-[100px] h-[100px] bg-gray-200 flex items-center justify-center text-xs text-gray-600">
            No Image
          </div>
        )}

        <div className="leading-tight pt-[10px]">
          <p>Процессор {result.cpuName}</p>
          <span>
            {result.socket},L3 - {result.cacheL3} МБ
          </span>
          <span>
            {result.coresNumber} x {result.frequency} ГГц,
          </span>
          <span>L2 - {result.cacheL2} МБ,</span>
          <span>L3 - {result.cacheL3} МБ</span>
        </div>
        <div className="w-full">
          <div className="flex justify-between gap-[10px] mb-[8px] w-full">
            <p className="font-bold text-[20px] flex items-center text-nowrap">
              {result.price}
            </p>
            <div className="flex gap-[10px]">
              <TableButtonPurchase id={result.id} />
              <ButtonFavorite id={result.id} />
            </div>
          </div>
          <div className="flex justify-between">
            <IndicatorRating />
            <IndicatorStock />
          </div>
        </div>
      </article>
    </li>
  );
}
