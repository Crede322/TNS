import Search from "@/components/header/Search";
import Logo from "@/components/shared/Logo";
import Image from "next/image";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <header className="white">
      <div className="container-main py-[14px]">
        <div className="flex justify-between gap-[20px] h-[64px]">
          <Logo className="w-[240px]" />
          <Search />
          <div className="flex gap-[6px]">
            <HeaderButton>
              <Image
                src="/icons/favorite.svg"
                width={28}
                height={28}
                alt="favorites"
              />
              <p className="text-[14px]">Избранное</p>
            </HeaderButton>
            <HeaderButton>
              <Image src="/icons/cart.svg" width={28} height={28} alt="cart" />
              <p className="text-[14px]">Корзина</p>
            </HeaderButton>
            <HeaderButton>
              <Image
                src="/icons/profile.svg"
                width={28}
                height={28}
                alt="login"
              />
              <p className="text-[14px]">Войти</p>
            </HeaderButton>
          </div>
        </div>
      </div>
    </header>
  );
}
