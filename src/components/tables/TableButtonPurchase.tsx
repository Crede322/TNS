"use client";

import { useCartStore } from "@/store/CartStore";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
}

export default function TableButtonPurchase({ id }: Props) {
  const router = useRouter();
  const addToCart = useCartStore((state) => state.addToCart);
  const isInCart = useCartStore((state) => state.cartItemsList).some(
    (cartItem) => cartItem.id === id
  );

  const toggleItemInCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!isInCart) {
      addToCart(id);
    } else {
      router.push(`/product/${id}`);
    }
  };

  return (
    <button
      onClick={toggleItemInCart}
      className={`w-[120px] rounded-[8px] px-6 py-3 font-bold border-[1px] text-nowrap ${
        isInCart
          ? "border-[var(--color-main)] text-[var(--color-main)]"
          : "border-[var(--color-main)] bg-[var(--color-main)] text-white"
      }`}
    >
      {!isInCart ? "Купить" : "В корзине"}
    </button>
  );
}
